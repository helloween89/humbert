angular.module('demopage', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

// ModalController
angular.module('demopage').controller('ModalCtrl', ModalCtrl);
ModalCtrl.$inject = ['$scope', '$uibModal', '$log'];
function ModalCtrl($scope, $uibModal, $log) {

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl', 
            size: size,
            resolve: {
                errormessage: function () {
                    console.log('Contact Us is not available in this moment');
                    return "modal opening failed";
                }
            }
        });

    };
}

//Buttons of Modal Events
angular.module('demopage').controller('ModalInstanceCtrl', ModalInstanceCtrl);
ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
function ModalInstanceCtrl($scope, $uibModalInstance) {

    $scope.item = "I'm your item";

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//Controller used to insert the carousel
angular.module('demopage').controller('Carousel',CarouselCtrl); 
CarouselCtrl.$inject = ['$scope', '$window'];
function CarouselCtrl ($scope, $window) {
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var index = 0;

  //Function used to insert the images 
  $scope.addSlide = function () {
        var img = "grandcanyon.jpg";
        var img2 = "grandcanyon2.jpg";
        var img3 = "grandcanyon3.jpg";
        slides.push({
            image: img,
            text: 'GrandCanyon 1',
            id: index++
        }, 
        {
            image: img2,
            text: 'GrandCanyon 2',
            id: index++
        },
        {
            image: img3,
            text: 'GrandCanyon 3',
            id: index++
        },
    );
  };


  $scope.addSlide();

  //Function used to redirect using the id of the seleted image of the caorusel
  $scope.redirect = function (id) {
      if(id == 0) {
          $window.location.href = 'http://www.google.com';
      }
      else if (id == 1) {
          $window.location.href = 'http://www.yahoo.com';
      }else if(id == 2){
          $window.location.href = 'http://www.bing.com';
      }
  }

}