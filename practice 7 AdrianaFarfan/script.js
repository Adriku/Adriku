var app = angular.module('ProductApp', []);

app.controller('ProductController', ($scope) =>
{
    $scope.producto ={};
    $scope.productos=new Array();

    $scope.anadirProducto=()=>
    {
        $scope.productos.push({
            nombre: $scope.producto.nombre,
            precio: $scope.producto.precio,
            cantidad: $scope.producto.cantidad,
            descripcion: $scope.producto.descripcion,
        });
    }

    $scope.eliminarProducto=(i)=> 
    {
        $scope.productos.splice(i, 1);
    }
});