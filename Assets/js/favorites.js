const localStorageButton = document.getElementById("fav");

var favourites = [];
var localStorageFavourites= JSON.parse(localStorage.getItem("fav"));

if (localStorageFavourites) {
    favourites = localStorageFavourites;
}

// loop through favourites
// for every item display favorite card 

for (var i = 0; i < favourites.length; i++) {
    var item = favourites[i];

// display favourite

var nameEl = data.drinks[0].strDrink;
          var imgEl = data.drinks[0].strDrinkThumb;
          var infoEl = data.drinks[0].strInstructions;

          //ingredients element could be relocated from cocktails.js

          console.log(nameEl);
          console.log(imgEl);

          var imgCard = document.createElement("div");
          imgCard.setAttribute("class", "tile is-parent is-4")

          var displayImg = document.createElement("img");
          displayImg.setAttribute("class", "tile is-child box has-text-centered")
          displayImg.setAttribute("src", imgEl);

          var detailEl = document.createElement("div");
          detailEl.setAttribute("class", "tile is-vertical is-parent is-8");

          var descriptionEl = document.createElement("div");
          descriptionEl.setAttribute("class", "tile is-child box")

          var nameCard = document.createElement("p");
          nameCard.setAttribute("class", "title");
          nameCard.innerHTML = nameEl;

          var moreInfo = document.createElement("p");
          moreInfo.setAttribute("class", "subtitle");
          moreInfo.innerHTML = infoEl;
          
          //var descriptionCard = document.createElement("p");

        
          detailCard.appendChild(detailEl);
          detailEl.appendChild(descriptionEl);
          descriptionEl.appendChild(nameCard);
          descriptionEl.appendChild(moreInfo);
          detailCard.appendChild(imgCard);
          imgCard.appendChild(displayImg);  

}


localStorage.setItem("")