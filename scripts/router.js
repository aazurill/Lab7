// router.js
/* eslint-disable */
export const router = {};
const title = document.querySelector("header h1");
const body = document.querySelector('body');



/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(state, backButt) {
  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   *
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   *
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState()
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   */

  if(state.state === 'home') {
    if(!backButt) {
      history.pushState(state,"", "");
    }
    console.log("State changed -> home");
    body.className = '';
    title.innerHTML = 'Journal Entries';

  }
  else if ( state.state === 'settings') {
    if(!backButt) {
      history.pushState(state, "", '#settings');
    }
    console.log("State changed -> settings");
    body.className = 'settings';
    title.innerHTML = 'Settings';

  }
  else if (state.state === 'entry'){
    if(!backButt) {
      history.pushState(state, "",  '#entry' + state.id);
    }
    console.log("State changed -> Entry " + state.id)
    let id = state.id;
    console.log(id);
    body.className = 'single-entry';
    title.innerHTML = 'Entry ' + id;
    let newEntr = document.createElement('entry-page');
    newEntr.entry = document.getElementById(id).entry;
    body.removeChild(document.getElementsByTagName("entry-page")[0]);
    body.appendChild(newEntr);
  }
}
