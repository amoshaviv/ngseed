angular.module('ngseed.system').controller('HomeController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);