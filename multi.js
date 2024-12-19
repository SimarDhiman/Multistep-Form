var card = angular .module("multi",[])
                   .controller("step",function($scope){
					$scope.arr=[{
						name:"",
						age:"",
						gender:"",
						feedback:""
					}];
                    // $scope.questions={
					// 	question1:"Your Name?",
                    //     question2:"Hi, '$scope.arr.name', your age?",
					// 	question3:"Your thoughts about our website?"  
					// }
					$scope.isage=false;
					$scope.isfeedback=false;
					$scope.next=function(step){
						console.log("outside");
						if(step==='1'){
							console.log("inside");
                          $scope.isage=true;
						
						}
						else if(step==='2'){
							$scope.isage=false;
							$scope.isfeedback=true;
						
						}
						else{
							$scope.isage=false;
							$scope.isfeedback=false;
							$scope.arr=[{
								name:"",
								age:"",
								gender:"",
								feedback:""
							}];
						}
					}
					$scope.previous=function(step){
						if(step==='1'){
							$scope.isage=false;
							$scope.isfeedback=false;
						}
						else if(step==='2'){
							$scope.isage=true;
							$scope.isfeedback=false;
						}
					}
				   });