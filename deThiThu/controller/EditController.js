window.EditController = function ($scope , $http , $routeParams , $location) {

    $scope.title = "Chỉnh sửa điện thoại";

    const linkApi = "http://localhost:3000/phone";

    let phoneID = $routeParams.id;

    $http.get(
        `${linkApi}/${phoneID}`
    ).then(function(response){
        if (response.status == 200){
            $scope.phone = {
                id: response.data.id,
                ten: response.data.ten,
                hang: response.data.hang,
                gia: response.data.gia,
                ngay_san_xuat: new Date(response.data.ngay_san_xuat)
            }
        }
    });

    $scope.editPhone = function() {

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

            $http.put(
                `${linkApi}/${phoneID}`,
                newPhone
            ).then(function(response){
                if(response.status = 200){
                    alert("Chỉnh sửa dữ liệu mới thành công");
                    $location.path("/list-phone");
                }
            })   
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }
}