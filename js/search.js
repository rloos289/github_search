var apiKey = require('./../.env').apiKey;

function Search(){
}

//add function to get precisely the right amount of repos
Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=300&access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      $('#name').append(response[i].name + "<br>")
      if (response[i].description) {
        $('#description').append(response[i].description + "<br>")
      } else {
        $('#description').append("no description available" + "<br>")
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.SearchModule = Search;
