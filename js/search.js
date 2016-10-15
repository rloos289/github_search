var apiKey = require('./../.env').apiKey;

function Search(){
}

//add function to get precisely the right amount of repos
Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=300&access_token=' + apiKey).then(function(response){
    console.log(response);
    var descriptions = [];
    var dates = [];
    for (var i = 0; i < response.length; i++) {
      //handles descriptions
      if (response[i].description) {
        descriptions.push(response[i].description);
      } else {
        descriptions.push("no description available");
      }
      //handles dates
      dates.push(moment(response[i].created_at).format('MM/DD/YYYY'));
// 2016-10-14T23:31:14Z
      $('#name').append(
        "<div class='project'><p>" + response[i].name + "</p><div class='info' style='display:none' id=" + response[i].name + ">" +
        "<p>Description: " + descriptions[i] + "</p>" +
        "<p>Date created: " + dates[i] + "</p>" +
      "</div></div>");
    }
  }).fail(function(error){
    alert('that is not a valid username, please try again');
  });
};

exports.SearchModule = Search;
