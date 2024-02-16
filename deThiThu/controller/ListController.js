window.ListController = function($scope , $http) {
    $scope.title = "Danh sách điện thoại";

    const linkApi = "http://localhost:3000/phone";

    // lay thong tin trong api
    $http.get(linkApi).then(function(response){
        if (response.status == 200) {
            $scope.listPhone = response.data;
        }
    });

    $scope.deletePhone = function(id) {
        let confirm = window.confirm("Bạn có muốn xóa " + id + " hay không ?"); 
        if(confirm){
            // thuc hien xoa 
            $http.delete(
                `${linkApi}/${id}`
            ).then(function(response){
                alert("Xóa thành công id " + id);
            });
        }
    }
}