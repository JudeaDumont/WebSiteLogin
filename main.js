function login() {
  alert(document.getElementById("4").value + " + " + document.getElementById("5").value);
  $.ajax({
    data: 'name=' + document.getElementById("4").value,
    url: 'handlecredentials.php',
    method: 'POST', // or GET
    success: function(msg) {
        alert(msg);
    }
});
};