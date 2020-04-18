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
