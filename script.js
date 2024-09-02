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
        // تعيين الشفافية إلى صفر لبدء التأثير
        var preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        // إخفاء شاشة التحميل بعد الانتهاء من التأثير
        setTimeout(function() {
          preloader.style.display = 'none';
          // إعادة تفعيل التمرير بعد إخفاء شاشة التحميل
          document.body.style.overflow = 'auto';
          // إظهار المحتوى
          var content = document.getElementById('content');
          content.style.display = 'block';
        }, 500);
      });
