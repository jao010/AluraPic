angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
	
	$scope.foto = {};

	$scope.msg = '';

	console.log($routeParams.fotoId)

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.msg = 'Não foi possível obter a foto';
		});
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function(){
					$scope.msg = 'A foto foi alterada om sucesso'
				})
				.error(function(erro){
					$scope.msg = 'Não foi possível alterar a foto'
				});
			}else{
				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.msg = 'Foto incluida com sucesso';
				})
				.error(function(){
					$scope.msg = 'Não foi possivel inclui a foto';
				});
				
			}
		}
	};
});