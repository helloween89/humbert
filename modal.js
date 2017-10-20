angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

// YOUR CONTROLLER
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', CarouselDemoCtrl);
CarouselDemoCtrl.$inject = ['$scope', '$uibModal', '$log'];
function CarouselDemoCtrl($scope, $uibModal, $log) {

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',  // The modal controller name ('ModalInstanceCtrl')
            size: size,
            resolve: {
                errormessage: function () {
                    console.log('lllllllllllll')
                    return "Some error occured";
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}

// REGISTER THE MODAL CONTROLLER HERE
angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', ModalInstanceCtrl);
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