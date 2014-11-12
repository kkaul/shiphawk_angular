angular
	.module('app')
	.factory('Items', ['$http', function($http){
		return {
			get: function() {
				return $http.get('./api/items.json').then(function(response) {
					return response.data;
				});
			}
		};
	}])
	.factory('openweather', function($http) {
	var runRequest = function(city) {
		return $http({
			method: 'JSONP',
			url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city + '&mode=json&units=metric&cnt=8&callback=JSON_CALLBACK'
		});
	};
	return {
		event: function(city) {
			return runRequest(city);
		}
	};
})