 function studentController($scope,$http) {
            var url = "/data.txt";

            $http.get(url).then( function(response) {
               $scope.students = response.data;
            });
         }