var topics=["Casablanca", "Goodfellas", "Robocop", "Pulp Fiction", "Yojimbo", "Jaws", "Anchorman", "Iron Man", "Jerry Maguire"];

function getGifs(){
var movie = $(this).attr("data-topic");
var queryURL="https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=46WkN1Y8Ib1XwBHDH74OfJfeUYg3AH5e&rating&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    $("#search-area").empty()
      var responseData=response.data
      for(let i=0; i<responseData.length; i++){
      var gifDiv = $("<div>");
      var responseRating=responseData[i].rating
      var par=$("<p>")
      par.text("Rating: " + responseRating)
      var images=$("<img>")
      var still=responseData[i].images.fixed_height_still.url
      var animated=responseData[i].images.fixed_height.url
      images.attr("src", still)
      images.attr("data-still", still)
      images.attr("data-animated", animated)
      images.attr("data-state", 'still')
      images.addClass("image-results")
      gifDiv.append(images)
      gifDiv.append(par)
      $("#search-area").append(gifDiv) 
}
})

}

$(document).on("click", ".image-results", function(){
  var state= $(this).attr('data-state');
  if(state =='still'){
    $(this).attr("src", $(this).data('animated'));
    $(this).attr('data-state', 'animated');
  }
  else{
    $(this).attr("src", $(this).data('still'));
    $(this).attr('data-state', 'still')
  }

})





function addTopicButton(){
for(let i=0; i<topics.length; i++){
    var addButton=$("<button>")
    addButton.text(topics[i])
    addButton.addClass("movie-buttons")
    addButton.attr("data-topic", topics[i])
    $("#button-list").append(addButton)
}    
}

$("#submit-search").on("click", function(event){
    $("#button-list").empty()
    event.preventDefault();
    var newAdd=$("#add-movie").val().trim()
    if (topics.length>=11){
      topics.shift()
      topics.push(newAdd);
    }
    else{
    topics.push(newAdd);  
    }
    
    $("#add-movie").val("")
    
addTopicButton();
});

$(document).on("click", ".movie-buttons", getGifs);


addTopicButton();



