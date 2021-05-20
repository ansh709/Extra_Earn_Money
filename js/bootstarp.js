   window.addEventListener('load', function() {

      navigator.serviceWorker.register('service-worker.js', { scope: './' })
        .then(function(r) {
          console.log('registered service worker');
        })
        .catch(function(whut) {
          console.error('uh oh... ');
          console.error(whut);
        });
    });
