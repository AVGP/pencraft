var services = angular.module('pencraft.services', []);

services.factory("DocumentSvc", function($http) {
  return {
    getDocuments: function(email, password) {
      $http.get("https://" + email + ":" + password + "@draftin.com/api/v1/documents.json").success(function(response) {
        console.log(response);
      });
    }
  };
});