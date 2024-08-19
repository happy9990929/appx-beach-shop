$(function(){
  $("#bar").on("click", () => {
    $("#nav").slideToggle();
  })

  $("#submit").on("click", () => {
    alert("Sent! Thank you for your subscription!")
  })
})