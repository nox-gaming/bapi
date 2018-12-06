# NOX-API

## How to use it
First, create a `.env` file at root folder like :

```json
PORT=8080
DB_USER=myAwesomeUser
DB_PASSWORD=myAwesomePassword
DB_NAME=myAwesomeDatabaseNme
```
This file will be required to launch in a proper way the project.

### Docker
First, you will need a postgres sql instance. I propose you use Docker to launch it as you do not need Postgresql on your machine for ever.
- [Install docker for windows](https://docs.docker.com/docker-for-windows/)
- [Install docker for mac](https://docs.docker.com/docker-for-mac/)

Once you get it up and running, juste use this command to fetch and create a postgresql instance :
```bash
docker run --name test-nox -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```
> NB: the -p arg is important because we want to map the docker port to our machine port 5432, wich is standard for postgresql.

### Nodejs
#### Launch the server only
Only run this command to launch the server and serve the public folder at root.
```bash
npm start #will run the server and serve the public folder
```

#### Launch in dev mod
Here, we will launch the dev mod using `nodemon` to refresh on each save you make. You will need 2 terms opened to launch the development server and auto-compile scss > css.
```bash
npm run dev # Launch the dev server
npm run css-watch # Launch the auto-compile scss > css
```

### Working with Docker
On the root folder, use some Docker commands
```bash
docker-compose up -d # Start a containers network, the option -d is to specify to run it as a daemon
docker-compose down # Stops a containers network
```

## API
Note : The api url prepend with `/api`.
An exemple of api could be like so : http://localhost:3000/api/plan.

### Plan
Get Plan informations

Method | uri | parameters | description
------ | ------ | ------- | ----
GET | `/plan` |  -- | Get the actual planning

# Resources
- [Overlay video css](https://la-cascade.io/effets-video-html5-avec-css-blend-modes/)
- [Create a postgresql isntance with Docker](https://hub.docker.com/_/postgres/)
```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```