var topics=["Casablanca", "Goodfellas", "Robocop", "Pulp Fiction", "Yojimbo", "Jaws", "Anchorman", "Iron Man"];
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
addTopicButton();




