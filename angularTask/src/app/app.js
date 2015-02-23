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
	


	
collectionApp
.controller('collectionCtrl',['$scope', '$http', '$state',function ($scope, $http, $state) {

	$http.get('/api/collection').then(function (res) {
		$scope.collection = res.data.collection
		$scope.groupsList =res.data.groups
	})
	$scope.states = [{
		state: 'collection.list',
		label: 'Список'
	},
	{
		state: 'collection.tiles',
		label: 'Плитки'
	},
	{
		state: 'collection.trello',
		label: 'Группа плиток'
	},]
	$scope.changeState = function (state) {
		$state.go(state.state)
	}
	var findCurrentState = function (state) {
		for (var i = $scope.states.length - 1; i >= 0; i--) {
			if ($scope.states[i].state === state) {
				console.log(state)
				return $scope.states[i]
			}
		}
		return false
	}
	$scope.state = findCurrentState($state.current.name) || $scope.states[0]
}])
collectionApp
.controller('helloCtrl',['$scope',function ($scope) {
	
}])
collectionApp
.directive('tilesHolder', ['$document', function ($document) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var body = angular.element(document).find('body'),
				bodyWidth = (body.css('min-width'))? parseInt(body.css('min-width')) : 0
			body.css('min-width', bodyWidth + 350 +'px')
		}
	}
}])
collectionApp
.directive('tileHolder', ['$document', function ($document) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var body = angular.element(document).find('body'),
				bodyWidth = (parseInt(body.css('min-width')))? parseInt(body.css('min-width')) : 0
			body.css('min-width', bodyWidth + 350 +'px')
		}
	}
}])