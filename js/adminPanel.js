$(".img-logo").fadeIn(1500);

$(document).ready(function() {
  setTimeout(() => {
    $("#loading-div").fadeOut(700);
  }, 1000);
}) 

$(".button-log-in").on('click', function() {
  alertify.confirm('Log out?', 'Are you sure you want to log out?', function(){ 
    location.href = 'index.html';
  }
  ,function(){ 
    // do nothing
  });
})
