var app = angular.module('myApp', ['firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .when("/month", {templateUrl: "partials/month.html", controller: "MonthCtrl"})
    .when("/nearby", {templateUrl: "partials/nearby.html", controller: "NearbyCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "ErrCtrl"});
}]);