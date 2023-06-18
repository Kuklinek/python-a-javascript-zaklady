from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import csv
import random

hostName = "localhost"
serverPort = 4321

with open("_data.json", encoding="utf-8", newline='') as file:
    jmena = json.load(file)['jmena']


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        match self.path:
            case "/":
                self.send_response(200)
                self.send_header("Content-Type", "text/html")
                self.end_headers()
                self.wfile.write(
                    bytes(
                        """
                        <meta charset=utf-8 />
                        Vítej na mé domovské stránce.<br/>
                        Má se ti narodit dítě a nevíš jak ho pojmenovat? Zkus <a href=/nahodne_jmeno>tohle jméno</a>!<br/>
                        Koukni na náš <a href=/csv>seznam</a> lidí a jejich oblíbených kapel!<br/>
                        Koukni do naší <a href=/db>anonymizované databáze</a> lidí, kteří odmítli podepsat GDPR!
                        """,
                        "utf-8"
                    )
                )
            
            case "/nahodne_jmeno":
                self.send_response(200)
                self.send_header("Content-Type", "text/plain")
                self.end_headers()
                self.wfile.write(bytes(random.choice(jmena), "utf-8"))

            case _:
                self.send_response(404)
                self.send_header("Content-Type", "text/plain")
                self.end_headers()
                self.wfile.write(bytes("Stránka nenalezena :c", "utf-8"))


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
