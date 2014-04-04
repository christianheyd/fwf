function myController($scope){
    $scope.itemInput;

    $scope.itemArray = ['Click X to delete'];

    $scope.addItem = function(){

        $scope.itemArray.push($scope.itemInput);

        $scope.itemInput = "";
    };

    $scope.delItem = function(deletedItem){
        var index = $scope.itemArray.indexOf(deletedItem);
        $scope.itemArray.splice(index, 1);
    };
}