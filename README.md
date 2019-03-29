# react-native-devmenu

[![npm](https://img.shields.io/npm/v/@terrysahaidak/react-native-devmenu.svg?style=plastic)](https://npmjs.com/package/@terrysahaidak/react-native-devmenu)

> Open developer menu using touches instead of shaking your device.

## Installation

Install the library from npm:

```bash
npm i --save @terrysahaidak/react-native-devmenu
```
or
```bash
yarn add @terrysahaidak/react-native-devmenu
```

### Build configuration on iOS

You don't need to do somethings because DevMenu package is already included in React Native on iOS.

### Build configuration on Android

If you need Android support, it's recommended to use `react-native link` to link Android's native module:

```bash
react-native link @terrysahaidak/react-native-devmenu
```

Or you can link it manually:

Ensure your build files match the following requirements:

1. Define the `react-native-devmenu` project in `android/settings.gradle`:

```groovy
...
include ':react-native-devmenu'
project(':react-native-devmenu').projectDir = new File(rootProject.projectDir, '../node_modules/@terrysahaidak/react-native-devmenu/android')
```

2. Add the `react-native-devmenu` as an dependency of your app in `android/app/build.gradle`:
 
```groovy
...
dependencies {
  ...
  implementation project(':react-native-devmenu')
}
```


4. Add `import com.mands.reactnativedevmenu.DevMenuPackage;` and `new DevMenuPackage(this)` in your `MainApplication.java`, but make sure you pass `this` to `DevMenuPackage`:

```java
import com.mands.reactnativedevmenu.DevMenuPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new DevMenuPackage(this) // make sure you pass `this`
        );
    }
```

## Usage

Wrap your root any any other component you want to recognize you touches to open the dev menu.
Pass `numberOfTouches` prop to change number of taps (by default it's 3).

It renders children without any wrapper in production.

```jsx
import DevMenu from '@terrysahaidak/react-native-devmenu';

const Root = () => (
  <DevMenuOnTouch numberOfTouches={4}>
    {/* your app stuff such as providers, navigators etc */}
  </DevMenuOnTouch>
);

AppRegistry.registerComponent('myApp', () => Root);
```

## License
[MIT](LICENSE) © [Terry Sahaidak](https://github.com/terrysahaidak)/[Oleh Mryhlod](https://github.com/oleh-mryhlod) 2019
