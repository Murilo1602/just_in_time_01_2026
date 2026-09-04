# Sistema Just In Time - MDF

Sistema web para controle de produtos MDF e movimentações de produção no modelo **Just In Time**. O projeto combina uma API desenvolvida em **Node.js**, utilizando **Prisma**, com uma interface web desenvolvida em **HTML, CSS e JavaScript puro**.

## Visão geral

O sistema permite:

* Criar e autenticar usuários;
* Cadastrar, editar, listar e excluir produtos;
* Registrar movimentações de produção dos tipos `Fabricado` e `Pedido`;
* Atualizar o estoque automaticamente conforme a movimentação;
* Exibir alerta quando o estoque atingir ou ficar abaixo do mínimo cadastrado;
* Realizar buscas de produtos;
* Controlar o acesso do usuário por meio de sessão utilizando `localStorage`.

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

* Node.js
* Prisma
* MySQL / MariaDB
* HTML
* CSS
* JavaScript

## Requisitos

* Node.js instalado;
* Banco de dados MySQL ou MariaDB disponível;
* Variável `DATABASE_URL` configurada;
* NPM instalado.

## Configuração da API

A API fica localizada em `api/backend`.

### 1. Acesse a pasta do backend

```bash
cd api/backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env`

Configure a conexão com o banco de dados:

```env
PORT=3000

DATABASE_URL="mysql://usuario:senha@localhost:3306/just_in_time"
```

### 4. Execute as migrations do Prisma

```bash
npx prisma migrate dev
```

### 5. Inicie o servidor

```bash
npm run dev
```

A API sobe, por padrão, em:

`http://localhost:3000`

## Como usar a interface web

O front-end está localizado em `web/`.

É possível:

1. Abrir o arquivo `web/index.html` diretamente no navegador; ou
2. Servir a pasta `web/` utilizando um servidor estático local.

Na interface, o usuário pode:

* Fazer cadastro;
* Fazer login;
* Acessar a interface principal;
* Gerenciar produtos;
* Pesquisar produtos;
* Registrar movimentações de produção;
* Visualizar alertas de estoque mínimo;
* Fazer logout.

## Modelo de dados

O banco possui três entidades principais:

* `Usuario`
* `Produto`
* `Producao`

### Relacionamentos

* Um usuário pode possuir vários produtos;
* Um usuário pode registrar várias produções;
* Um produto pode possuir várias produções associadas.

## Documentação

Os arquivos presentes em `docs/` auxiliam no entendimento e na documentação do projeto:

* `docs/Documentação Requisitos Funcionais - just_in_time_01_2026.pdf`
* `docs/DER.drawio.png`

---

# Lista de Verificação por Atividade

## ATIVIDADE 1 – Documentação de Requisitos

| Evidência                                  | Capacidade | Peso | Sim | Não |
| ------------------------------------------ | ---------- | ---- | --- | --- |
| Desenvolveu conforme análise de requisitos | C6         | 2    | ✅   |     |
| Modelo de requisitos funcionais mínimos    | C6         | 2    | ✅   |     |

## ATIVIDADE 2 – DER

| Evidência                                      | Capacidade | Peso | Sim | Não |
| ---------------------------------------------- | ---------- | ---- | --- | --- |
| Chaves estrangeiras conforme modelagem         | C4         | 2    | ✅   |     |
| Relações 1:N entre tabelas                     | C4         | 2    | ✅   |     |
| Tipos definidos corretamente (DATE, INT, etc.) | C4         | 2    | ✅   |     |
| Entidades Usuário, Produto e Produção          | C4         | 1    | ✅   |     |

## ATIVIDADE 3 – Script Banco de Dados

| Evidência                                      | Capacidade | Peso | Sim | Não |
| ---------------------------------------------- | ---------- | ---- | --- | --- |
| Criou banco com nome especificado              | C4         | 1    | ✅   |     |
| Criou todas as tabelas com chaves estrangeiras | C4         | 2    | ✅   |     |
| Inseriu registros de teste                     | C4         | 2    | ✅   |     |

## ATIVIDADE 4 – Interface Autenticação de Usuário

| Evidência                                          | Capacidade | Peso | Sim | Não |
| -------------------------------------------------- | ---------- | ---- | --- | --- |
| Criou sessão/localStorage para usuário autenticado | C7         | 2    | ✅   |     |
| Redireciona para interface principal após login    | C7         | 3    | ✅   |     |
| Campos de login, senha e botão entrar              | C7         | 2    | ✅   |     |
| Tratamento de falha de autenticação                | C7         | 3    | ✅   |     |

## ATIVIDADE 5 – Interface Principal

| Evidência                         | Capacidade | Peso | Sim | Não |
| --------------------------------- | ---------- | ---- | --- | --- |
| Acesso ao cadastro de produto     | C7         | 1    | ✅   |     |
| Acesso à gestão de produção       | C7         | 1    | ✅   |     |
| Logout redireciona para login     | C7         | 1    | ✅   |     |
| Exibe nome do usuário autenticado | C7         | 2    | ✅   |     |

## ATIVIDADE 6 – Interface Cadastro de Produto

| Evidência                     | Capacidade | Peso | Sim | Não |
| ----------------------------- | ---------- | ---- | --- | --- |
| Lista produtos ao carregar    | C7         | 2    | ✅   |     |
| Inserção de novo produto      | C7         | 2    | ✅   |     |
| Edição de produto existente   | C7         | 3    | ✅   |     |
| Exclusão de produto existente | C7         | 2    | ✅   |     |
| Validação de dados            | C7         | 3    | ✅   |     |
| Retorno à interface principal | C7         | 1    | ✅   |     |
| Campo de busca funcional      | C7         | 3    | ✅   |     |

## ATIVIDADE 7 – Interface Gestão de Produção (Just in Time)

| Evidência                                 | Capacidade | Peso | Sim | Não |
| ----------------------------------------- | ---------- | ---- | --- | --- |
| Seleção de produto e tipo (entrada/saída) | C7         | 2    | ✅   |     |
| Inserção de dados de transferência        | C7         | 3    | ✅   |     |
| Lista em ordem alfabética                 | C7         | 3    |     | ❌   |
| Alerta de estoque mínimo                  | C7         | 3    | ✅   |     |

> **Observação:** A ordenação da lista de produtos em ordem alfabética ainda não está implementada no estado atual do projeto.

## ATIVIDADE 8 – Casos de Testes

| Evidência                                  | Capacidade | Peso | Sim | Não |
| ------------------------------------------ | ---------- | ---- | --- | --- |
| Ferramentas e ambiente de testes descritos | C8         | 2    | ✅   |     |
| Casos de teste por requisito funcional     | C8         | 2    | ✅   |     |
| Testes executados conforme casos           | C8         | 2    | ✅   |     |

## ATIVIDADE 9 – Documentação de Infraestrutura

| Evidência                                  | Capacidade | Peso | Sim | Não |
| ------------------------------------------ | ---------- | ---- | --- | --- |
| Linguagem e versão identificadas           | C1         | 1    | ✅   |     |
| SGBD e versão identificados                | C1         | 1    | ✅   |     |
| Sistema operacional e versão identificados | C1         | 1    | ✅   |     |

## Observações

* O login da interface utiliza `localStorage` para manter o usuário autenticado;
* As senhas são armazenadas de forma simples no estado atual do projeto;
* A aplicação está preparada para receber novas regras de negócio e novas funcionalidades;
* A ordenação alfabética da lista na gestão de produção ainda precisa ser implementada.
