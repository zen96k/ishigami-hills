import requests
from fastapi import FastAPI, HTTPException
from models.rss2json import rss

app = FastAPI(title="石上ヒルズ")


@app.get(
    path="/rss/general-information",
    name="General Information",
    description="公式サイトのRSSを取得する。",
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
