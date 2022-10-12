
# Api-Getech

Esse Api foi desenvolvido, com o objetivo de ser projeto final para Toti
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/fhelipe0203/pruebadeapi
```

Entre no diretório do projeto

```bash
  cd pruebadeapi
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Aprendizados

Nesse projeto conseguimos aprender a regras de organização para o Api Rest usando node.js 
### ferramentas
* MongoDB
* Axios
* Cors
## Documentação

[MongoDB](https://www.mongodb.com/docs/manual/core/document/)

[Axios](https://axios-http.com/docs/intro)

[Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


## Autores

- [@Octavio Fhelipe](https://www.github.com/fhelipe0203)
- [@Mauleny Diaz](https://www.github.com/MaulenyDiaz)
- [@Enmanuel de Jesús](https://www.github.com/Enma1989)


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

