angular.module('alurapic').controller('FotosController', function($scope, $http){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.msg = '';

	$http.get('/v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		alert(erro);
	});

	$scope.remover = function(foto){
		console.log('remover foto:');
        console.log(foto);
		$http.delete('/v1/fotos/' + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.msg = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
		})
		.error(function(erro){
			console.log(erro);
			$scope.msg = 'a foto nao pode ser removida.';
		});
	}

});