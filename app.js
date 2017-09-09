function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

$.ajax({
    dataType: "json",
    url : "http://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json",
    //key=AIzaSyCg_T74YlCMxFZhPyZKMKDQM1BqzfFoFq8",
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
