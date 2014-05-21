function AddDocCtrl($scope) {
  $scope.create = function() {
    alert($scope.name);
  }
}

function SettingsCtrl($scope) {
  $scope.installed = false;
  $scope.installable = !!(window.navigator.mozApps);
  if(window.navigator.mozApps) {
    var request = window.navigator.mozApps.getSelf();
    request.onsuccess = function() {
      if (request.result) {
        $scope.$apply(function() {
          $scope.installed = true; // already installed
        });
      } else {
        $scope.$apply(function() {
          $scope.installed = false;  // not installed yet
        });
      }
    }
  }
  
  $scope.install = function() {
    if(!window.navigator.mozApps) {
      alert("Whoops, your platform does not support app installation from the web!");
      return;
    }
    var install = window.navigator.mozApps.install('http://avgp.github.io/pencraft/manifest.webapp');
    install.onerror = function() {
      alert("Installation has failed: " + this.error.name);
    }
    install.onsuccess = function() {
      alert("Successfully installed!");
      $scope.$apply(function() {
        $scope.installed = true;
      })
    }
  }
}