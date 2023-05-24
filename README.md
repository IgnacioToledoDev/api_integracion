# CERTAMEN 2 INTEGRACION DE PLATAFORMAS

## Requirements
- Node.js 18+
- NPM
- Mongo local

## Install
For dependency installation, use the following code.
```bash
  npm install
```
## Configuration
You must **set** the environment variables that are displayed in the _.env.example_

### Enviroment variables examples
- `PORT` = 4201
- `DB_URI` = your_mongo:port/name_database
- `JWT_SECRET` = something


## How to use?

### Development server
Start the development server. The default port is 4200 but you can change the port on the _.env_ file

```bash
npm run dev
```

### Transbank server
In the dir `transbank` you need to start the develpment server, using the following code:

```bash
  npm run dev
```

## Endpoints

### PRODUCTS
- `GET` /api/v1/product
- `GET` /api/v1/product/:id
- `POST` /api/v1/product/:id
- `PUT` /api/v1/product/:id
- `DELETE` /api/v1/product/:id

### ORDERS
- `GET` /api/v1/order
- `GET` /api/v1/order/:id
- `POST` /api/v1/order/:id
- `PUT` /api/v1/order/:id
- `DELETE` /api/v1/order/:id

### USERS
- `POST` /api/v1/auth/register  -> **Register new user**
- `POST` /api/v1/auth/login     -> **Login user**
- `GET` /api/v1/user/          -> **Get all users**

## MOCKS

### REGISTER USER `POST` /api/v1/auth/register

```json
  {
    "username": "test",
    "email": "test@test.com",
    "password": "test"
  }
```
*Response* = `Usuario creado`
*Status* = `200`

### LOGIN USER `POST` /api/v1/auth/login

```json
  {
    "email": "test@test.com",
    "password": "test"
  }
```

*Response* = `Token` and `Data User`,
*status* = `200`

### CREATE PRODUCT `POST` /api/v1/products/

```json
  {
    "name": "product",
    "description": "This is a product",
    "category": "CategoryA",
    "price": 15000,
    "stock": 1500
  }
```
*Response* = `Product`,
*status* = `200`

### CREATE ORDER `POST` /api/v1/order/

```json
  {
    "user": {
      "username": "test",
      "email": "test@test.com"
    },
    "products": [{
       "name": "product",
      "description": "This is a product",
      "category": "CategoryA",
      "price": 15000,
    }],
    "price": 1500
  }
```
*Response* = `Data Order`,
*status* = `200`

### CREATE TRANSACTION

```json
  {
    "order": "Order",
    "session": "data",
    "amount": 1500
  }
```
*Response* = `Token` and `Url`,
*status* = `200`

## CREATOR

**Ignacio Toledo**
