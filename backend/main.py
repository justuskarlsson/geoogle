from typing import Union
from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware



from server.nearest_k import nearest_k, NearestKResponse





app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def _():
    return {"Hello": "World"}




@app.post("/nearest-k")
async def _(img: UploadFile = Form(), k: int = Form()) -> NearestKResponse:
    return await nearest_k(img, k)