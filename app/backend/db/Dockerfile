FROM mongo

COPY ./users.json /users.json

CMD mongoimport --host mongodb --db reach-engine --collection MyCollection --type json --file /users.json --jsonArray