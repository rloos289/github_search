var Search = require('./../js/search.js').SearchModule;
var apiKey = require('./../.env').apiKey;
var Api = require('./../js/search.js').getRepos;


//<!-- Back End -->

$(document).ready(function(){
  var search = new Search();

  $('#search').submit(function(event) {
    event.preventDefault();
    var username = $('#search_input').val();
    console.log(username);
    search.getRepos(username);
  });
  $('#api').click(function() {
    console.log(Api);
  });
});
