from torchvision import models
import torch
from PIL import Image

device = "cpu"
weights = models.AlexNet_Weights.IMAGENET1K_V1
preprocess = weights.transforms()
model = models.alexnet(weights)

model.classifier.pop(-1)
model = model.to(device)


def encode(img: Image):
    x: torch.Tensor = preprocess(img).to(device)
    feat = model(x.unsqueeze(0)).squeeze(0)
    print(feat.shape)
    return feat
