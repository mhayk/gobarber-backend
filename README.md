## TypeORM

### Installation
```
$ yarn add typeorm pg
```

### Migrations

* creation
```
$ yarn typeorm migration:create -n CreateAppointments
$ yarn typeorm migration:create -n CreateUsers
$ yarn typeorm migration:create -n AddAvatarFieldToUsers
$ yarn typeorm migration:create -n CreateUserTokens
$ yarn typeorm migration:create -n AddUserIdToAppointments
```

* run migration
```
$ yarn typeorm migration:run
```

* migration revert
```
$ yarn typeorm migration:revert
```

## Tests - Jest

### Run Tests
```
$ yarn test
```

### Run a specific test
```
$ yarn test src/modules/users/services/SendForgotPasswordEmailService.spec.ts
```

### Clear Jest Cache
```
$ yarn jest --clearCache
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

# Engenharia de Software

## Recuperação de senha

### RF - Requisitos Functionais

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

### RNF - Requisitos Não Funcionais

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

### RN - Regras de Negócio

- O link enviando por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização do perfil

### RF - Requisitos Funcionais

- O usuário deve poder atualizar seu nome, e-mail e senha;

### RNF - Requisitos Não Functionais

### RN - Regras de Negócio

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

### RF - Requisitos Funcionais

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

### RNF - Requisitos Não Funcionais

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

### RN - Regras de Negócio

- A notificação deve ter uma status de lida ou não lida para que o prestador possa controlar;

## Agendamento de Serviços

### RF - Requisitos Funcionais

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestrador;
- O usuário deve poder listar horários disponívels em um dia de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

### RNF - Requisitos Não Funcionais

- A listagem de prestadores deve ser armazenada em cache;

### RN - Regras de Negócio

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, ultimo às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


# Docker

## MongoDB

Creating a instance with mongodb:

```
$ docker run --name mongodb -p 27017:27017 -d -t mongo
```

## Redis

Creating a instance of redis:
```
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Start the container
```
$ docker start redis
```
