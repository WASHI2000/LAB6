
(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const style = document.createElement('style');

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO implement it
        answer.innerHTML="Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(function (data){
          appendData(data)
          console.log(data)
  })
        function appendData(data){
      answer.innerHTML="";
      for (var i =0; i <data.length;i++){
        var div = document.createElement("div");
        div.innerHTML= '<strong>UserID: ' + data[i].userId + '</strong> <strong>id: ' + data[i].id + '</strong> <br> <strong>title: </strong>' + data[i].title + '<br> <strong>body:</strong> '+ data[i].body + '<br><br>';
        answer.appendChild(div);
      }
        }
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
        answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(function (data){
          appendData(data);
          console.log(data)
        })
    function appendData(data){
      answer.innerHTML = "";
      var div = document.createElement("div"); div.innerHTML = '<strong>UserID: ' + data[7].userId + '</strong> <strong>id: ' + data[7].id + '</strong> <br> <strong>title: </strong>' + data[7].title + '<br> <strong>body:</strong> '+ data[7].body + '<br><br>';
      answer.appendChild(div);
    }
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
    const options = {
  method: 'post',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  body: 'UserID'
}

fetch('https://jsonplaceholder.typicode.com/posts', postMessage („Dodano nowy post o ID += {data[i].userId}).catch(err => {
  console.error('Request failed', err)
})
  })
})();


