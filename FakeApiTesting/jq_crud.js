$(function() {

loadRecepies();

});

function loadRecepies(){
    var recepies=$("#items");
    $.ajax({
        url: 'https://usman-recipes.herokuapp.com/api/products',
        method: 'GET',
        success: function(response){
           recepies.empty();
            $.each(response, function(a){
             recepies.append(`<div id="product">
             <h4 id="name">${"Name : "+response[a].name}</h4>
             <button
             <h4 id="price">${"Price : "+response[a].price}</h4>
             <h4 id="color">${"Color : "+response[a].color}</h4>
             <h4 id="dep">${"Department : "+response[a].department}</h4>
             <h4 id="dis">${"Discription : "+response[a].description}</h4><br>
             </div>`)  
               
            })
          
           


        }
    })



}