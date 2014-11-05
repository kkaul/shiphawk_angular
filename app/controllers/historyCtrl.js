angular
	.module('app')
	.controller('historyCtrl', ['$scope', 'Items', '$http', function($scope, Items, $http){
			$scope.title = "Shipping History";
			$scope.items = Items.get().then(function(data) {
				$scope.items = data;
			});

	}]);