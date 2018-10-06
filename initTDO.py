import requests
import json


def writeDefault():
    tdoDefault = open('defaultTDO.json', 'r').read()
    #requests.post('http://192.168.200.106:52648/tdo/tdoStore', json=json.loads(tdoDefault))
    requests.put('http://192.168.200.106:52648/tdo/tdoStore', json=json.loads(tdoDefault)).content


def saveAsDefault():
    tdo = requests.get('http://192.168.200.106:52648/tdo/tdoStore').content
    open('defaultTDO_2.json', 'w').write(tdo)
    


