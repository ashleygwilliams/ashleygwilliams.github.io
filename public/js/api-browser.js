var input = document.getElementsByTagName('input')[0];

var makeReq = function() {  
  
  var host = "http://45.55.231.22/:8080";  

  url = host + input.value;

  var output = document.getElementsByTagName('textarea')[0];
  function reqListener () {
    output.innerHTML = this.responseText;
  }

  var request = new XMLHttpRequest();
  request.onload = reqListener;

  console.log(url);

  request.open("get", url, true);
  request.setRequestHeader('Content-Type', 'application/vnd.api+json');
  request.setRequestHeader('Accept', 'application/vnd.api+json');
  window.req= request;
  request.send();
};

//Immediately request /ashleygwilliams
(makeReq)();

// On click, make a new request
var button = document.getElementsByClassName('button')[0];
button.addEventListener('click', makeReq);
