angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
	$scope.foto = {};
	$scope.msg = '';

	if($routeParams.fotoId){
		$http.get('/v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.msg = 'Não foi possível carregar a foto';
		});
	}


	$scope.submeter = function(){
		if($routeParams.fotoId){
			$http.put('/v1/fotos/' + $routeParams.fotoId, $scope.foto)
			.success(function(){
				$scope.msg = 'Foto alterada com sucesso!';
			})
			.error(function(erro){
				consoe.log(erro);
				$scope.msg = 'Foto não pode ser alterada';
			});
		}else{
			if($scope.formulario.$valid){
				$http.post('/v1/fotos', $scope.foto)
				.success(function(){
					$scope.msg = 'Foto ' + $scope.foto.titulo + ' cadastrada com sucesso';
					$scope.foto = {};
				})
				.error(function(erro){
					console.log(erro);
					$scope.msg = 'Não foi possível cadastrar a foto';
				});
			}		
		}

	}

});