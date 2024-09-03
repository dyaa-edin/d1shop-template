  const cards = document.querySelectorAll('.card-live-view');
  const iframes = document.querySelectorAll('iframe');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const selectedUrl = this.getAttribute('data-url');
      iframes.forEach(iframe => {
        iframe.src = selectedUrl;
      });
    });
  });
        window.addEventListener('load', function() {
        var preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
          preloader.style.display = 'none';
          document.body.style.overflow = 'auto';
          var content = document.getElementById('content');
          content.style.display = 'block';
        }, 500);
      });
