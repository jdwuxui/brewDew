// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwANnYp-1wg5MrzxtdQ0tKD35DPGRpsCg",
  authDomain: "brewdew-app.firebaseapp.com",
  databaseURL: "https://brewdew-app.firebaseio.com",
  projectId: "brewdew-app",
  storageBucket: "brewdew-app.appspot.com",
  messagingSenderId: "944789024698"
};
firebase.initializeApp(config);

// Global variables for holding user input and API keys
var state;
var city;
const weatherkey = "d67177256644eb3aca809a29087fb780";
// const brewerykey = ;



// Define onClick events for submit button
$("#submit").on("click", (e) => {
  e.preventDefault();
  // Fill the user input variables with information from the page
  // state = $("#state").val().trim();
  // city = $("#city").val().trim();

  //Build query URl for weather
  var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=Raleigh&apikey=" + weatherkey;

  //Build query URL for brewery
  var breweryQuery = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state"; // add state

  // Ajax call for weather
  $.ajax({
    url: weatherQuery,
    method: "GET"
  }).then((response) => {
    console.log(response);
    // Grab the information we want and display it on the page

    // Ajax call for brewery
    $.ajax({
      url: breweryQuery,
      method: "GET"
    }).then((response) => {
      console.log(response);
      // Grab the information we want and display it on the page
    }).catch(err => console.log(err));

  }).catch(err => console.log(err))
  // We might run into problems with promises...as both of these calls might not return at the same time.

})

