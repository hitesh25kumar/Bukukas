# Events Tracker App

A simple app which displays a bunch of events, and
allows the user to track certain events.


## Getting started

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. Run `npm install` , all required components will be installed automatically

    ### iOS
      
    1. Run `pod install` from `react-native-demo/ios` folder
    
    
    ### Android
    
  
1. It is recommended to run `react-native start` command from root project directory.
2. Run your project from XCode (`Cmd+R`) for iOS, or use `react-native run-android` to run your project on Android.


## Technologies Used

- React Native
- MySQL
- TypeScript


## How this app works

1. When the user starts the app, he/she is prompted to enter his/her name.
2. Then app then shows a page with a list of events in and around the city.
3. The listing of events is displayed in two modes.
4. When the user selects an event he/she is shown another page with Event details, which
   includes an event image, event name, location, entry type (paid or free) and a button
   that allows the user to join an event.
 5. The user can  delete an event from the tracking page.  
 6. The user can see all the joined events from the tracking page.
 7. The events that user has joined will be saved in the database with his name and After relaunching the app when he types his/ her name then all the joined events will be visible from the My events tab.
 8. All the events that joined by that particular user will be saved in the database (SQLite).