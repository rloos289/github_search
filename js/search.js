var apiKey = require('./../.env').apiKey;

function Search(){
}

//add function to get precisely the right amount of repos
Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=300&access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('#name').append("<div class='project'><p>" + response[i].name + "</p><div class='info' id=" + response[i].name + ">" + "<p>testing text 123</p>" + "</div></div>");

      // if (response[i].description) {
      //   $('#description').append(response[i].description + "<br>");
      // } else {
      //   $('#description').append("no description available" + "<br>");
      // }
      // //still need to format
      // $('#date').append(response[i].created_at + "<br>");
    }
  }).fail(function(error){
    alert('that is not a valid username, please try again');
  });
};

exports.SearchModule = Search;
