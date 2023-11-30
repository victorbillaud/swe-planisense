# Information

All .env files are included in the repository for simplicity. This is not a good practice, but it is done for simplicity.

The project all you to visualize the data of the following [API](https://opendata.paris.fr/explore/dataset/les-arbres/api/?disjunctive.typeemplacement&disjunctive.arrondissement&disjunctive.libellefrancais&disjunctive.genre&disjunctive.espece&disjunctive.varieteoucultivar&disjunctive.stadedeveloppement&disjunctive.remarquable&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6Imxlcy1hcmJyZXMiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLnR5cGVlbXBsYWNlbWVudCI6dHJ1ZSwiZGlzanVuY3RpdmUuYXJyb25kaXNzZW1lbnQiOnRydWUsImRpc2p1bmN0aXZlLmxpYmVsbGVmcmFuY2FpcyI6dHJ1ZSwiZGlzanVuY3RpdmUuZ2VucmUiOnRydWUsImRpc2p1bmN0aXZlLmVzcGVjZSI6dHJ1ZSwiZGlzanVuY3RpdmUudmFyaWV0ZW91Y3VsdGl2YXIiOnRydWUsImRpc2p1bmN0aXZlLnN0YWRlZGV2ZWxvcHBlbWVudCI6dHJ1ZSwiZGlzanVuY3RpdmUucmVtYXJxdWFibGUiOnRydWV9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoiY29sdW1uIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoiaWRiYXNlIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzAwMzM2NiJ9XSwieEF4aXMiOiJ0eXBlZW1wbGFjZW1lbnQiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIn1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D)

There is 2 possible ways to fetch the data, the first one is to use the API directly, the second one is to import the data in a database and use the database.

I've decided to implement both solutions. On the web app you can choose the source you want to use.

## Tech stack

- Postgres is used for the database.
- Nest.js and Prisma(ORM) are used for the backend. 
- Next.js and tailwindcss are used for the frontend.

## Start the project

### Using docker only

Run the docker compose file with the following command:

`docker compose up -d --build`

### Using docker and yarn

Start the database with the following command:

`docker compose up -d db`

Install the dependencies in each folder (backend and frontend) with the following command:

`yarn install`

Start the backend with the following command:

`yarn start`

Start the frontend with the following command:

`yarn dev`

## Populate the database

To populate the database, you must run the following command inside the backend folder:

`yarn prisma migrate reset`

It will run the migrations and seeders.

## Run backend test

Move inside the backend folder and run `yarn test`. The local database should be started
