/* 
IIFE immediately-invoked function expression
For testing:
    Model = JS variable
    View = Template of Django
    Controller = JS function   
*/
(function(){
    'user strict';
    angular.module('scrumboard.demo',[])
        .controller('ScrumboardController',['$scope','$http',ScrumboardController]);

        function ScrumboardController($scope,$http){
            $scope.add = function(list,title){
                var card = {
                    list : list.id,
                    title : title
                };
                $http.post('/scrumboard/cards/',card)
                    .then(function(response){
                       list.cards.push(response.data);
                    },
                    function(){
                        alert('Could not create card');
                    });
            };
            
            $scope.data = [];
            $http.get('/scrumboard/lists/').then(
                function(response){
                    $scope.data = response.data;
            });
        }

}());