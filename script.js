document.addEventListener('DOMContentLoaded', function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header border once the page is scrolled
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Fade sections in as they scroll into view
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  // Testimonial videos: show a poster with a play button, load the player on click
  document.querySelectorAll('.video-frame').forEach(function (frame) {
    var button = frame.querySelector('.play');
    var label = frame.querySelector('.play-label');
    var src = frame.dataset.video;
    var youtube = frame.dataset.youtube;
    if (frame.dataset.poster) frame.style.backgroundImage = 'url("' + frame.dataset.poster + '")';
    if (!button) return;
    if (!src && !youtube) { button.disabled = true; return; }

    if (label) label.textContent = 'Watch the story';
    button.addEventListener('click', function () {
      var player;
      if (src) {
        player = document.createElement('video');
        player.src = src;
        player.controls = true;
        player.autoplay = true;
        player.playsInline = true;
      } else {
        player = document.createElement('iframe');
        player.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(youtube) + '?autoplay=1&rel=0';
        player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        player.allowFullscreen = true;
        player.title = 'Client testimonial video';
      }
      button.remove();
      frame.appendChild(player);
    });
  });

  // Hero "agent console": reveal lines one by one and advance the pipeline
  var consoleBody = document.getElementById('console');
  var pipeline = document.getElementById('pipeline');
  if (consoleBody && pipeline) {
    var lines = consoleBody.querySelectorAll('.console-line');
    var stages = pipeline.querySelectorAll('span');
    // Which pipeline stage each console line belongs to
    var stageForLine = [0, 0, 1, 2, 3, 3, 4, 4];

    var setStage = function (index, finished) {
      stages.forEach(function (s, i) {
        s.classList.toggle('done', i < index || (finished && i === index));
        s.classList.toggle('active', i === index && !finished);
      });
    };

    if (reduceMotion) {
      lines.forEach(function (l) { l.classList.add('show'); });
      setStage(stages.length - 1, true);
    } else {
      var run = function () {
        lines.forEach(function (l) { l.classList.remove('show'); });
        lines.forEach(function (line, i) {
          setTimeout(function () {
            line.classList.add('show');
            setStage(stageForLine[i], i === lines.length - 1);
          }, 400 + i * 900);
        });
        setTimeout(run, 400 + lines.length * 900 + 4000);
      };
      run();
    }
  }
});
