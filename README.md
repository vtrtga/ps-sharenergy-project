# Projeto desafio feito em 2022 para o processo seletivo share energy 2023/01



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
<h4>O projeto está implementado utilizando Docker-compose.</h4>
Os containers estão configurados para executar automaticamente o banco de dados Mongodb,
o frontend React e o backend com NodeJS nas portas 27017, 3000 e 3001 respectivamente.

Para subir os containers utilizar os seguintes comandos:
<h5>Primeiramente:</h5> 
Abrir diretório frontend e back end, instalando as dependencias com o comando:
```bash
npm install
```

Utilize o comando docker-compose para fazer build do container

```bash
docker-compose build --no-cache
```

Após buildar os containers utilizar o seguinte comando para subir

```bash
docker-compose up -d
```

<h4>Para abrir a página é só acessar a URL:</h4>

[Link](http://localhost:3000/)

É possível fazer o login utilizando as seguintes credenciais: </br>
usuário: desafiosharenergy </br>
senha: sh@r3n3rgy

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
         width="26" height="26"/>
    MongoDB
</h3>
<h4>As collections estão separadas em: </h4>
<h6>- User: para os usuários</h6>
<h6>- Customers: para os clientes</h6>

<h3>
 <img src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
      width="26" height="26"/> 
API Endpoints:
</h3>
<h6>POST</h6>
/login - Login do usuário </br>
/customer - Cadastro de clientes
<h6>PUT</h6>
/customer/:id - Atualização de cliente
<h6>DELETE</h6>
/customer/:id - Remoção de cliente

<h3>Rotas do frontend</h3>
<h4>/login</h4> rota da página login </br>
<h4>customer</h4> rota da página do CRUD de clientes </br>
<h4>/home</h4> página principal com os cards de usuário, input de busca e input select filtrando pelo atributo selecionado. </br>
<h4>/http-cat</h4> página que utiliza as imagens de gatinhos buscando pelo status code referente ao digitado no input, caso não encontre, retorna
imagem referente ao código 404. </br>
<h4>/random-dog</h4> página que consome api random-dog, com botão refresh que mostra um cachorro aleatório

<h2>Informações adicionais:</h2>
O projeto foi desenvolvido visando utilizar alguns conceitos SOLID no backend e componentização do React no frontend. </br>
Para isso, utilizei a biblioteca Mongoose para desenvolver a API baseada em programação orientada a objetos.
A página está responsiva, com elementos de estilo feitos utilizando TailwindCSS.

<h2>Tecnologias utilizadas</h2>
<h3>
<img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
         width="26" height="26"/>
      MongoDB
</h3>

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" width="26" height="26"/>
Tailwind CSS
</h3>

<h3>
  <img src="https://user-images.githubusercontent.com/84795317/212142586-6f5afb82-c5dc-4dad-bd1b-f36d1bfa174d.png" width="26" height="26"/>
Docker
</h3>
<h3>
    <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="26" height="26"/>
NodeJS
</h3>

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="26" height="26"/>
Typescript
</h3>

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="26" height="26"/>
Javascript
</h3>

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="26" height="26"/>
ReactJS
</h3>

<h3>
    <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" width="26" height="26"/>
Express
</h3>
<h3>
    <img src="https://user-images.githubusercontent.com/25181517/201476472-d2f5f644-cfc9-43e5-96d3-c8f40f18b5cb.png" width="26" height="26"/>
Chai
</h3>
<h3>
    <img src="https://user-images.githubusercontent.com/25181517/201476630-f47cfff6-fdee-4ee1-9092-1793b71b1ca3.png" width="26" height="26"/>
Mocha
</h3>


