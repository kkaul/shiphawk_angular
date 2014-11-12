'use strict';

// Declare app level module which depends on views, and components
angular
	.module('app', [
		'ui.router', 
		'ui.bootstrap',
		'app.directives.itemCard'
		])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('history', {
				url: '/',
				templateUrl: 'templates/history.html',
				controller: 'historyCtrl'
			})
			.state('pending', {
				url: '/pending',
				templateUrl: 'templates/pending.html',
				controller: 'pendingCtrl'
			})
			.state('weather', {
				url: '/weather',
				templateUrl: 'templates/weather.html',
				controller: 'weatherCtrl'
			})
	}])
