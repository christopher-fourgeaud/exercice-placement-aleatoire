function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}
$("#valider").click(function(){

$.ajax({
    dataType: "json",
    url : "https://spreadsheets.google.com/feeds/list/" + $('#clef').val() + "/od6/public/values?alt=json",
    success: function(data){
        var tableau_apprenants = data.feed.entry;
        shuffle(tableau_apprenants);
        console.log(tableau_apprenants);
        for (var i = 0; i < tableau_apprenants.length; i++) {
            $("#place"+ i).html("<p class='text-center nom'>"+tableau_apprenants[i].gsx$prénoms.$t+"</p>" + "<img class='img-responsive image' src="+tableau_apprenants[i].gsx$url.$t+"><br>");
            
        }
    },
    error: function(){
        alert("Echec de la connexion !");
    }
});

})