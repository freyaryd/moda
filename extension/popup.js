

document.addEventListener('DOMContentLoaded', function() {
    var findButton = document.getElementById('findButton');
    findButton.addEventListener('click', function() {
      sendApiRequestRandom()
    });
  });

function addRandom(json) {
    var msg = document.getElementById('msg');
    let url = json.message
    msg.innerHTML = `<img src="${url}" alt="random dog pic"/>`
}

//gets json w random dog pic 
function sendApiRequestRandom() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            addRandom(json)
        })
}