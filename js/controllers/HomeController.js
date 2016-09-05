app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function(){
		if(!$scope.title || $scope.title === ""){
			return;
		}
		// push suggestion post to suggestions
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0
		});
		// clear input after submit
		$scope.title = '';
	};

	$scope.upVote = function(post){
		post.upvotes += 1;
	};

	$scope.downVote = function(post){
		post.upvotes -= 1;
	};
}]);