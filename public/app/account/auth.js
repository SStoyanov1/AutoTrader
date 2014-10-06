app.factory('auth', function($q, $http, identity, UsersResource) {
   return {
       signup: function(user) {
           var deferred = $q.defer();

           var user = new UsersResource(user);
           user.$save().then(function() {
               identity.currentUser = user;
               deferred.resolve();
           }, function(response) {
               deferred.reject(response);
           });

           return deferred.promise;
       },
       login: function(user) {
           var deferred = $q.defer();

           $http.post('/login', user)
               .success(function(data) {
                   if (data.success) {
                       var user = new UsersResource();
                       angular.extend(user, data.user);
                       identity.currentUser = user;
                       deferred.resolve(true);
                   }
                   else {
                       deferred.resolve(false);
                   }
               });

           return deferred.promise;
       },
       logout: function() {
           var deferred = $q.defer();

           $http.post('/logout').success(function() {
               identity.currentUser = undefined;
               deferred.resolve();
           })

           return deferred.promise;
       },
       isAuthenticated: function() {
           if (identity.isAuthenticated()) {
               return true;
           }
           else {
               return $q.reject('not authorized');
           }
       },
       isAuthorizedForRole: function(role) {
           if (identity.isAuthorizedForRole(role)) {
               return true;
           }
           else {
               return $q.reject('not authorized');
           }
       }
   }
});