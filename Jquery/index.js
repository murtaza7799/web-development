$(function(){
$("#addbtn").click(function(){
 var vaal=$("input").val();
  $("#todolist").append("<li>"+vaal+"</li>");
 });
 $("#todolist").on("click","li",removelist);



function removelist(){
$(this).remove();


}

})