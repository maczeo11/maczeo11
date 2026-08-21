    CORSMiddleware,
    allow_origins=["*"],      
    allow_credentials=False, 
    allow_methods=["*"],     
    allow_headers=["*"],     
)
#THIS IS USED TO MAP EACH FILE TYPE TO RESPECTIVE METHODS
EXTRACTOR_MAP = {
    "application/pdf": PDFExtractor,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": WordExtractor,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": TableExtractor,
    "application/vnd.ms-excel": TableExtractor,
    "text/csv": lambda f, n: TableExtractor(f, n, is_csv=True),
    "text/plain": lambda f, n: TableExtractor(f, n, is_csv=True),
    "image/png": ImageExtractor,
    "image/jpeg": ImageExtractor,
    "image/tiff": ImageExtractor,
    "text/html": HTMLExtractor
}
#THIS IS THE MAIN ROUTE
@app.get("/")
def health_check():
    return {"status": "active", "service": "text-extractor-v1"}


@app.post("/api/extract", response_model=DocumentResponse)
def extract_file(file: UploadFile):
    start_time = time.time()
    #REASDS THE FILE
    try:
        file_bytes = file.file.read()
    except Exception:
        raise HTTPException(status_code=400, detail="Corrupt or unreadable file")

    #  Detect Type
    try:
        mime_type = magic.from_buffer(file_bytes, mime=True)
    except Exception:
        mime_type = "application/octet-stream"

