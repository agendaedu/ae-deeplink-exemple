# Bem-vindo ao Deep link de Parceiros AgendaEdu

Esta documentação tem como objetivo exemplificar o fluxo das chamadas entre a Agenda Edu e seus parceiros utilizando a tecnologia de [Linking]( https://reactnative.dev/docs/linking). É importante ressaltar que essa tecnologia também é totalmente compatível com aplicativos desenvolvidos nativamente para Android e iOS.

# Arquivos

Neste repositório, você encontrará dois aplicativos exemplo. Um deles tem como objetivo **simular o comportamento da AgendaEdu**, enquanto o outro exemplifica um parceiro que utiliza deep link.


> AgendaEdu Exemple: simula o comportamento da AgendaEdu

> Partner Exemple: exemplifica um parceiro que utiliza deep link

# Instalação e execução
Os projetos foram desenvolvidos sem dependências cruzadas, ou seja, você deve realizar a instalação para ambos os projetos.

Para instalar as dependências, siga os passos abaixo:

1\. Acesse o diretório do AgendaEdu Exemplo:
```bash
cd AgendaEdu Exemple
``` 

2\. Instale as dependências:
```bash
yarn install
``` 
3\. Para executar no Android, utilize o seguinte comando:

```bash
yarn android
``` 

Se você deseja executar ambos os projetos ao mesmo tempo ou **executar seu aplicativo parceiro criado em RN**, você pode segmentar as portas de execução do Metro da seguinte maneira:

##### AgendaEdu Exemple
```bash
yarn android --port=8081
``` 

##### Partner Exemple
```bash
yarn android --port=8088
``` 
desta forma você poderá testar as duas aplicações simultaneamente em tempo de execução.

# Mais detalhes
Dentro de cada projeto você encontra maiores detalhes e especificações.
