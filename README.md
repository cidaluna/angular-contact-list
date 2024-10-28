# Projeto Lista de Contatos Angular

Contact List é uma aplicação Angular de gerenciamento de contatos, que permite o usuário ...


## Como rodar a aplicação Angular

1. **Clone o repositório:**
  ```bash
    git clone https://github.com/cidaluna/angular-contact-list.git
  ```

2. **Navegue no diretório principal**
  ```bash
    cd angular-contact-list
  ```

3. **Execute o comando**
  ```bash 
    npm install
  ```

4. **Execute a aplicação Angular**
  ```bash 
    ng serve
  ```

5. **Navegue na URL que o comando anterior apresentou**

  Em seguida, a aplicação estará disponível em: http://localhost:4200

## Data Binding

Processo onde o Angular sincroniza os dados entre a classe dos componentes e as views (template).

### 1. Interpolação `{{ valor }}`

 Substitui o {{ nome }} pelo valor da variável ou da propriedade diretamente no template HTML.

 Exemplo:

 ```bash
  <p>Olá, {{ nome }}!</p>
 ```

 ```typescript
  export class MeuComponente {
    nome = 'Cida Luna';
  }
```

### 2. Property Binding `[propriedade]="valor"`

Vincula uma propriedade do elemento HTML `src` a uma propriedade da classe do componente `urlDaImagem`. Permitindo valores dinamicamente no template.

Exemplo:

  ```bash
  <img [src]="urlDaImagem" alt="Logo">
  ```

```typescript
  export class MeuComponente {
    urlDaImagem = 'http://meusite.com/imagem01.png';
  }
```







## Screenshots

Tela da aplicação Lista de Contatos em Angular:

![contact list](./src/assets/contact-list-angular-cida-luna-frontend-developer.PNG)
