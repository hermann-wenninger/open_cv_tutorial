import threading
import queue
import json
#third party
import requests
import requests_html

q = queue.Queue()
valid_proxies = []
l_codes=['DE','NL','FR','US','IS','LU','MX','CH','SG','ES']

def write_proxy_file(proxies):
    with open("proxies_list.txt","w")as file:
       for i in proxies:
        q.put(i)

def check_proxy():
   
    #res  = requests.get("https://www.proxy-list.download/api/v1/get?type=http&anon=elite&country={lc}")
    #res  = requests.get("https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all")
    res2 = requests.get("https://api.proxyscrape.com/v2/?request=proxyinfo")   
    #print(res.text)
    print(res2.text)
    x = list(res.text)
        

#for i in l_codes:
check_proxy()

# def scrap_proxy():  
#     global px_list
#     px_list = set()
#     session = requests_html.HTMLSession()
#     r = session.get('https://free-proxy-list.net/')
#     r.html.render()
#     for i in range(1, 21):
#         add=r.html.xpath('/html/body/section[1]/div/div[2]/div/div[2]/div/table/tbody/tr[{}]/td[1]/text()'.format(i))[0]
#         port=r.html.xpath('/html/body/section[1]/div/div[2]/div/div[2]/div/table/tbody/tr[{}]/td[2]/text()'.format(i))[0]
#         px_list.add(':'.join([add, port]))
#     print("---New proxy scraped, left: " + str(len(px_list)))
#     with open('proxis.pickle', 'wb') as f:
#         pickle.dump(px_list, f)
#     return px_list

# scrap_proxy()
