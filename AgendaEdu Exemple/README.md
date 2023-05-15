# O que eu posso fazer com esse exemplo


| tela                             | descrição            |
| -------------------------------- | -------------------- |
| ![sandbox](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/f6cf1e9c-3013-4b18-aed5-cbe0bfcff79b)      | Testar via sandbox. Com isso você é capaz de construir um ambiente similiar ao de produção AgendaEdu, o sandbox irá  contruir/gerarar o seu deep link no fluxo de staging AgendaEdu. Após os dados serem buscados no sandbox o botão estará carregado com o seus dados e apto a chamar o seu aplicativo parceiro com todas as configurações.  |             
| ![personalizar](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/f5229270-a54c-4ead-a4a9-38500d1f8859)  | Você pode utilizar esse utilitário para realizar testes de forma local. Nele você encontra inputs de schema, dados e logo do seu deep link, ao final você terá o botão totalmente funcional e personalizado para realizar testes locais com seu aplicativo parceiro.        |               
| ![Agenda_exemplo](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/2ae80ead-3c58-4e10-a237-b5a2977231c7)| Exemplo básico, utilizado para provar ou apenas entender o funcionamento da chamada de deep link |
                                     


# Como o app parceiro é chamado
Você pode consulta a documentação do React Native [Linking](https://reactnative.dev/docs/linking)

exemplo:
```JavaScript
Linking.openURL(meuapp://dados/maisdados)
``` 

# Como construir um instalador apk a partir deste projeto

para construir um instalador apk basta você executar os comandos

- no root do projeto
```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
``` 
- navegue até a pasta android
```bash
cd android
``` 
- execute o build
```bash
./gradlew assembleDebug
``` 

- o instalador estará disponível na pasta AgendaEdu Exemple/android/app/build/outputs/apk/debug/app-debug.apk


# Documentações relacionadas

- sandbox é um ambiente a qual foi previamente configurado por você ou pela AgendaEdu, isso deve simular um ambiente de produção
- [Linking](https://reactnative.dev/docs/linking)
