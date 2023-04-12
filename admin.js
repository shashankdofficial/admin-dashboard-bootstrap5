var time = 0
 
window.onfocus = function(){ time = 0; }
window.onclick = function(){ time = 0 ;}
window.onmousemove = function(){ time = 0;}
 
var frequency = setInterval(function(){
  time++;
  if(time > 10){ // 10 Sec time
    clearInterval(frequency);
    window.location.assign("index.html");
    alert("Logged out", time);
  }
},1000)