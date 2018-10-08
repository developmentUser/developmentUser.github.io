<script src="../ClientGlobalContext.js.aspx" type="text/javascript" ></script>
$(document).ready(function(){
  $contents = $(".notes > .note > .row > .content.col-sm-9").removeClass("col-sm-9").addClass("col-sm-12");
  console.log("content found: " + $contents.length);
  
  formContext.data.addOnLoad(function(){
    $contents2 = $(".notes > .note > .row > .content.col-sm-9").removeClass("col-sm-9").addClass("col-sm-12");
    console.log("content2 found: " + $contents2.length);
  });
});
