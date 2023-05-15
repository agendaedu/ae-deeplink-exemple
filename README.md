# Bem-vindo ao Deeplink de Parceiros AgendaEdu

Está documentação visa exemplificar o fluxo nas chamadas entre a Agenda Edu e seus parceiros utilizando a tecnologia de [Linking]( https://reactnative.dev/docs/linking). Vale salientar que tal tecnologia também irá ter total compatibilidade com aplicativos desenvolvidos de forma nativa para Android e iOS.

# Arquivos

Dentro deste repositório você encontra dois aplicativos exemplo, um com objetivo de **simular o comportamento da AgendaEdu** e outro **exemplificar um parceiro que utiliza deeplink** 


> AgendaEdu Exemple: simular o comportamento da AgendaEdu
> Partner Exemple: exemplificar um parceiro que utiliza deeplink
> 
# Instalação e execução
Os projeto foram desenvolvidos sem dependência cruzada, isso é, você deve realizar essa instalação para ambos os projetos.

##### installe as dependências
```bash
cd AgendaEdu Exemple
yarn install
``` 
##### Execute no android
```bash
yarn android
``` 

Se você deseja executar  ambos os projetos ao mesmo tempo ou **executar  seu aplicativo parceiro criado em RN**, você pode segmentar as portas de execução do metro da seguinte maneira

##### AgendaEdu Exemple
```bash
yarn android --port=8081
``` 

##### Partner Exemple
```bash
yarn android --port=8088
``` 
desta forma você poderá testar as duas aplicações de forma paralela e em tempo de execução.

# Mais detalhes
Dentro de cada projeto você encontra maiores detalhes e especificações.