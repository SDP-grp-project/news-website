console.log("hello")

// apikey = 1879bb8f97de45998697d9357be6f98f

let apiKey = '1879bb8f97de45998697d9357be6f98f';
//sources = 'bbc-news';

let newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
// with-source =  https://newsapi.org/v2/top-headlines?sources-bbc-news&country=in&apiKey=1879bb8f97de45998697d9357be6f98f
// with-country = https://newsapi.org/v2/top-headlines?country=in&apiKey=1879bb8f97de45998697d9357be6f98f

//   https://newsapi.org/v2/everything?q=food&apiKey=1879bb8f97de45998697d9357be6f98f
//   https://newsapi.org/v2/everything?country=in&q=food&apiKey=1879bb8f97de45998697d9357be6f98f

//country
function showAustralia() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=au&apiKey=${apiKey}`, true);
    xhr.send();
}

function showIndia() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
    xhr.send();
}

function showChina() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=cn&apiKey=${apiKey}`, true);
    xhr.send();
}

function showUnitedStates() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);
    xhr.send();
}

function showRussia() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${apiKey}`, true);
    xhr.send();
}

//categories
function showBusiness() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showEntertainment() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showGeneral() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showHealth() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showScience() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showTechnology() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

function showSports() {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apiKey}`, true);
    xhr.send();
}

query = document.getElementById('query').value;
console.log(query);

let test = document.getElementById('test');

function search() {
    var query = document.getElementById("query").value;
    console.log(query);
    if (query == "") {
        error = `<div class="alert alert-dark alert-dismissible fade show" role="alert">
                    <strong></strong> Please enter any search term in the search bar.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
        test.innerHTML = error;
    }
    else {
        

        //xhr.open('GET', `https://newsapi.org/v2/top-headlines?q=${query}&language=en&apiKey=${apiKey}`, true);
        xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`, true);
        xhr.send()
    }

}

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        let newsHtml = "";

        if (json["totalResults"] != 0) {
            console.log(articles["totalResults"]);
            articles.forEach((element, index) => {
                news = `
                <div>    
                    <div class="row my-3">
                        <div class="col-6 col-md-4 col-sm-4 col-md-4 col-lg-4">
                            <h2 class="">
                                <img src="${element["urlToImage"]}" class="rounded" alt="..." style="width: 18rem;">
                        </h2>
                        </div><br>
                        <div class="col-12 col-md-8 col-sm-8 col-md-7 col-lg-8">
                            <div class="">
                                <button class="btn btn-outline-secondary collapsed headlines" data-bs-toggle="collapse" href="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    ${element["title"]}
                                </button>
                            </div>
                            <div class="collapse " id="collapse${index}" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                                <div class="card card-body">
                                    <p>
                                        ${element['description']}<a href="${element['url']}" target="_blank"> <br> Read more ...</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                newsHtml += news;
            });
            newsAccordian.innerHTML = newsHtml;
            console.log(articles);   
        }
        else{
            console.log(articles["totalResults"]);
            news = `<div style='text-align:center; font-size:36px; margin-top:40px;'>
                            Sorry. This news isn't available.
                        </div>`;
            newsAccordian.innerHTML = news;
            console.log(articles);
            
        }
    }
    else {
        console.log("error!!!");
    }
}

xhr.send()

