# BAPI

## How to launch it
Create a `.env` file at root folder like :

```json
PORT=8080
TOKEN=myAwesomeToken
```

Then follow the usual node developer path with :
```js
npm install
npm start
```

## How to work on it
Launch the dev mod using `nodemon` to refresh on each save you make.
```
npm run dev
```

## API WOW

### Character
Get character informations

Method | uri | parameters | description
------ | ------ | ------- | ----
POST | `/character` |  `string:`realm, `string:`name | Get character informations