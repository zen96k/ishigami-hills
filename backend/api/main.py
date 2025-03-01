from api import router
from fastapi import FastAPI

app = FastAPI(title="石上ヒルズ", description="アジカンの非公式ファンサイト")
app.include_router(router.api_router)
