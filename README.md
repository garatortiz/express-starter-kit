[![Build Status](https://travis-ci.com/matiasgaratortiz/express-starter-kit.svg?branch=master)](https://travis-ci.com/matiasgaratortiz/express-starter-kit)
[![Greenkeeper badge](https://badges.greenkeeper.io/matiasgaratortiz/express-starter-kit.svg)](https://greenkeeper.io/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/matiasgaratortiz/express-starter-kit/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/202e3d0d1d7c443c0d52/maintainability)](https://codeclimate.com/github/matiasgaratortiz/express-starter-kit/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/202e3d0d1d7c443c0d52/test_coverage)](https://codeclimate.com/github/matiasgaratortiz/express-starter-kit/test_coverage)

# Express starter kit

Starter project for creating an Express server, using:

-   ExpressJS
-   Sequelize (PostgreSQL)
-   Babel
-   Prettier
-   ESLint

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/matiasgaratortiz/express-starter-kit.git
cd express-starter-kit
npm install
```

## Starting

Use `npm run dev` for development mode, and `npm start` for production modes. The server will run on port `3000`.

## Database

This starter kit uses PostgreSQL was its main data store. You can install it locally, use docker or configure a remote DB.

Create an user and a database for the project

```
~$ sudo -u postgres -i

postgres@hostname:~$ createuser johndoe
postgres@hostname:~$ createdb mydatabase
postgres@hostname:~$ psql

postgres=# alter user johndoe with encrypted password 'mypassword';
postgres=# grant all privileges on database mydatabase to johndoe;
postgres=# \q
```

You now should be able to do:

```
~$ psql postgres://johndoe:mypassword@localhost/mydatabase
```

Note that even if you use Docker and have not installed Postgres localy, you still need to install the `psql` client.

## Migration and Seed

To perform the migration of the database, just run the following command.

```
npm run migrate
```

If you want to undo the last migration, you can use `npm run migrate:undo`, or `npm run migrate:undo:all` to undo all migrations.

If you need to load test data, you can use seeds in the following way

```
npm run seed
```

or use `npm run seed:undo` to undo all data loads made.

# ENV

You can find an example ENV file at `.env.example`.
