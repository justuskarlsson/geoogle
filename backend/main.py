from typing import Union
from PIL import Image
import io
from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel





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
def read_root():
    return {"Hello": "World"}


class NearestK(BaseModel):
    k: int = 10
    tax: Union[float, None] = None


async def nearest_k(img_upload: UploadFile, k: int):
    b = await img_upload.read()
    img = Image.open(io.BytesIO(b))
    print(img, k)
    return {
        "matches": []
    }

@app.post("/nearest-k")
async def post_nearest_k(img: UploadFile = Form(), k: int = Form()):
    return await nearest_k(img, k)