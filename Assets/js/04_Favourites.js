//Set Universal Variables 
var favourites = JSON.parse(localStorage.getItem('favourites')) || [];
var favouriteEl = document.querySelector(".favourites");

//Function to Print Saved Favourite Items
function printFavourites(){
    // create li tag for saving 12 favourite cocktails
    var cocktailOne = document.createElement("li");
    var cocktailTwo = document.createElement("li");
    var cocktailThree = document.createElement("li");
    var cocktailFour = document.createElement("li");
    var cocktailFive = document.createElement("li");
    var cocktailSix = document.createElement("li");
    var cocktailSeven = document.createElement("li");
    var cocktailEight = document.createElement("li");
    var cocktailNine = document.createElement("li");
    var cocktailTen = document.createElement("li");
    var cocktailEleven = document.createElement("li");
    var cocktailTwelve = document.createElement("li");

    //append child to the favourite container
    favouriteEl.appendChild(cocktailOne);
    favouriteEl.appendChild(cocktailTwo);
    favouriteEl.appendChild(cocktailThree);
    favouriteEl.appendChild(cocktailFour);
    favouriteEl.appendChild(cocktailFive);
    favouriteEl.appendChild(cocktailSix);
    favouriteEl.appendChild(cocktailSeven);
    favouriteEl.appendChild(cocktailEight);
    favouriteEl.appendChild(cocktailNine);
    favouriteEl.appendChild(cocktailTen);
    favouriteEl.appendChild(cocktailEleven);
    favouriteEl.appendChild(cocktailTwelve);

    // display available 12 favourite cocktails
    cocktailOne.textContent = favourites[0].cocktail
    cocktailTwo.textContent = favourites[1].cocktail
    cocktailThree.textContent = favourites[2].cocktail
    cocktailFour.textContent = favourites[3].cocktail
    cocktailFive.textContent = favourites[4].cocktail
    cocktailSix.textContent = favourites[5].cocktail
    cocktailSeven.textContent = favourites[6].cocktail
    cocktailEight.textContent = favourites[7].cocktail
    cocktailNine.textContent = favourites[8].cocktail
    cocktailTen.textContent = favourites[9].cocktail
    cocktailEleven.textContent = favourites[10].cocktail
    cocktailTwelve.textContent = favourites[11].cocktail
  };
  
  //Cear the Local Storage and Remove the Records Saved Previously
  var clearBtnEl = document.querySelector(".clearBtn")
  clearBtnEl.addEventListener("click", function(){
    localStorage.clear();
    favouriteEl.remove();
   });

//Call printFavourites function
printFavourites();