var app = angular.module("mainSection", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "blank.html"
    })
    .when("/services", {
        templateUrl : "services.html"
    })
    .when("/weddings", {
        templateUrl : "weddings.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
    .when("/directions", {
        templateUrl : "directions.html"
    })
    .when("/hours", {
        templateUrl : "hours.html"
    })
    .when("/staff", {
        templateUrl : "staff.html"
    });
});