console.log("hello")

// apikey = 1879bb8f97de45998697d9357be6f98f

let apiKey = '1879bb8f97de45998697d9357be6f98f';
//sources = 'bbc-news';

let newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
// with-source =  https://newsapi.org/v2/top-headlines?sources-bbc-news&country=in&apiKey=1879bb8f97de45998697d9357be6f98f
// with-country = https://newsapi.org/v2/top-headlines?country=in&apiKey=1879bb8f97de45998697d9357be6f98f


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        let newsHtml = "";

        articles.forEach((element, index) => {

            /*let news = `<div class="">
                            <div class="">
                                <h2 class="">
                                    <img src="${element["urlToImage"]}" class="card-img-top" alt="..." style="width: 18rem;">

                                    <button class="btn btn-outline-secondary collapsed headlines" data-bs-toggle="collapse" href="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>
                            <div class="collapse" id="collapse${index}" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                                <div class="card card-body">
                                <p>
                                ${element['description']}<a href="${element['url']}" target="_blank">  Read more ...</a>
                                </p>
                                </div>
                            </div>
                        </div>`;*/
            news = `
            <div>    
                <div class="row">
                    <div class="col-4">
                        <h2 class="">
                            <img src="${element["urlToImage"]}" class="rounded float-start" alt="..." style="width: 18rem;">
                    </h2>
                    </div><br>
                    <div class="col-8">
                        <div class="">
                            <button class="btn btn-outline-secondary collapsed headlines" data-bs-toggle="collapse" href="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                                ${element["title"]}
                            </button>
                        </div>
                        <div class="collapse float-end" id="collapse${index}" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                            <div class="card card-body">
                                <p>
                                    ${element['description']}<a href="${element['url']}" target="_blank">  Read more ...</a>
                                </p>
                            </div>
                            <br>
                        </div><br>
                    </div><br>
                </div><br>
            </div>
                `;
            newsHtml += news;

        });
        newsAccordian.innerHTML = newsHtml;
        console.log(articles);
    }
    else {
        console.log("error!!!");
    }
}

xhr.send()


