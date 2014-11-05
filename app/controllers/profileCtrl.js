angular
	.module('app')
	.controller('profileCtrl', ['$scope', 'Items', '$http', function($scope, Items, $http){
			$scope.title = "Profile";
			$scope.items = Items.get().then(function(data) {
				$scope.items = data;
			});
	}]);