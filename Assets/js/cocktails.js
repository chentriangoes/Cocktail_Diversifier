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
            
            //* pls decide what content we would like to have in the card
            var alcoholEl = document.createElement("li");
            alcoholEl.setAttribute("class", "has-text-centered");
            alcoholEl.innerHTML = item.strAlcoholic;

            var cateEl = document.createElement("li");
            cateEl.setAttribute("class", "has-text-centered");
            cateEl.innerHTML = item.strCategory;

            // var idEl = document.createElement("li");
            // idEl.setAttribute("class", "drinkID has-text-centered is-hidden"); //*hidden//
            // idEl.innerHTML = item.idDrink;

            var detailBtnEl = document.createElement("button");
            detailBtnEl.setAttribute("class", "detailButton button is-info");
            detailBtnEl.textContent = " more ";

            //<button id="searchButton" class="button is-info"> Search </button>

            // display to the html
            container.appendChild(divEl);
            divEl.appendChild(sectionEl);
            sectionEl.appendChild(pEl);
            sectionEl.appendChild(imgEl);
            sectionEl.appendChild(ulEl);
            sectionEl.appendChild(alcoholEl);
            sectionEl.appendChild(cateEl);
           // ulEl.appendChild(idEl);
          

              for (var i = 1; i < 8; i++) {
                createLi(ulEl, item["strIngredient" + i], item["strMeasure" + i]);
              }

            // * pls decide if this should be here or the next page
            // ulEl.innerHTML += `
            //                    <li><strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span></li>
            //                    <li><strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span></li>
            //                    <li><strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span></li>
            //                    <li><strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span></li>
            //                    <li><strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span></li>
            //                    <li><strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span></li>
            //                    <li><strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span></li>`;
                               
                              //  var detailButton = document.querySelector(".detailButton");
            detailBtnEl.addEventListener('click', function(event){
debugger;
                // var drinkID = document.querySelector(".drinkID");
                document.location = "./detail.html?id=" + item.idDrink; //item.idDrink; 
              });

              sectionEl.appendChild(detailBtnEl);
        } 
      });
}

                               


function createLi(ulElInput, ingrdientName, measure) {
  if (!ingrdientName || !measure) {
    return;
  }

  var li = document.createElement('li');
              li.innerHTML = `<strong>${ingrdientName} </strong><span class="has-text-danger">${measure}<span>`;
              ulElInput.appendChild(li);
}

//var drinkEl = getElementById("item.drink");
//drinkEl.addEventListener('click', function (event) {
// 

//  document.location = "./detail.html?id=" + drinkID;
  // use document.location to send to cocktails.html
  // add query string
//});

//<div class="tile is-2 is-parent"> <!-- https://bulma.io/documentation/layout/tiles/ and use javascript for it-->
//            <section class="tile is-child box">
//                <p class="title is-size-7 has-text-centered">Dry Matini</p>
//                        <img src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"></img> <!--replace it with the photo from the API-->
//                    <ul> 
//                        <li class="has-text-centered">test only</li> <!--pls remove it and use javascript for the listed item-->
//                        <li class="has-text-centered">test only</li> <!--pls remove it and use javascript for the listed item-->
//                    </ul>
//                </section>
//          </div>    



  var drinkName = document.location.search.split("=")[1];

  getDrinkApi(drinkName);