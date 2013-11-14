angular.module('ngseed.system').controller('HomeController', ['$scope', 'Global', function ($scope, Global) {
    $scope.name = "Crown";
    $scope.global = Global;
}]);