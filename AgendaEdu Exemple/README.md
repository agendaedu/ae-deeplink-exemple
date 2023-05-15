# O que eu posso fazer com esse exemplo


| tela                             | descrição            |
| -------------------------------- | -------------------- |
| ![sandbox](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/f6cf1e9c-3013-4b18-aed5-cbe0bfcff79b)      | Teste usando o sandbox. Com isso, você pode criar um ambiente semelhante ao da produção AgendaEdu. O sandbox construirá/gerará o seu deep link no fluxo de staging da AgendaEdu. Após os dados serem buscados no sandbox, o botão estará carregado com seus dados e pronto para chamar seu aplicativo parceiro com todas as configurações.  |             
| ![personalizar](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/f5229270-a54c-4ead-a4a9-38500d1f8859)  | Você pode usar essa ferramenta para realizar testes localmente. Nela, você encontrará campos para inserir o esquema, os dados e o logotipo do seu deep link. Ao final, você terá um botão totalmente funcional e personalizado para realizar testes locais com seu aplicativo parceiro.        |               
| ![Agenda_exemplo](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/2ae80ead-3c58-4e10-a237-b5a2977231c7)| Exemplo básico usado para provar ou apenas entender o funcionamento da chamada de deep link. |
                                     


# Como o app parceiro é chamado ?
Você pode consultar a documentação do React Native [Linking](https://reactnative.dev/docs/linking) para obter mais detalhes. Um exemplo de chamada seria:

```JavaScript
Linking.openURL(meuapp://dados/maisdados)
``` 

# Como construir um instalador APK a partir deste projeto?

Para construir um instalador APK, siga estas etapas:

1\. No diretório raiz do projeto:
```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
``` 
2\. Navegue até a pasta "android":
```bash
cd android
``` 
3\. Execute o build:
```bash
./gradlew assembleDebug
``` 

O instalador estará disponível em: ``android/app/build/outputs/apk/debug/app-debug.apk``


# Documentações relacionadas

- O ambiente sandbox é um ambiente que pode ser configurado previamente por você ou pela AgendaEdu. Ele simula um ambiente de produção.
- [Linking](https://reactnative.dev/docs/linking): documentação relacionada ao uso do React Native Linking.
