# Comportamento esperado
https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/4fbfa331-1de5-4c30-9cae-796a905705a6


# Como configurar meu aplicativo para receber chamadas Deep Link

Neste Exemplo utilizamos o mais comumente [Deep Link do React Navigation](https://reactnavigation.org/docs/deep-linking/)


### Configurando ambiente no Android

- Para configurar a vinculação externa no Android, você pode criar uma nova intenção no manifesto. A maneira mais fácil de fazer isso é com o pacote  uri-scheme: 
```bash
npx uri-scheme add apppartner --android.
```

- Se você quiser adicioná-lo manualmente, abra android/app/src/main/AndroidManifest.xmle faça os seguintes ajustes: 
  Adicione o novo intent-filter dentro da entrada MainActivity ficando parecido com isso:

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
    <intent-filter> <!-- inicio -->
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="apppartner" /> <!-- seu schema -->
    </intent-filter> <!-- fim -->
</activity>
```
fazendo isso seu aplicativo estará ouvindo as chamadas no schema apppartner


### Configurando ambiente iOS

Você precisará vincular RCTLinking ao seu projeto seguindo as etapas descritas aqui. Para poder ouvir os links de aplicativos, você precisará adicionar as seguintes linhas ao AppDelegate.m:


```swift
// Add the header at the top of the file:
#import <React/RCTLinkingManager.h>

// Add this inside `@implementation AppDelegate` above `@end`:
- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}
``` 

- Se seu aplicativo estiver usando [links universais](https://developer.apple.com/ios/universal-links/) , você também precisará adicionar o seguinte código:

```swift
// Add this inside `@implementation AppDelegate` above `@end`:
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
``` 

Agora você precisa adicionar o esquema à configuração do seu projeto.

 A maneira mais fácil de fazer isso é com o pacote  uri-scheme: 

```bash
npx uri-scheme add mychat --ios
``` 

# Como tratar os dados via Deep Link

Se você utilizou o React Navigation consulte a documentação [Configuring Links](https://reactnavigation.org/docs/configuring-links) e claro, sua personalização


# Documentações relacionadas
- https://reactnavigation.org/docs/deep-linking/
- https://reactnavigation.org/docs/configuring-links