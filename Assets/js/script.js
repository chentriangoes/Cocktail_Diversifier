//setting constants by getting element IDs
const cocktailSearch = document.getElementById('cocktailSearch');
const mealSearch = document.getElementById('mealSearch');


const mealApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

function getDrinkApi(drinkName) {
  const drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;
    //this is the fetch request will get us the search results for the cocktail and meal receipes

    fetch(drinkApi)
      .then(function (response) {
        return response.json();
      })
      .then (function (data){ 
        console.log(data);
        // display to html teh results
      });
}

cocktailSearch.addEventListener("click", function(event){
  event.preventDefault();

  var inputValue = ""; // get the input value
  getDrinkApi(inputValue);
})

mealSearch.addEventListener("click", function(event){
  event.preventDefault();
  // alert ("Please type something");
})

// fetchButton.addEventListener('click', getApi);

