var input = document.getElementsByTagName('input')[0];
var output = document.getElementsByClassName('output')[0];

var makeReq = function(e) {  
  
  if (e) {
    e.preventDefault();  
  }

  var host = "http://45.55.231.22:8080";  
  
  if (validate(input.value)) {
    var url = host + input.value;

    function reqListener () {
      var json_string = JSON.stringify(JSON.parse(this.responseText), null, 4);
      output.innerHTML = json_string;
    }

    var request = new XMLHttpRequest();
    request.onload = reqListener;

    request.open("get", url, true);
    request.setRequestHeader('Content-Type', 'application/vnd.api+json');
    request.setRequestHeader('Accept', 'application/vnd.api+json');
    request.send();
  } else {
    output.innerHTML = "// Bad Request! \n Try `/`, it lists the available options!";
  }
};

var validate = function(path) {
  var result;

  var regex = /^\/(?=users|community|projects|presentation|writing)/;

  return path.match(regex) || path === "/";
};

//Immediately request /ashleygwilliams
(makeReq)();

// On click, make a new request
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', makeReq, false);
