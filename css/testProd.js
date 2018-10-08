$(document).ready(function(){
  $contents = $(".notes > .note > .row > .content.col-sm-9").removeClass("col-sm-9").addClass("col-sm-12");
  console.log("content found: " + $contents.length);
});
