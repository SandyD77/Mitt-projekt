// Our variables
const key = "081464f2dd5a41ee8aaa8abb06632b8a"
const url = `https://newsapi.org/v2/everything?language=sv&q=penningtvätt&from=2018-09-01&sortBy=publishedAt&apiKey=${key}`

//const keyWeather = "e7d14d47781b029f604ee7b45f050e99"
//const urlWeather = `http://api.openweathermap.org/data/2.5/forecast?id=2662689&APPID=${keyWeather}`


// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p class="readMore">${article.description}</p>
            <div>Läs mer</div>
            <a href="${article.url}">Klicka här för att komma till nyheten!</a>
            <p>Publicerad ${article.publishedAt}</p>
            </div>`
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

  const readMore = () => {
    document.querySelector(".readMore").onclick = document.querySelector(".readMore").classList.remove("readMore")
  }

  //document.querySelector(".readMore").onclick = readMore
  setTimeout(readMore, 3000);

/*
  fetch(url)
    .then(response => response.json())
    .then(recievedWeather)
*/
