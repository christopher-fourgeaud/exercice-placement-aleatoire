$.ajax({
    dataType: "json",
    url : "http://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/basic?alt=json",

    //key=AIzaSyCg_T74YlCMxFZhPyZKMKDQM1BqzfFoFq8",

    success: function(data){

    console.log(data);
    },
    
    error: function(){
        alert("Echec de la connexion !");
    }
});