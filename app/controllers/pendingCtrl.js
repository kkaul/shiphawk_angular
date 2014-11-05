angular
	.module('app')
	.controller('pendingCtrl', ['$scope', 'Items', '$http', function($scope, Items, $http){
			$scope.title = "Pending History";
			$scope.items = Items.get().then(function(data) {
				$scope.items = data;
			});

	}]);