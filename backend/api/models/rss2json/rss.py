from typing import Dict, List

from pydantic import BaseModel


class Feed(BaseModel):
    url: str
    title: str
    link: str
    author: str
    description: str
    image: str


class Item(BaseModel):
    title: str
    pubDate: str
    link: str
    guid: str
    author: str
    thumbnail: str
    description: str
    content: str
    enclosure: Dict
    categories: List


class RSS(BaseModel):
    status: str
    feed: Feed
    items: List[Item]
