( function() {

  angular.module( 'app', [ 'ui.router' ] )
    .config( function( $stateProvider, $urlRouterProvider ) {
      $stateProvider
        .state( 'root', {
          abstract: true,
          templateUrl: 'src/common/layout/layout-view.html',
          controller: 'ApplicationController as app'
        } )
        .state( 'root.home', {
          url: '/'
        } );

      $urlRouterProvider.otherwise( '/' );
    } );


  angular.element( document ).ready( function() {
    angular.bootstrap( document, [ 'app' ] );
  } );

} )();
