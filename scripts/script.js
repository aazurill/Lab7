// script.js
/* eslint-disable */
import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
let id = 0;
// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.id = id;
        id += 1;
        newPost.addEventListener('click', () => {
          setState({state: 'entry', id: newPost.id})
        })
        document.querySelector('main').appendChild(newPost);
      });
    });
});

let settings = document.querySelector('header img');
let home = document.querySelector('header h1')

settings.addEventListener('click', () => {
  console.log("Setting state: Setting")
  setState({state: 'settings'}, false)
})

home.addEventListener('click', () => {
  console.log("Setting state: Home")
  setState({state: 'home'}, false)
})

window.addEventListener('popstate', (event) => {
  setState(event.state, true);
});