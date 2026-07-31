import { writeFileSync, mkdirSync } from "fs";

const USER = "maczeo11";
const TOKEN = process.env.GITHUB_TOKEN || "";
const HEADERS = {
  ...(TOKEN ? { Authorization: `token ${TOKEN}` } : {}),
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "github-stats-generator",
};

const ALLOWED_LANGS = new Set([
  "TypeScript",
  "Python",
  "Go",
  "Rust",
  "Java",
  "C++",
  "Dart",
]);

const LANG_COLORS = {
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Dart: "#00B4AB",
};

async function fetchJSON(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

async function fetchAllPages(url) {
  let page = 1;
  const results = [];
  while (true) {
    const sep = url.includes("?") ? "&" : "?";
    const data = await fetchJSON(`${url}${sep}per_page=100&page=${page}`);
    if (!data.length) break;
    results.push(...data);
    if (data.length < 100) break;
    page++;
  }
  return results;
}

async function getStats() {
  const user = await fetchJSON(`https://api.github.com/users/${USER}`);
  const repos = await fetchAllPages(
    `https://api.github.com/users/${USER}/repos?type=owner`
  );

  let totalStars = 0;
  const langBytes = {};

  for (const repo of repos) {
    totalStars += repo.stargazers_count;
    try {
      const langs = await fetchJSON(repo.languages_url);
      for (const [lang, bytes] of Object.entries(langs)) {
        if (ALLOWED_LANGS.has(lang)) {
          langBytes[lang] = (langBytes[lang] || 0) + bytes;
        }
      }
    } catch {}
  }

  const now = new Date();
  const year = now.getFullYear();
  const startDate = `${year}-01-01`;

  let commits = 0;
  try {
    const commitData = await fetchJSON(
      `https://api.github.com/search/commits?q=author:${USER}+author-date:${startDate}..${year}-12-31&per_page=1`
    );
    commits = commitData.total_count || 0;
  } catch {}

  let prs = 0;
  try {
    const prData = await fetchJSON(
      `https://api.github.com/search/issues?q=author:${USER}+type:pr&per_page=1`
    );
    prs = prData.total_count || 0;
  } catch {}

  return {
    stars: totalStars,
    commits,
    prs,
    repos: user.public_repos,
    followers: user.followers,
    languages: Object.entries(langBytes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6),
  };
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + " KB";
  return bytes + " B";
}

function generateStatsSVG(stats) {
  const maxLang = stats.languages.length > 0 ? stats.languages[0][1] : 1;

  const langBars = stats.languages
    .map(
      ([lang, bytes], i) => {
        const pct = Math.max((bytes / maxLang) * 100, 2);
        const color = LANG_COLORS[lang] || "#8b8b8b";
        const y = 135 + i * 26;
        return `
      <text x="25" y="${y + 4}" fill="#c9d1d9" font-size="13" font-family="Segoe UI, Ubuntu, sans-serif">${escapeXml(lang)}</text>
      <rect x="140" y="${y - 7}" width="280" height="14" rx="7" fill="#2a2d3e"/>
      <rect x="140" y="${y - 7}" width="${(280 * pct) / 100}" height="14" rx="7" fill="${color}"/>
      <text x="430" y="${y + 4}" fill="#8b8b8b" font-size="11" font-family="Segoe UI, Ubuntu, sans-serif">${escapeXml(formatBytes(bytes))}</text>`;
      }
    )
    .join("");

  return `<svg width="576" height="${155 + stats.languages.length * 26}" viewBox="0 0 576 ${155 + stats.languages.length * 26}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font: 600 18px 'Segoe UI', Ubuntu, sans-serif; fill: #a371f7; }
    .stat-label { font: 500 12px 'Segoe UI', Ubuntu, sans-serif; fill: #8b8b8b; }
    .stat-value { font: 700 20px 'Segoe UI', Ubuntu, sans-serif; fill: #c9d1d9; }
    .section { font: 600 13px 'Segoe UI', Ubuntu, sans-serif; fill: #a371f7; }
  </style>
  <rect width="576" height="100%" rx="8" fill="#1a1b27"/>
  <rect x="0.5" y="0.5" width="575" height="99%" rx="7.5" fill="none" stroke="#2a2d3e"/>

  <text x="25" y="35" class="title">GitHub Stats</text>

  <text x="25" y="75" class="stat-label">Stars</text>
  <text x="25" y="95" class="stat-value">${stats.stars}</text>

  <text x="130" y="75" class="stat-label">Commits</text>
  <text x="130" y="95" class="stat-value">${stats.commits}</text>

  <text x="265" y="75" class="stat-label">PRs</text>
  <text x="265" y="95" class="stat-value">${stats.prs}</text>

  <text x="360" y="75" class="stat-label">Repos</text>
  <text x="360" y="95" class="stat-value">${stats.repos}</text>

  <text x="455" y="75" class="stat-label">Followers</text>
  <text x="455" y="95" class="stat-value">${stats.followers}</text>

  <line x1="25" y1="115" x2="551" y2="115" stroke="#2a2d3e" stroke-width="1"/>

  <text x="25" y="128" class="section">Top Languages</text>
  ${langBars}
</svg>`;
}

function generateTopLangsSVG(stats) {
  const maxLang = stats.languages.length > 0 ? stats.languages[0][1] : 1;
  const totalBytes = stats.languages.reduce((sum, [, b]) => sum + b, 0);

  const langBars = stats.languages
    .map(
      ([lang, bytes], i) => {
        const pct = Math.max((bytes / maxLang) * 100, 2);
        const share = totalBytes > 0 ? ((bytes / totalBytes) * 100).toFixed(1) : "0";
        const color = LANG_COLORS[lang] || "#8b8b8b";
        const y = 55 + i * 32;
        return `
      <text x="25" y="${y + 5}" fill="#c9d1d9" font-size="14" font-family="Segoe UI, Ubuntu, sans-serif" font-weight="600">${escapeXml(lang)}</text>
      <rect x="155" y="${y - 8}" width="300" height="16" rx="8" fill="#2a2d3e"/>
      <rect x="155" y="${y - 8}" width="${(300 * pct) / 100}" height="16" rx="8" fill="${color}"/>
      <text x="465" y="${y + 5}" fill="#8b8b8b" font-size="12" font-family="Segoe UI, Ubuntu, sans-serif">${share}%</text>`;
      }
    )
    .join("");

  return `<svg width="576" height="${75 + stats.languages.length * 32}" viewBox="0 0 576 ${75 + stats.languages.length * 32}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font: 600 18px 'Segoe UI', Ubuntu, sans-serif; fill: #a371f7; }
  </style>
  <rect width="576" height="100%" rx="8" fill="#1a1b27"/>
  <rect x="0.5" y="0.5" width="575" height="99%" rx="7.5" fill="none" stroke="#2a2d3e"/>

  <text x="25" y="35" class="title">Languages</text>
  ${langBars}
</svg>`;
}

async function main() {
  console.log("Fetching GitHub stats for", USER);
  const stats = await getStats();

  console.log("Stats:", JSON.stringify(stats, null, 2));

  mkdirSync("stats", { recursive: true });

  const statsSVG = generateStatsSVG(stats);
  writeFileSync("stats/stats.svg", statsSVG);
  console.log("Wrote stats/stats.svg");

  const langsSVG = generateTopLangsSVG(stats);
  writeFileSync("stats/top-langs.svg", langsSVG);
  console.log("Wrote stats/top-langs.svg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
