# A Comunidade Innovate

A Innovate iniciou como uma iniciativa de meetups para unir *Tecnologia* e *Diversidade*. Aos poucos foi se tornando a comunidade mais linda de tecnologia. Nossa proposta é nos unirmos para fazermos a tecnologia cada vez mais diversa e inclusiva e nos tornarmos profissionais cada vez melhores.

# Onde nos Encontrar

Atualmente você pode nos encontrar no Instagram [@innovatemeetup](https://www.instagram.com/innovatemeetup/) e no Facebook [@innovatemeetup](https://www.facebook.com/innovate.meetup).

E no nosso site [http://innovatebh.com/](http://innovatebh.com/)

# O Projeto

Após um tempo utilizando a plataforma *Meetup* entendemos que financeiramente não era mais viável, principalmente após a pandemia. Tanto não usavamos os recursos disponibilizados pela plataforma de forma que valesse a pena, quanto queriamos outras funcionalidades que não eram proporcionadas na plataforma. Por isso, decidimos criar a nossa. E cá estamos :)

Atualmente o projeto ainda está em fase de desenvolvimento da base da plataforma, então muita coisa ainda está no nosso backlog de features, mas aceitamos issues e sugestões. 

## Tech Stack do Projeto

A Plataforma Innovate está desenvolvida em [React](https://pt-br.reactjs.org/), com o framework [NextJS](https://nextjs.org/) e linguagem [Typescript](https://www.typescriptlang.org/). Para gerenciamento de bibliotecas usamos o [Yarn](https://yarnpkg.com/)

## Executar o Projeto

- Clone o projeto
```
git clone git@github.com:innovatebh/innovate-frontend.git
```

- Instale as dependências
```
yarn install
```

- Execute o projeto
```
yarn dev
```

## Como Contribuir

Caso você queira contribuir, é só abrir um PR pra gente na branch `staging`, mas para isso, pedimos que utilize os padrões que nós adotamos e estão descritos abaixo.

### Padrões de Branch

| Tag | Nome da Branch |
|--|--|
| Melhoria / feature | feature/descricao-da-melhoria |
| Correção / fix | fix/descricao-da-correcao |
| Refatoração / refactoring | refactoring/descricao-da-refatoracao |

> Obs: se o PR for relacionado a uma issue, incluir o numero da issue no nome da branch. Exemplo: `tag/ID-descricao`

### Padrões de Commits

Durante os seus commits, pedimos que siga nosso padrão também:

Se o PR está relacionado a uma issue:
`[ID-DA-ISSUE] descrição do commit`

Se o PR não está relacionado a uma issue:
`[TAG] descricao do commit`

> Obs: lembrando que as tags são: feature, fix, refactoring

### Adicionando imagens ao projeto

Imagens são adicionadas na pasta `src/assets/images`. Ao utilizar a imagem em um componente, é importante definir uma largura para sua imagem que funcione no componente que irá mostrá-la. Além disso, temos também que utilizar o atributo [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) para que telas com maior resolução (como retina por exemplo) mostrem a imagem não perca a qualidade.

O exemplo abaixo mostra como uma imagem deve ser carregada seguindo este padrão.

```jsx
// O import vai gerar 3 imagens: `menu-50.png`, `menu-100.png` e `menu-150.png`
import menuImageSrc from '../../assets/images/menu.png?resize&min=50&max=150&ts-asset'
const menuImageWidth = '50px'

export const MenuImage = styled.img.attrs({
    src: menuImageSrc,
    srcSet: menuImageSrc.srcSet,
    sizes: menuImageWidth,
})`
    width: ${menuImageWidth};
`
```

- O parâmetro `resize` do `import` é obrigatório quando sevocê fizer qualquer alteração de tamanho na imagem
- O `import` deve finalizar com o parâmetro `&ts-asset` para que não haja erros no Typescript
- O `import` deve definir o tamanho mínimo e o tamanho máximo da imagem através dos parâmetros `min` e `max`. Vão ser geradas 3 imagens utilizando os valores `min` e `max`, então o `max` geralmente deve ser 3 vezes o valor do `min`
- O atributo `sizes` pode, na maioria dos casos, ser definido como o valor do `width` da imagem. Caso ele não seja passado o browser vai assumir que a imagem ocupa a tela inteira ao escolher uma das imagems do `srcSet`


# Entre em Contato

Atualmente a equipe que organiza o Innovate é composta por:

Priscilla Lopes ([@cillaeslopes](mailto:cillaeslopes@gmail.com))  
Renata Dias ([@renatadbdias](mailto:renatyynhah@gmail.com))  
Lucas Canuto ([@tamirfaria](mailto:lucastamir@gmail.com))  

E adoraríamos te ouvir no [innovate.meetup@gmail.com](mailto:innovate.meetup@gmail.com)