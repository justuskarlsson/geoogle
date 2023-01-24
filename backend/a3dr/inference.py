from torchvision import models


device = "cuda"
model = models.alexnet(models.AlexNet_Weights.IMAGENET1K_V1)
model = model.to(device)

