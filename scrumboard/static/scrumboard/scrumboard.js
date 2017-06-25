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
                    title : title
                };
                $http.post('/scrumboard/cards/',card);
                list.cards.push(card);
            };
            
            $scope.data = [];
            $http.get('/scrumboard/lists/').then(function(response){
                $scope.data = response.data;
            });
        }

}());