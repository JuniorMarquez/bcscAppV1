angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('LoginCtrl', function($scope, $http,LoginService, MyService, $ionicPopup, $state) {
    $scope.data = {};
     $scope.data.logo='img/avatar.png';
    $scope.login = function() {
      $scope.authError = null;
 
       $http.get('http://sohigh.com.ve:1337/usergesgan/?email=' +$scope.data.email).success(function(respuesta){
         
                $scope.datos = respuesta.results[0];
                MyService.data.datos=$scope.datos;
                    MyService.data.contador=0;
              
                 if ($scope.datos.email == $scope.data.email && $scope.datos.password == $scope.data.password)
                
                    {
                      MyService.data.nombre=$scope.datos.nombre;
                      MyService.data.email=$scope.datos.email;
                      MyService.data.password=$scope.datos.password;
                      MyService.data.nivel=$scope.datos.nivel;
                      
                     //   $scope.app.nombre=MyService.data.nombre;
    
                     //   $scope.app.email=MyService.data.email;
                     //    $scope.app.nivel=MyService.data.nivel;
                     // $scope.app.password=MyService.data.password;
                      MyService.data.idUsuario=$scope.datos.id;
                      MyService.data.idEstablecimiento=$scope.datos.idEstablecimiento;
                     $scope.data.idUsuario=MyService.data.idUsuario;
                       // $scope.app.usuario=$scope.datos.email;
                     
                      $state.go('tab.dash');
                    }
                    else
                    {
                       $scope.authError = 'Email o contraseña incorrectos';
                    }
                 });
           
    };
    // $scope.login = function() {
    //     LoginService.loginUser($scope.data.email, $scope.data.password).success(function(data) {
    //         $state.go('tab.dash');
    //     }).error(function(data) {
    //         var alertPopup = $ionicPopup.alert({
    //             title: 'Error en los datos !',
    //             template: 'Por favor verifiquelos y vuelva a intentarlo!'
    //         });
    //     });
    // }
})


  



// .controller('LoginCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
//   $http.get('http://localhost:1345/userbcsc').success(function(respuesta){
//  $scope.datos = respuesta.results[0];
//   MyService.data.datos=$scope.datos;;

//   })
// }]
// )
.controller('DashCtrl', function($scope,MyService) {

$scope.idUsuario=MyService.data.idUsuario;
$scope.nombre=MyService.data.nombre;

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
