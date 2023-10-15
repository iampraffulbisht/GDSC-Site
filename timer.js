var countDownDate = new Date("Oct 24, 2023 00:00:00").getTime();  /*Upcoming event date*/
var x = setInterval(function() {
  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Event is live!";
  }
}, 1000);