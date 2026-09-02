# Sistema Just In Time - MDF

Sistema web para controle de produtos MDF e movimentacoes de producao no modelo Just In Time. O projeto combina uma API em Node.js com Prisma e uma interface web em HTML, CSS e JavaScript puro.

## Visao geral

O sistema permite:

- Criar e autenticar usuarios
- Cadastrar, editar, listar e excluir produtos
- Registrar movimentacoes de producao do tipo `Fabricado` e `Pedido`
- Atualizar o estoque automaticamente conforme a movimentacao
- Exibir alerta quando o estoque atingir ou ficar abaixo do minimo cadastrado

## Estrutura do projeto

```text
api/
  backend/
    prisma/
    src/
    server.js
web/
  index.html
  style.css
  script.js
docs/
  Documentação Requisitos Funcionais - just_in_time_01_2026.pdf
  DER.drawio.png
```

## Tecnologias

- Node.js
- Prisma
- MySQL / MariaDB
- HTML
- CSS
- JavaScript

## Requisitos

- Node.js instalado
- Banco MySQL ou MariaDB disponivel
- Variavel `DATABASE_URL` configurada

## Configuracao da API

A API fica em `api/backend`.

1. Acesse a pasta do backend:

```bash
cd api/backend
```

2. Instale as dependencias:

```bash
npm install
```

3. Crie um arquivo `.env` com a conexao do banco:

```env
PORT=3000
DATABASE_URL="mysql://usuario:senha@localhost:3306/just_in_time"
```

4. Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

5. Inicie o servidor:

```bash
npm run dev
```

A API sobe por padrao em `http://localhost:3000`.

## Como usar a interface web

O front-end esta em `web/`.

1. Abra `web/index.html` no navegador, ou
2. Sirva a pasta `web/` com um servidor estatico local se preferir

Na interface, o usuario pode:

- Fazer cadastro
- Fazer login
- Gerenciar produtos
- Registrar movimentacoes de producao

## Modelo de dados

O banco possui tres entidades principais:

- `Usuario`
- `Produto`
- `Producao`

Resumo das relacoes:

- Um usuario pode possuir varios produtos
- Um usuario pode registrar varias producoes
- Um produto pode ter varias producoes associadas

## Documentacao

Os arquivos em `docs/` ajudam no entendimento do projeto:

- `docs/Documentação Requisitos Funcionais - just_in_time_01_2026.pdf`
- `docs/DER.drawio.png`

## Observacoes

- O login da interface usa `localStorage` para manter o usuario logado
- As senhas sao salvas de forma simples no estado atual do projeto
- A aplicacao esta preparada para evoluir com novas regras de negocio e novas telas
