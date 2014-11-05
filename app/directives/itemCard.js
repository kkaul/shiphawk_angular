angular.module('app.directives.itemCard', [])
	.directive('itemCard', function() {
		return {
			restrict: 'E',
			scope: {
				item: '='
			},
			replace: true,
			templateUrl: "templates/itemCard.html",
			controller: function($scope) {
			}
		};
	});