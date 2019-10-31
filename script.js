function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Hair Cut',
			price: 10,
			active:true
		},{
			name: 'Beard',
			price: 7,
			active:false
		},{
			name: 'Eyebrows',
			price: 5,
			active:false
		},{
			name: 'Deluxe Package',
			price: 20,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
