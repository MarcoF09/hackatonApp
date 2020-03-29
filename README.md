# Martín Fierro

This is the source code of the mobile application in context of Covid Global Hackaton.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To the enviroment setup to use react native you need to follow the steps specified in the following link https://reactnative.dev/docs/environment-setup in the 'React Native CLI Quickstart' section.

### Install Required Dependencies

- [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html): Java Development Kit 8
- [Android Studio](https://developer.android.com/studio/index.html)
- [Xcode](https://developer.apple.com/xcode/)
- [Yarn](https://yarnpkg.com/): > 1.22.4
- [Node](https://nodejs.org/en/): > 10

### Project local Configuration

In both platforms you will need to execute:

```bash
$ yarn install
```

## Android

To run the project in android you will need to create a fil calles `local.properties` into the android folder which will have the path of your android sdk.
It will container something like that:

```
sdk.dir=/Users/{user}/Library/Android/sdk

```
Then you will need to open android studio and run the project or run directly from command line executing:

```bash
$ yarn android
```

## Ios

To run the project in ios first you will need to install pods:

```bash
$ cd ios
$ pod install
```
Then you will need to open the project workspace with Xcode or run directly from command line executing:

```bash
$ yarn ios
```

## Deployment

Add additional notes about how to deploy this on a live system

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Yarn](https://yarnpkg.com/en/docs/)
- [React Native](https://facebook.github.io/react-native)
- [Redux](https://github.com/reduxjs/redux) for state management
- [React-Redux](https://github.com/reduxjs/react-redux) helper to integrate redux to react applications
- [React-Navigation](https://reactnavigation.org) JavaScript library for navigation.
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) for handling asynchronous action dispatch.
- [Redux-persist](https://github.com/rt2zz/redux-persist)
- [Reselect](https://github.com/reduxjs/reselect) selector library for redux
- [Axios](https://github.com/axios/axios) for networking
- [React-Native-Config](https://github.com/luggit/react-native-config) to manage environment variables
- [Lodash](https://github.com/lodash/lodash) general utility helper

#### Component folder structure

This template follows the next structure:

- `src`: Main container of all the code inside the application.
  - `components`: Contains every presentational component that is widely used thoughout the project.
  - `assets`: Contains every asset used in the application (images, audio, video, etc)
  - `styles`: Global styles, fonts, colors used throughout the codebase
  - `common`: Contains every element that has common behaviour for every action, component, etc in the project.
    - `strings.ts`: localized strings used globally on the app
  - `networking`: Contains all logic related to networking and service communication.
  - `hooks`: Contains all common custom hooks.
  - `store`: Contains all logic related to data storage.
    - `global`: Containts global reducers/actions/actionCreators
  - `config`: Configuration files, such as development constants, environment variables.
  - `scenes`: Every flow in the application should be here inside a corresponding folder, with its component, styles, strings and such.
    - `index.tsx`: Contains a scene where a Layout is composed with hocs that add functionality
    - `Layout.tsx`: Contains scene layout
    - `types.ts`: types constrained to this scene
    - `styles.ts`: styles constrained to this scene
    - `strings.ts`: localized strings used on this scene
  - `navigation`: Every related to navigation should be here.
  - `types`: Interfaces, model entities.
  
#### Navigation

The library `React Navigation` is already provided to perform the navigations in the application. This was decided due to its popularity and the fact that it's been considered the standard solution by the react community and also we have in account previous experiences with other libraries, all of this make together make that we choose `React Navigation`.

#### Debugging

The standalone app for macOS [React Native Debugger](https://github.com/jhen0409/react-native-debugger) is recommended due to it's ease of use and good integration with `Redux` and it's debug tools. For other platforms or another preferences, debugging with Chrome is enough.

## Authors

* **Marco Fiorito** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

