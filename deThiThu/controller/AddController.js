window.AddController = function ($scope , $http , $location) {

    $scope.title = "Thêm điện thoại";

    $scope.addPhone = function() {
        const linkApi = "http://localhost:3000/phone";

        $scope.kiemTra = {
            id: false,
            ten: false,
            hang: false,
            gia: false,
            ngay_san_xuat: false,
            giaMin: false
        }

        let check = true;
        if (!$scope.phone || !$scope.phone.ten){
            check = false;
            $scope.kiemTra.ten = true;
        }
        if (!$scope.phone || !$scope.phone.hang){
            check = false;
            $scope.kiemTra.hang = true;
        }
        if (!$scope.phone || !$scope.phone.gia){
            check = false;
            $scope.kiemTra.gia = true;
        }
        if (!isNaN($scope.phone.gia) && parseInt($scope.phone.gia) <= 100){
            check = false;
            $scope.kiemTra.giaMin = true;
        }
        if (!$scope.phone || !$scope.phone.ngay_san_xuat){
            check = false;
            $scope.kiemTra.ngay_san_xuat = true;
        }
        
        if (check) {
            let newPhone = {
                id: $scope.phone.id,
                ten: $scope.phone.ten,
                hang: $scope.phone.hang,
                gia: $scope.phone.gia,
                ngay_san_xuat: $scope.phone.ngay_san_xuat
            }

            $http.post(
                linkApi,
                newPhone
            ).then(function(response){
                if(response.status = 201){
                    alert("Thêm dữ liệu mới thành công");
                    $location.path("/list-phone");
                }
            })   
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }
}