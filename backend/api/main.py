import requests
from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get(path="/rss/general-information")
async def get_general_information():
    api_endpoint_url = "https://api.rss2json.com/v1/api.json"
    rss_url = "https://www.sonymusic.co.jp/xml/artInfoRSS.php?id=72000340"

    response = requests.get(url=api_endpoint_url, params={"rss_url": rss_url})

    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code)
