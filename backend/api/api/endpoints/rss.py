import requests
from fastapi import APIRouter, HTTPException
from models import rss

api_router = APIRouter()


@api_router.get(
    path="/rss/general-information",
    name="General Information",
    description="公式サイトの一般情報を取得する。",
    tags=["RSS"],
    response_model=rss.RSS,
)
async def get_general_information():
    api_endpoint_url = "https://api.rss2json.com/v1/api.json"
    rss_url = "https://www.sonymusic.co.jp/xml/artInfoRSS.php?id=72000340"

    response = requests.get(url=api_endpoint_url, params={"rss_url": rss_url})

    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code)


@api_router.get(
    path="/rss/gotch-note",
    name="Gotch Note",
    description="GotchのNoteを取得する。",
    tags=["RSS"],
    response_model=rss.RSS,
)
async def get_gotch_note():
    api_endpoint_url = "https://api.rss2json.com/v1/api.json"
    rss_url = "https://note.com/gotch_akg/rss"

    response = requests.get(url=api_endpoint_url, params={"rss_url": rss_url})

    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code)


@api_router.get(
    path="/rss/avms-note",
    name="AVMS Note",
    description="AVMSのNoteを取得する。",
    tags=["RSS"],
    response_model=rss.RSS,
)
async def get_avms_note():
    api_endpoint_url = "https://api.rss2json.com/v1/api.json"
    rss_url = "https://note.com/avms/rss"

    response = requests.get(url=api_endpoint_url, params={"rss_url": rss_url})

    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code)


@api_router.get(
    path="/rss/google-news",
    name="Google News",
    description="アジカンのニュースを取得する。",
    tags=["RSS"],
    response_model=rss.RSS,
)
async def get_google_news():
    api_endpoint_url = "https://api.rss2json.com/v1/api.json"
    rss_url = "https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE42WjNFMEVnSnFZU2dBUAE?hl=ja&gl=JP&ceid=JP%3Aja"

    response = requests.get(url=api_endpoint_url, params={"rss_url": rss_url})

    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code)
