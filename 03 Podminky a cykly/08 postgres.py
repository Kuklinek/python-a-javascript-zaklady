from postgres import Postgres
import os
import random
import json

with open("_data.json", encoding="utf-8", newline='') as file:
    jmena = json.load(file)['jmena']

# pip install python-dotenv
from dotenv import load_dotenv
load_dotenv()

# pip install postgres

db = Postgres(os.getenv("POSTGRES_URL"))

db.run("""
    CREATE TABLE IF NOT EXISTS plno_inteligence (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        age INTEGER
    );   
""")

name = random.choice(jmena)
age = random.randint(0, 99)

db.run(
    """
    INSERT INTO plno_inteligence (name, age)
    VALUES (%(name)s, %(age)s);
    """,  # nevkládat přímo stringy protože https://xkcd.com/327/
    {'name': name, 'age': age}
)

result = db.all("SELECT * FROM plno_inteligence")
print(result)
