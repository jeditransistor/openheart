var socket = io();
socket.on('heartbeat', function(msg){
      document.getElementById("heart").className = "fa fa-heart fa-stack-1x fa-inverse";
      setTimeout(function(){ document.getElementById("heart").className = " "; }, 100);
});
