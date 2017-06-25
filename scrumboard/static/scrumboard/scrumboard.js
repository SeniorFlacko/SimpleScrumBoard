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
        .controller('ScrumboardController',['$scope',ScrumboardController]);

        function ScrumboardController($scope){
            $scope.add = function(list,title){
                var card = {
                    title : title
                };
                list.cards.push(card);
            };
            $scope.data = [
                {
                    name: 'Django Project',
                    cards: [
                        {
                            title: 'Create Models'
                        },
                        {
                            title: 'Create View'
                        },
                        {
                            title: 'Migrate Database'
                        },
                    ]
                },
                {
                    name: 'Angular Project',
                    cards: [
                        {
                            title: 'Create HTML'
                        },
                        {
                            title: 'Create Module'
                        },
                        {
                            title: 'Create Controller'
                        },
                    ]
                },
                {
                    name: 'CSS3 Project',
                    cards: [
                        {
                            title: 'Create Box'
                        },
                        {
                            title: 'Make Responsive'
                        },
                        {
                            title: 'Modify JS'
                        },
                    ]
                },
            ];
        }

}());