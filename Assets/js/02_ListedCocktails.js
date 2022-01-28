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
          var item = data.drinks[i];
          var divEl = document.createElement("div");
            divEl.setAttribute("class", "tile is-2 is-parent");
            
            var sectionEl = document.createElement("section");
            sectionEl.setAttribute("class", "tile is-child box");

            var pEl = document.createElement("p");
            pEl.setAttribute("class", "title is-size-7 has-text-centered");
            pEl.innerHTML = item.strDrink;

            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", item.strDrinkThumb);

            var ulEl = document.createElement('ul');

            var detailBtnEl = document.createElement("button");
            detailBtnEl.setAttribute("class", "button is-info");
            detailBtnEl.innerHTML = " more ";

            //<button id="searchButton" class="button is-info"> Search </button>

            // display to the html
            container.appendChild(divEl);
            divEl.appendChild(sectionEl);
            sectionEl.appendChild(pEl);
            sectionEl.appendChild(imgEl);
            sectionEl.appendChild(ulEl);

            //for (var i = 1; i < 8; i++) {
            //  createLi(ulEl, item["strIngredient" + i], item["strMeasure" + i]);
            // }

            //* pls decide if this should be here or the next page
            sectionEl.innerHTML += `
                              <li><strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span></li>
                              <li><strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span></li>
                              <li><strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span></li>
                              <li><strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span></li>
                              <li><strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span></li>
                              <li><strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span></li>
                              <li><strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span></li>`;
                
            detailBtnEl.addEventListener('click', function(event){
                   document.location = "./03_Detail.html?id=" + item.idDrink;
            });
            sectionEl.appendChild(detailBtnEl);
        } 
      });
}

//function createLi(ulElInput, ingrdientName, measure) {
//  if (!ingrdientName || !measure) {
//    return;
//  }

//  var li = document.createElement('li');
//              li.innerHTML = `<strong>${ingrdientName} </strong><span class="has-text-danger">${measure}<span>`;
//              ulElInput.appendChild(li);
//}

  var drinkName = document.location.search.split("=")[1];

  getDrinkApi(drinkName);