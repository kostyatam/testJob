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