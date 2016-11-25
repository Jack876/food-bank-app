'use strict';

// Setting up routes
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Root state routing
		$stateProvider.
		state('root', {
			url: '/',
			views: {
				'header': {
					templateUrl: 'modules/core/views/header.client.view.html',
					controller: 'HeaderController as headerCtrl'
				},
				'sidebar': {
					templateUrl: 'modules/core/views/sidebar.client.view.html',
					controller: 'SidebarController as sidebarCtrl'
				},
				'content': {
					templateUrl: 'modules/core/views/home.client.view.html',
					controller: 'HomeController as homeCtrl'
				},
				'footer': {
					templateUrl: 'modules/core/views/footer.client.view.html'
				}
			}
		}).

		// 403 Unauthorized
		state('root.403', {
			url: '403',
			views: {
				'content@': {
					templateUrl: 'modules/core/views/errors/403.client.view.html'
				}
			}
		}).
		// 404 Page not found
		state('root.404', {
			url: '404',
			views: {
				'content@': {
					templateUrl: 'modules/core/views/errors/404.client.view.html'
				}
			}
		}).
		// 500 Server error
		state('root.500', {
			url: '500',
			views: {
				'content@': {
					templateUrl: 'modules/core/views/errors/500.client.view.html'
				}
			}
		});

		// Redirect route from / to /signin
		$urlRouterProvider.when('', function() {
			if (__adminAccountExists)
				return 'signin';
			else
				return 'new-admin';
		});

		// Redirect to 404 page view when route not found
		$urlRouterProvider.otherwise('404');
	}
]);

/*
.run(function($rootScope, $state) {
	console.log("running this");
	console.log("state is ", $state);
	$rootScope.$on( '$stateChangeStart', function(e, toState) {
		console.log("changing to state ", toState);
		if (toState.name === "") {
			console.log("changing to state ''");
			e.preventDefault();
			if ($rootScope.tconfig)
				$state.go('root.signin');
			else
				$state.go('root.new-admin');
		}
	});	
});
*/
