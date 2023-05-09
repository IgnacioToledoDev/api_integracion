# CERTAMEN 2 INTEGRACION DE PLATAFORMAS

## Requirements
- Node.js 18+
- NPM

## Install
For dependency installation, use the following code.
```bash
  npm install 
```
## Configuration
You must **set** the environment variables that are displayed in the _.env.example_

### Enviroment variables examples
- PORT= 4201
- DB_URI=your_mongo:port/name_database
- JWT_SECRET = something


## How to use?

### Development server
Start the development server. The default port is 4200 but you can change the port on the _.env_ file

```bash
npm run dev
```

## Endpoints

- `GET` /api/v1/product
- `GET` /api/v1/product/:id
- `POST` /api/v1/product/:id
- `PUT` /api/v1/product/:id
- `DELETE` /api/v1/product/:id

## CREATOR

**Ignacio Toledo**
