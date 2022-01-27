// 1) when user clicks search get input value
// 2) send the user to cocktails.html page and add input value to query string


var searchBtnEl = document.getElementById ("searchButton");
var inputEl = document.getElementById ("inputSearch");


// add click listener to searchbutton
searchBtnEl.addEventListener('click', function (event) {
  var inputElValue = inputEl.value;

  document.location = "./cocktails.html?name=" + inputElValue;
  // use document.location to send to cocktails.html
  // add query string
});

//uri = send user to..
