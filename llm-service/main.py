from fastapi import FastAPI
from routes import testRoute

app = FastAPI()

app.include_router(testRoute.router)

