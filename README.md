# BAPI

## How to launch it

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

`POST` sur `/character`

Method | uri | parameters | description
------ | ------ | ------- | ----
POST | `/charater` |  `string:`realm, `string:`name | Get character informations