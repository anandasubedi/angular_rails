angular.module('AngularRails')
    .controller('HomeCtrl', function ($scope) {
    	console.log("at home");
        $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
    });