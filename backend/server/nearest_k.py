from pydantic import BaseModel
from fastapi import UploadFile
from PIL import Image
import io
import torch

from a3dr.inference import encode
import json



class Match(BaseModel):
    id: int
    x: float
    y: float
    z: float

class NearestKResponse(BaseModel):
    matches: list[Match]

data_path = "feat_vecs.pt"
feat_vecs: list[torch.Tensor] = []
try:
    feat_vecs = torch.load(data_path)
except:
    pass



def add_to_dataset(feat_vec):
    feat_vecs.append(feat_vec)
    torch.save(feat_vecs, data_path)

async def nearest_k(img_upload: UploadFile, k: int):
    b = await img_upload.read()
    img = Image.open(io.BytesIO(b))
    print(img, k)
    feat_vec = encode(img)
    # add_to_dataset(feat_vec)
    print(len(feat_vecs))
    print(type(feat_vecs))
    return NearestKResponse(
        matches=[
            Match(id=0, x=1.0, y=2.0, z=0.0)
        ]
    )
