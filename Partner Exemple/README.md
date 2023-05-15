# Comportamento esperado
Aqui está o [link](https://github.com/agendaedu/ae-deeplink-exemple/assets/18338570/4fbfa331-1de5-4c30-9cae-796a905705a6) para visualizar o comportamento esperado.

# Como configurar meu aplicativo para receber chamadas Deep Link

Neste exemplo, utilizamos o React Navigation, que é uma biblioteca comumente usada para gerenciar navegação e[deep linking](https://reactnavigation.org/docs/deep-linking/)  em aplicativos React Native.


### Configurando ambiente no Android

- Para configurar a vinculação externa no Android, você pode criar uma nova intenção no manifesto. A maneira mais fácil de fazer isso é com o pacote `uri-scheme`: 

```bash
npx uri-scheme add apppartner --android.
```

- Se você quiser adicioná-lo manualmente, abra a pasta ``android/app/src/main/AndroidManifest.xml`` e faça os seguintes ajustes: 

1\. Adicione o novo ``<intent-filter>`` dentro da entrada ``MainActivity``

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
        <data android:scheme="apppartner" /> <!-- substitua "apppartner" pelo seu esquema personalizado -->
    </intent-filter> <!-- fim -->
</activity>
```

Agora o seu aplicativo estará configurado para receber chamadas no esquema ``apppartner`` no Android.

### Configurando ambiente iOS

No iOS, você precisa vincular o ``RCTLinking`` ao seu projeto. Siga estas etapas:

1\. Adicione o seguinte código no arquivo AppDelegate.m:

```swift
// Adicione o seguinte import no início do arquivo:
#import <React/RCTLinkingManager.h>

// Adicione este código dentro de `@implementation AppDelegate` antes de `@end`:
- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}
``` 

2\. Se o seu aplicativo estiver usando [links universais](https://developer.apple.com/ios/universal-links/), adicione também o seguinte código:

```swift
// Adicione este código dentro de `@implementation AppDelegate` antes de `@end`:
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
``` 

Agora você precisa adicionar o esquema ao seu projeto. Uma maneira fácil de fazer isso é usando o pacote ``uri-scheme``:

```bash
npx uri-scheme add apppartner --ios
``` 

# Como tratar os dados via Deep Link

Se você estiver usando o React Navigation, consulte a documentação [Configuring Links](https://reactnavigation.org/docs/configuring-links) para obter informações sobre como configurar o tratamento dos dados recebidos através do deep link. Você também pode personalizar o comportamento do seu aplicativo de acordo com as necessidades específicas do seu projeto.


# Documentações relacionadas
- https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects
- https://reactnavigation.org/docs/configuring-links