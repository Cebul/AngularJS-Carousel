var app = angular.module('app', ['ui.bootstrap']);

app.controller('myController', function($scope) {

  var slides = []; //slides array inicialization

  $scope.myInterval = 5000; //time to change for next slide in [ms], if 0 stops autoplay 

  slides = $scope.slides = [

  { id: 1, image: 'css/images/slide1.jpg' },
  { id: 2, image: 'css/images/slide2.jpg' },
  { id: 3, image: 'css/images/slide3.jpg' },
  { id: 4, image: 'css/images/slide4.jpg' },
  { id: 5, image: 'css/images/slide5.jpg' }

  ] //slides object array with id and image src

  $scope.totalItems = slides.length; //total slides number

  $scope.getActiveSlide = function () {
    return slides.filter(function (s) { return s.active; })[0].id;
  }; //function to get current active slide id

});
