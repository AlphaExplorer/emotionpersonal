var keyword = 0;
var img_response_storage;
var counter = 0;

function apiCall(keyword) 
{
    var queryURL = "https://api.unsplash.com/search/photos?page=1&query=" +
    keyword + "&client_id=85b8d3c3eeda1d3e99f256d19ed5228b2c9bacf053fd33e7b1303b9dec097df3";
    var queryURL
    $.ajax(
    {
        url: queryURL,
        method: "GET"
    }).then(function (response) 
    {      
        // Saving the response 
        img_response_storage = response;
        console.log(img_response_storage)        
    })
}

function img_display(response)
{   
    // Saving the gif_original_url property
    var img_url = response.results[counter].urls.small;
    // Creating and storing an image tag
    var imgApi = $("<img>");
    // Setting the gif src, class and alt
    imgApi.attr("src", img_url);
    imgApi.attr("class", "mb-3 image-content");
    imgApi.attr("alt", "img");
    // Appending the gif to the App_response div
    $(".image-content").empty();
    $(".image-content").append(imgApi);
    console.log(img_url);
}

$(".emotion-icons").on("click", function(event)//handles the user clicks
{
    var clicked_mood = event.target;
    keyword = clicked_mood.getAttribute('value');
    console.log(keyword)
    apiCall(keyword)
    img_display(img_response_storage);
});

$(document).on("click", "#img-forward", function(){
    counter++
    console.log(counter)
    if(counter >=10)
    {
        counter = 0
        counter++
        img_display(img_response_storage, counter);
    }
    else
    {
        counter++
        img_display(img_response_storage, counter);
    }
})

$(document).on("click", "#img-back", function(){
    counter--
    if(counter <= 0)
    {
        counter = 10
        counter--
        img_display(img_response_storage, counter);
    }
    else
    {
        counter--
        img_display(img_response_storage, counter);
    }
})
