/**
 * Created by Kevin on 2017/2/8.
 */
var app = angular.module('EventFlow',[]);
app.controller('EventFlowControl',function($scope){
    $scope.num=4;
    $scope.events=[{text:"abc",date:2017/1/18},{text:"def",date:2017/2/18}];
    $scope.addEvent = function () {
        $scope.events.push({text:$scope.eventText,date:2017/2/8});
    }
});
