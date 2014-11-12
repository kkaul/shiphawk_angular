angular
	.module('app')
	.controller('weatherCtrl', function($scope, $timeout, openweather){
	var timeout;		
	$scope.$watch('city', function(newCity) {
		if(newCity) {

			if(timeout) $timeout.cancel(timeout);
			timeout = $timeout(function() {
				openweather.event(newCity).success(function(data, status)	{	
					$scope.loc = data;
					$scope.forecast = data.list;
				});
			}, 500);
		}
	});
});