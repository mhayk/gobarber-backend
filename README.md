## TypeORM

### Installation
```
$ yarn add typeorm pg
```

### Migrations

* creation
```
$ yarn typeorm migration:create -n CreateAppointments
```

* run migration
```
$ yarn typeorm migration:run
```

* migration revert
```
$ yarn typeorm migration:revert
```

## PostgreSQL

### Generate A UUID In PostgreSQL
```
> create extension "uuid-ossp";
CREATE EXTENSION
> select uuid_generate_v4();
           uuid_generate_v4
--------------------------------------
 a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11
```
