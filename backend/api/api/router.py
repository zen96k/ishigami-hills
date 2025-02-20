from api.endpoints import rss
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(rss.api_router)
