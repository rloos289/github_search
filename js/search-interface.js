var search = require('./../js/search.js').TemplateSearch;


//<!-- Back End -->

$(document).ready(function(){
  $('#search').submit(function(event) {
    event.preventDefault();
    var username = $('#search_input').val();
    console.log(username);
  });
});

exports.SearchModule = Search
