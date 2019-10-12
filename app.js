var topics=["Casablanca", "Goodfellas", "Robocop", "Pulp Fiction", "Yojimbo", "Jaws", "Anchorman", "Iron Man"];

function getGifs(){
var movie = $(this).attr("data-topic");
var queryURL="https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=46WkN1Y8Ib1XwBHDH74OfJfeUYg3AH5e&rating&limit=12";

// API KEY:  46WkN1Y8Ib1XwBHDH74OfJfeUYg3AH5e
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
      console.log(response.data);
      console.log(response.data.rating)
      var responseData=response.data
      for(let i=0; i<responseData.length; i++){
          console.log(responseData[i])
          console.log(responseData[i].rating)
    //   var responseRating=responseData[i]
    //   var par=$("<p>")
    //   par.text(responseData)
      
    //   $("#search-area").append(par)    
      }
      
      



  })

}





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
   
    alert("yes")
    event.preventDefault();

    var newAdd=$("#add-movie").val().trim()
    topics.push(newAdd);
    console.log(topics)
addTopicButton();
});

$(document).on("click", ".movie-buttons", getGifs);


addTopicButton();



