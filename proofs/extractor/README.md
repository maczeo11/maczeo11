# Universal Text Extractor — Proof Pack

> **Actual repo:** `https://github.com/maczeo11/File_extractor` (not `universal-text-extractor` — resume link will 404)
> **Pinned clone:** `C:\Users\bhanu\AppData\Local\Temp\file_extractor` 2026-08-21

## Claim → Proof for `resume.tex:157-161`

| Resume line | File pointer | Proof |
|---|---|---|
| `Normalizes PDF, DOCX, XLSX, images, HTML into one JSON schema, magic-byte checks` | `app/main.py:42-62` `magic.from_buffer(file_bytes, mime=True)` + `app/extractors/*.py` + `app/schemas.py` `DocumentResponse` | `Get-Content app/main.py` shows `EXTRACTOR_MAP` keyed by `mime_type`, fallback by extension. Spoofed extension caught because `mime_type` comes from buffer, not filename. |
| `Native PDF parsing + OpenCV grayscale + Otsu → Tesseract LSTM` | `app/utils.py:6-18` `cv2.cvtColor(..., COLOR_BGR2GRAY)` → `cv2.threshold(..., THRESH_BINARY+THRESH_OTSU)` → `PIL.Image.fromarray` → `app/extractors/images.py:7` `pytesseract.image_to_string` | `Get-Content app/utils.py` + `Get-Content app/extractors/images.py` |

## Reproduce (2 min)

```bash
git clone https://github.com/maczeo11/File_extractor && cd File_extractor
pip install -r requirements.txt
uvicorn app.main:app --reload
# spoof test — rename PNG to PDF, upload to /api/extract, check mime from buffer != application/pdf
curl -F "file=@spoofed.pdf" http://localhost:8000/api/extract | jq .mime_detected
# OCR preprocess proof
curl -F "file=@scanned.png" http://localhost:8000/api/extract | jq .units[0].source  # -> ocr_engine
```

## Fix resume link

`resume.tex:157` currently points to `https://github.com/maczeo11/universal-text-extractor` → 404. Change to `https://github.com/maczeo11/File_extractor`.

## Files here
* Copy of `app/main.py:30-70` magic-byte snippet and `app/utils.py` Otsu snippet — keep for interview walkthrough.
