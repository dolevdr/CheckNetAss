from datetime import datetime
import json
from django.shortcuts import render
from django.http import HttpResponse
import requests
from bs4 import BeautifulSoup

# Create your views here.

def index(request, lottery_id):
    url = 'https://www.pais.co.il/lotto/showMoreResults.aspx?fromIndex=1&amount=1&fromNumber=%s' %lottery_id
    url = url + ('&toNumber=%s' %lottery_id)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    x= soup.find_all('div')
    date = x[8].text.split('/')
    date = '20%s/%s/%s' % (date[2], date[1], date[0])
    strong = x[17].text
    numbers = [x[21].text,x[22].text,x[23].text,x[24].text,x[25].text,x[26].text]
    return HttpResponse(json.dumps({"date":date, "strong":strong, "numbers":numbers}))
