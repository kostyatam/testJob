var collectionApp = angular.module('collectionApp', ['ui.router'])
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 
	function ($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(false);
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise('/')
		$urlRouterProvider.when('/collection', '/collection/list')
	    $stateProvider
	    .state('hello', {
	        url: '/',
	        templateUrl: 'hello/_hello.html',
	        controller: 'helloCtrl'
	    })
	    .state('collection', {
	    	url: '/collection',
        	templateUrl: 'collection/_collection.html',
        	controller: 'collectionCtrl'
	    })
	    .state('collection.list', {
	    	url: '/list',
	    	templateUrl: 'collection/list/_list.html'
	    })
	    .state('collection.tiles', {
	    	url: '/tiles',
	    	templateUrl: 'collection/tiles/_tiles.html'
	    })
	    .state('collection.trello', {
	    	url: '/trello',
	    	templateUrl: 'collection/trello/_trello.html'
	    })

	}])
.run(['$rootScope', '$state', '$document', function (rootScope, state, document) {
	rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		if (fromState.name === 'collection.trello') {
			console.log('woopie')
			angular.element(document).find('body').css({'min-width':'0px'})			
		}
	})
}])
	


	