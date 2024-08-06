from fastapi import APIRouter
from models.test import Test

router = APIRouter()

#basic get request
@router.get("/", status_code=200)
async def read_test():
    return {"message": "you're in the est root"}


#basic empty post request with 201 status code
@router.post("/posttest", status_code=201)
async def post_test(test: Test):
    return test


#basic retreiving of params in get request with type validation: int/ str ... (no enums)
@router.get("/test/{test_id}")
async def param_test(test_id: int):
    return {"test_id": test_id}

#multiple complex params & queries
# ex. http://127.0.0.1:1337/test/12/plus/15?q1=999&q2=hello%20world
@router.get("/test/{x}/plus/{y}")
async def multiple_params_queries(q1:int | None, q2: str, x:int, y:int):
    return {
        "param_x": x,
        "param_y": y,
        "query1": q1,
        "query2": q2,
        "sum_of_params": x+y
    }

#basic query in get request
@router.get("/items/query")
async def query_test(id: int, name: str):
    if(id == 1 and name == "dhia"):
        return {
            "id": id,
            "name": name
        }
    return {
        "message": "error in query test get route"
    }
    
