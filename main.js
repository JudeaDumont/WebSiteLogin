$('.message a').click(function() {
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "slow");
});

function login() {
  alert("logging in")
  alert(document.getElementById("4").value + " + " + document.getElementById("5").value)
  $.ajax({
    url: "http://jude-the-software-dev.000webhostapp.com/handlecredentials.php",
    type: post,
    data: {
      na: document.getElementById("4").value,
      pw: document.getElementById("5").value
    },
    success: function(data) {
      alert(data); //response from the page.php
    }
  });
};
