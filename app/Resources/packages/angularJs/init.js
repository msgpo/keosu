var app = angular.module('keosuApp', ['angular-chrono', 'angularSpinner', 'ngSanitize', 'ngTouch', 'ngRoute','angular-inview']);

app.controller('main_Controller', function($http, $scope) {
		$http.get('data/appName.json').success( function (data) {
			$scope.appName = data.name;
		}); 
});