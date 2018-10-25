# NOX-API

## How to launch it
Create a `.env` file at root folder like :

```json
PORT=8080
TOKEN=myAwesomeToken
```

Then follow the usual node developer path with :
```bash
npm install # install dependencies
npm start # auto-compile scss in css and launche the server, once.
```

## How to work on it

### Working on app
Launch the dev mod using `nodemon` to refresh on each save you make. You will need 2 terms opened to launch the development server and auto-compile scss > css.
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

### Plan
Get Plan informations

Method | uri | parameters | description
------ | ------ | ------- | ----
GET | `/plan` |  -- | Get the actual planning

# Resources
- [Overlay video css](https://la-cascade.io/effets-video-html5-avec-css-blend-modes/)