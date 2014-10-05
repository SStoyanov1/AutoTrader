app.factory('auth', function($q, $http, identity) {
   return {
       login: function(user) {
           var deferred = $q.defer();

           $http.post('/login', user)
               .success(function(data) {
                   if (data.success) {
                       identity.currentUser = data.user;
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
       }
   }
});