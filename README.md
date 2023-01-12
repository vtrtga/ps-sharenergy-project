<h1>Desafio para o processo seletivo SHARENERGY 2023/01</h1>

<h3>Estrutura de pastas</h3>

```bash
└── app/
    ├── backend/
    │   ├── node_modules
    │   ├── build(código compilado javascript)
    │   └── src/
    │       ├── controllers
    │       ├── models
    │       ├── services
    │       ├── domains
    │       ├── interfaces
    │       ├── middlewares
    │       ├── routers
    │       ├── tests
    │       └── utils/
    │           └── JoiSchemas
    └── frontend/
        ├── node_modules
        ├── public
        └── src/
            ├── images
            ├── components
            ├── pages
            ├── services
            └── styles
            
```

<h2>Instruções para execução</h2>


<h3>
  <img src="https://user-images.githubusercontent.com/84795317/212142586-6f5afb82-c5dc-4dad-bd1b-f36d1bfa174d.png" width="26" height="26"/>
Docker
</h3>
O projeto está implementado utilizando Docker-compose.
Para subir os containers utilizar os seguintes comandos:
Primeiramente: 

```bash
docker-compose build --no-cache
```

Após buildar os containers utilizar o seguinte comando para subir

```bash
docker-compose up -d
```

Os containers estão configurados para executar automaticamente o banco de dados Mongodb,
o frontend React e o backend com NodeJS nas portas 27017, 3000 e 3001 respectivamente.
