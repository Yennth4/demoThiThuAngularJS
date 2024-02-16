window.DetailController = function ($scope , $http , $routeParams) {

    $scope.title = "Xem chi tiết điện thoại";

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
}