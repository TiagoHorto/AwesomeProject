# User Manual

1. Install the dependencies on project.
2. To run the project, just type the following command `npm start` in your terminal.
3. Open (http://localhost:19002/) to view the console of your project in your browser.
4. Install the app Expo Cli in your smartphone, next you have scan the QRCode of the console open before.
5. App will open in your device.

## Libraries need to install

### expo-cli
Expo CLI is a command line app that is the main interface between a developer and Expo tools. 
You may use the CLI in your terminal or use the web based interface (it opens automatically by default, or you can press d from the CLI to open it on demand). The web interface enables you to use some of the most often used features from a quick-to-use graphical interface.

### react-navigation/native-stack
Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack. By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, use OS default animation on Android.

### react-native-screens 
react-native-screens provides native primitives to represent screens instead of plain <View> components in order to better take advantage of operating system behavior and optimizations around screens. This capability is used by library authors and unlikely to be used directly by most app developers.

### react-native-safe-area-context
react-native-safe-area-context provides a flexible API for accessing device safe area inset information. This allows you to position your content appropriately around notches, status bars, home indicators, and other such device and operating system interface elements.

### react-native-vector-icons
React Native Vector Icons are the most popular custom icons of NPM GitHub library. It has more than 3K (3000) icons collection in it. All these icons are free to use.

### react-router-dom       
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.

### axios    
Axios is a lightweight HTTP client based on the $http service within Angular. js v1. x and is similar to the native JavaScript Fetch API. Axios is promise-based, which gives you the ability to take advantage of JavaScript's async and await for more readable asynchronous code.

### redux redux-thunk    
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

### react-redux   
React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple.

## Technical Decisions
    Styled components were used in the project, which in general make the code more readable and easier to understand. 
    A folder structure was also created for this purpose.

    Redux Thunk middleware allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
    The good thing about using Redux is that redux has a single state that can only be modified through "actions" (simple JavaScript objects), which are dispatched to the Redux Store. Most other data stores have the state contained within the React components themselves, allowing you to have multiple stores and/or use mutable state.
    This, in turn, causes the store reducer, a pure function that operates on immutable data, to execute and potentially update state. This process forces unidirectional data flow, which is easier to understand and more deterministic.

    Axios is an HTTP client library that allows you to make requests to a certain endpoint, in this case the Google Books api was used to obtain the complete information of books.