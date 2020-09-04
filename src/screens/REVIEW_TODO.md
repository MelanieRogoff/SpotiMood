# Delete this file once the TODO is complete:

## Project Structure
* I briefly discussed the pattern that we will be following. Its Good that you've set it up like that.
* The main benefit of following a common structure is for scalability and readability. You might not see it right away, but when we start adding more components and screen you will.
* I will describe the purpose of each folder as we go along
```
  /src
    /components
    /screens
      /homeScreen
        HomeScreen.js -> the screen component file
        HomeScreen.scss -> the stylsheet that's tied to this screen
        index.js -> entry point

```
* **/components** -> any customized components that is reusable and can be used in a screen
* **/screens** -> think of this as the Screen that you're seeing on the browser. its a compilation of multiple components and/or screens
    * **/homeScreen** -> each screen component should have their own folder. Since most screens/components are accompanied with a `.scss` it could quickly clutter up your file explorer
        * *HomeScreen.js* -> this was the App.js. i just renamed it
        * *HomeScreen.scss*
        * *index.js* -> this is important. in JS. index.js is the entry point of a folder by default. all of your folder will most likely contain an index.js

**TODO:**
  * take a look at `HomeScreen.scss`
  * extract any styles that should not be there and move them to their respective .scss inside the components folder

## Function Exports
* we should use **Named Exports** as opposed to **Default Exports**. it's not wrong to use default exports. but it's more dynamic and easily grouped with named exports
* for reference: https://stackoverflow.com/questions/33611812/export-const-vs-export-default-in-es6
```Javascript
  // do this
  export function Smiley() {
    // code
  }

  // instead of
  export default function Smiley() {
    // code
  }
```
* **Example:**
    * take a look at `HomeScreen.js`
    * because we did the named export and have exported all the components from `/components/index.js`
    * we make our imports a little cleaner like so
    ```Javascript
      // from this
      import Smiley from './components/Smiley/Smiley';
      import SpotifyBox from './components/SpotifyBox/SpotifyBox';

      // to this
      import {Smiley, SpotifyBox} from '../../components';
    ```

## Code Documentation
 * Code documentation: it's good practice to always add jsdoc to all of the function/components we make
 * ref: https://jsdoc.app/about-getting-started.html#getting-started

**Code documentation summary:**
   - documenting your code is always good. so you wont forget what it does when you look at it again in the future
   - jsdoc has other benefits like intellisense, autofill and code completion when setup correctly
   - jsdoc always goes at the top of your function. thats how it knows that the information belongs to that function
   

**Example:**
    - see `HomeScreen.js` for an example of this jsdoc setup
    - Hover your mouse on the `HomeScreen()` function. you will see the jsdoc in action
  
**TODO:**
  - setup jsdoc on the other components that you made (Smiley, SpotifyBox)
 

## Removal of DOM primitives
 * since we are using Material-UI. we have 0 need for using the DOM primitive elements
 * we should look to remove any usage of it and replace it with the MUI counterpart
 * **Example:**
    * see `HomeScreen.js`

**TODO:**
    * should update the Components that uses div (Smiley)

## Smiley Buttons
* there's nothing wrong with your current implementation (it works fine). but as a user, when I hover over something that's clickable. i expect to see some kind of indicator (pointer or something)
* 2 approach:
  * Try using the built in IconButton instead: https://material-ui.com/api/icon-button/#iconbutton-api
      ```Javascript
        // example
            <IconButton>
                <MoodIcon onClick={woo} color="primary"></MoodIcon>
            </IconButton>
      ```
  * Or a similar approach is to use utilize MUI `TouchRipple API`: https://v4-3-3.material-ui.com/api/touch-ripple/
  * then you can add css styling to the wrapper, or anywhere that makes sense