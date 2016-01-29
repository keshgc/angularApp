var foodCtrl = angular.module('foodCtrl', []);

foodCtrl.controller('ListCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('js/food-list.json').success(function(data){
        $scope.foodlist = data; 
        $scope.count = 0;
       
         var total=0;
        $scope.totCount = function(){
             var total=0;
             for(i = 0; i<$scope.foodlist.length; i++){
                total+= parseInt($scope.count[i]);
                 console.log($scope.count[1]);
            }
            
        }
        
       
       
         
        
       });   
}]);


  
foodCtrl.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('js/food-list.json').success(function(data){
        $scope.foodlist = data;
        $scope.whichItem = $routeParams.itemId;
        $scope.count = 0;
       
        
        if($routeParams.itemId  > 0){
            $scope.PrevItem = Number($routeParams.itemId) - 1;
        }
        else{
            $scope.PrevItem = $scope.foodlist.length - 1;
        }
        
        if($routeParams.itemId < $scope.foodlist.length - 1){
            $scope.NextItem = Number($routeParams.itemId ) + 1;
        }
        else{
            $scope.NextItem = 0;
        }
                 
    
    });
}
    
]);