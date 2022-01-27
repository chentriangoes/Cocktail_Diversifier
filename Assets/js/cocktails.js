const container = document.getElementById('cocktail-cards');

function getDrinkApi(drinkName) {
  const drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;
    //this is the fetch request will get us the search results for the cocktail and meal receipes

    fetch(drinkApi)
      .then(function (response) {
        return response.json();
      })
      .then (function (data){ 
        console.log(data);
        for (var i = 0; i < data.drinks.length; i++) {
            var divEl = document.createElement("div");
            divEl.setAttribute("class", "tile is-2 is-parent");
            
            var sectionEl = document.createElement("section");
            sectionEl.setAttribute("class", "tile is-child box");

            var item = data.drinks[i];

            var pEl = document.createElement("p");
            pEl.setAttribute("class", "title is-size-7 has-text-centered");
            pEl.innerHTML = item.strDrink;

            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", item.strDrinkThumb);

            var ulEl = document.createElement('ul');
            
            //* pls decide what content we would like to have in the card
            var alcoholEl = document.createElement("li");
            alcoholEl.setAttribute("class", "has-text-centered");
            alcoholEl.innerHTML = item.strAlcoholic;

            var cateEl = document.createElement("li");
            cateEl.setAttribute("class", "has-text-centered");
            cateEl.innerHTML = item.strCategory;

            // display to the html
            container.appendChild(divEl);
            divEl.appendChild(sectionEl);
            sectionEl.appendChild(pEl);
            sectionEl.appendChild(imgEl);
            sectionEl.appendChild(ulEl);
            ulEl.appendChild(alcoholEl);
            ulEl.appendChild(cateEl);

            // * pls decide if this should be here or the next page
            ulEl.innerHTML += `
                               <li><strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span></li>
                               <li><strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span></li>
                               <li><strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span></li>
                               <li><strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span></li>
                               <li><strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span></li>
                               <li><strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span></li>
                               <li><strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span></li>`;      
        } 
      });
}

  var drinkName = document.location.search.split("=")[1];

  getDrinkApi(drinkName);
