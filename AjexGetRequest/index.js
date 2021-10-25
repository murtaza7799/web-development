$(function(){
    //simplified
 $("#mybtn").click(function(){
     $.get("student.txt",function(e){
        $("#result").empty();
        $("#result").text(e);
     })
 });


// check ajex function and check response function and its call 
})
function sendAjex(){
    console.log("Sending Ajex Call to server");
    $.get("student.txt",handelResponce);
}
function handelResponce(response){
    console.log("responce received");
    console.log(response);

    $("#result").empty();
    $("#result").text(response);



}