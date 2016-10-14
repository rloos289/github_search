var apiKey = require('./../.env').apiKey;

function Search(){

}

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

var Api = require('./../js/search.js').getRepos;

var Search = require('./../js/search.js').SearchModule;
exports.SearchModule = Search;
