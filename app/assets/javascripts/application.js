// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $("#login_button").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:3000/login",
      method: "GET",
    }).done(function(url) {
      $("body").append(url);
    }).fail(function() {
      console.log('mothafucka');
    });
  });
  $("#sign_up").on("click", function(event){
    event.preventDefault();
    $.ajax({
      url: "http://localhost:3000/users/new",
      method: "GET",
    })
    .done(function(cocksucker){
      $("body").append(cocksucker);
    })
    .fail(function(){
      console.log("I don't got this shit, fuckhead");
    });
  });
  $("#all_beers_bitch").on("click", function(event){
    event.preventDefault();
    $.ajax({
      url: "http://localhost:3000/beers",
      method: "GET",
    })
    .done(function(beerfest){
      $("body").append(beerfest);
    })
    .fail(function(){
      console.log("SUCK A DICK");
    });
  });
  $("#edit_yo_shit").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: ($(this).parent().attr("action")),
      method: "GET"
    })
    .done(function(form){
      $('.edit-this').append(form);
    })
    .fail(function(){
      console.log("shit");
    });
  });
});
















































