from fastapi import APIRouter
from models.test import Test

router = APIRouter()

@router.get("/", status_code=200)
async def read_test():
    return {"message": "you're in the est root"}

@router.post("/posttest", status_code=201)
async def post_test(test: Test):
    return test