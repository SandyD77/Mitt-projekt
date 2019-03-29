// Our variables
const key = "081464f2dd5a41ee8aaa8abb06632b8a"
const url = `https://newsapi.org/v2/everything?language=sv&q=penningtvätt OR spelmyndigheten OR ekobrott NOT musikal&from=2019-03-10S&sortBy=publishedAt&apiKey=${key}`
const url2 = `https://newsapi.org/v2/everything?language=sv&q=bedrägeri OR fraud OR förskingring OR matchfixning&from=2019-03-10S&sortBy=publishedAt&apiKey=${key}`
const url3 = `https://newsapi.org/v2/everything?language=sv&q=spelmissbruk OR spelmissbrukare&from=2019-03-10&sortBy=publishedAt&apiKey=${key}`

//const keyWeather = "e7d14d47781b029f604ee7b45f050e99"
//const urlWeather = `http://api.openweathermap.org/data/2.5/forecast?id=2662689&APPID=${keyWeather}`

// Moneylaundering
const recievedNews = (newsdata) => {
	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <img src="${article.urlToImage}"/>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Klicka här för att komma till nyheten!</a>
            <p>Publicerad ${article.publishedAt}</p>
            </div>`
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

//Fraud
const recievedFraud = (frauddata) => {
	// For each article object from the API, we create a new div in HTML.
    frauddata.articles.forEach((article) => {
					//Here we create and add html elements to our html file
					document.querySelector(".allFraud").innerHTML +=
            `<div class="fraud">
            <img src="${article.urlToImage}"/>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Klicka här för att komma till nyheten!</a>
            <p>Publicerad ${article.publishedAt}</p>
            </div>`
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url2)
  .then(response => response.json())
  .then(recievedFraud)

  //Gamingproblems
  const recievedGamingproblems = (gamingdata) => {
  	// For each article object from the API, we create a new div in HTML.
      gamingdata.articles.forEach((article) => {
  					//Here we create and add html elements to our html file
  					document.querySelector(".allGamingproblems").innerHTML +=
              `<div class="gamingproblems">
              <img src="${article.urlToImage}"/>
              <h2>${article.title}</h2>
              <p>${article.description}</p>
              <a href="${article.url}" target="_blank">Klicka här för att komma till nyheten!</a>
              <p>Publicerad ${article.publishedAt}</p>
              </div>`
      })
  }

  //Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
  fetch(url3)
    .then(response => response.json())
    .then(recievedGamingproblems)

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("toTop").style.display = "block";
      } else {
          document.getElementById("toTop").style.display = "none";
      }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

/*
  fetch(url)
    .then(response => response.json())
    .then(recievedWeather)
*/
