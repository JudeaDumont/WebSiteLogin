$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function login()
{
    alert(document.getElementById("4").value+" + "+document.getElementById("5").value)
    $.ajax(
        {
            url: '/form',
            type: 'POST',
            data: {
                user: document.getElementById("4").value,
                password: document.getElementById("5").value
            },
            //success: postSuccessHandler
        });
}

