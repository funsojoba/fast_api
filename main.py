from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(router, prefix="/api")

@app.get('/board')
def get_board():
    board_data = {
        "tasks":{
            "task-1":{"id":"task-1", "content":"create video"},
            "task-2":{"id":"task-2", "content":"edit video"},
            "task-3":{"id":"task-3", "content":"publish video"},
        },
        "columns":{
            "column-1":{
                "id": "column-1",
                "title":"to do",
                "taskIds":["task-2", "task-3"]
            },
            "column-2":{
                "id": "column-2",
                "title":"Done",
                "taskIds":["task-2"]
            },
            
        },
        "column_order":['column-1', 'column-2']
    }
    return {"board":board_data}