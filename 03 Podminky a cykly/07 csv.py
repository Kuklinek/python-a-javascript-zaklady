import json
import csv
import random
JSON_FILE = "_data.json"
CSV_FILE = "_soubor.csv"

with open(JSON_FILE, encoding="utf-8", newline='') as file:
    data = json.load(file)
    jmena = data['jmena']
    kapely = data['kapely']

with open(CSV_FILE, encoding="utf-8", newline='') as file:
    rows = list(csv.DictReader(file))

rows.append({
    'name': random.choice(jmena),
    'age': random.randint(0, 99),
    'favorite_band': random.choice(kapely)
})

with open(CSV_FILE, 'w', encoding="utf-8", newline='') as file:
    keys = list(rows[0].keys())
    writer = csv.DictWriter(file, fieldnames=keys)
    writer.writeheader()
    writer.writerows(rows)
