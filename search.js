/*
$(document).ready(function () {

    $("#searchbtn").on("click", function (e) {
        e.preventDefault();

        let query = $("#searchquery").val();
        let url = "https://newsapi.org/v2/top-headlines?q=" + query + "&country=in&apiKey=1879bb8f97de45998697d9357be6f98f";

        if (query !== "") {

            $.ajax({

                url: url,
                method: "GET",
                dataType: "json",

                beforeSend: function () {
                    $("#loader").show();
                },

                complete: function () {
                    $("#loader").hide();
                },

                success: function (news) {
                    let output = "";
                    let latestNews = news.articles;

                    for (var i in latestNews) {
                        output += `
               

                <div>    
                    <div class="row">
                        <div class="col-4">
                            <h2 class="">
                                <img src="${latestNews[i].urlToImage}" class="rounded float-start" alt="..." style="width: 18rem;">
                        </h2>
                        </div><br>
                        <div class="col-8">
                            <div class="">
                                <button class="btn btn-outline-secondary collapsed headlines" data-bs-toggle="collapse" href="#collapse${latestNews[i]}"
                                    aria-expanded="true" aria-controls="collapse${latestNews[i]}">
                                    ${latestNews[i].title}
                                </button>
                            </div>
                            <div class="collapse " id="collapse${latestNews[i]}" aria-labelledby="heading${latestNews[i]}" data-parent="#newsAccordian">
                                <div class="card card-body">
                                    <p>
                                    ${latestNews[i].description}<a href="${latestNews[i].url}" target="_blank"> <br> Read more ...</a>
                                    </p>
                                </div>
                                <br>
                            </div><br>
                        </div><br>
                    </div><br>
                </div>        
              `;
                    }

                    if (output !== "") {
                        $("#newsAccordian").html(output);
                        M.toast({
                            html: "There you go, nice reading",
                            classes: 'green'
                        });

                    } else {
                        let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
                        $("#newsAccordian").html(noNews);
                        M.toast({
                            html: "This news isn't available",
                            classes: 'red'
                        });
                    }

                },

                error: function () {
                    let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;

                    $("#newsAccordian").html(internetFailure);
                    M.toast({
                        html: "We encountered an error, please try again",
                        classes: 'red'
                    });
                }


            });

        } else {
            let missingVal = `<div style="font-size:34px; text-align:center; margin-top:40px;">Please enter any search term in the search engine</div>`;
            $("#newsAccordian").html(missingVal);
            M.toast({
                html: "Please enter something",
                classes: 'red'
            });
        }

    });

});
*/

