// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDwANnYp-1wg5MrzxtdQ0tKD35DPGRpsCg",
//   authDomain: "brewdew-app.firebaseapp.com",
//   databaseURL: "https://brewdew-app.firebaseio.com",
//   projectId: "brewdew-app",
//   storageBucket: "brewdew-app.appspot.com",
//   messagingSenderId: "944789024698"
// };
// firebase.initializeApp(config);
// Global variables for holding user input and API keys
var characterToSearch;
const weatherkey = "d67177256644eb3aca809a29087fb780";
// Define onClick events for submit button
$("#submit").on("click", (e) => {
  e.preventDefault();
  // Fill the user input variables with information from the page
  // characterToSearch = $("#Character-input");
  characterToSearch = "Hulk";
  //Build query URL for character
  var marvelQuery = "https://gateway.marvel.com:443/v1/public/characters?name=" + characterToSearch + "&limit=10&apikey=9466da8bc355a587ceeaaf0a07f2d369";
  console.log(url);
  // Ajax call for weather
  $.ajax({
    url: marvelQuery,
    method: "GET"
  }).then((response) => {
    console.log(response);
  }).catch(err => console.log(err))
  // We might run into problems with promises...as both of these calls might not return at the same time.
})