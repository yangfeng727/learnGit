var myApp=angular.module('myApp',[])

    .directive('myTest1',function(){
       return {
       	  restrict:'A',
       	  template:'<h1>hello angular自定义指令</h1>',
       	  replace:true,
       	  controller:function(){
       	  	this.name='myTest1'
       	  }
       }
    })

    .directive('myTest2',function(){
       return {
       	  restrict:'A',
       	  templateUrl:'./template/a.html',
       	  replace:true,
       	  require:'?myTest1',
       	  // controllerAs: 'myController',
          controller: function($scope) {
		   // $scope.ngData = [{
		   //  	name:'a',
		   //  	address:'aaa'
		   //  },{
		   //  	name:'b',
		   //  	address:'bbb'
		   //  }];
            },
            link:function(scope,element,attrs,myTest1){
console.log(myTest1.name,2222)
            }
       }
    })

    .controller('firstController',['$scope',function ($scope) {

    // $scope.ngData = [{
    // 	name:'a',
    // 	address:'aaa'
    // },{
    // 	name:'b',
    // 	address:'bbb'
    // }];
}]);
