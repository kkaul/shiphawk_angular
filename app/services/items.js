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