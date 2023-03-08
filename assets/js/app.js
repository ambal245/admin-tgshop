$('#tk-input-3, #tk-input-4').on('keyup', function () {
  if ($('#tk-input-3').val() == $('#tk-input-4').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else
    $('#message').html('Not Matching').css('color', 'red');
});

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}
function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}
var pwShown = 0;
document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);