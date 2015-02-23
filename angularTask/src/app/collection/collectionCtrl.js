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