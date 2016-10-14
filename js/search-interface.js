var Search = require('./../js/search.js').SearchModule;
var apiKey = require('./../.env').apiKey;
var Api = require('./../js/search.js').getRepos;


//<!-- Back End -->

$(document).ready(function(){
  $('#search').submit(function(event) {
    event.preventDefault();
    var username = $('#search_input').val();
    console.log(username);
  });
  $('#api').click(function() {
    console.log(Api);
  });
});
