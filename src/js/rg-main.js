
var time = 0;
var loading;

function entrance() {
  loading = setInterval(showProgress, 10);
}

function showProgress() {
  var progress = $('#load-progress');
  var percentage = Math.min(100, Math.ceil(time / 60 * 100));
  progress.text(percentage + '%');
  time += 1;
  if (percentage === 100) {
    showPage();
  }
}

function showPage() {
  clearInterval(loading);
  $('#loader-wrap').css({ 'opacity': 0});
  setTimeout(function (){ $('#loader-wrap').remove() }, 200);
}

function adjustSize() {
  var nav = $('nav');
  var documentHeight = $(document).height();
  var tapped = $('.touch-click.hover');
  var w = tapped.innerWidth() - 50;
  var h = tapped.innerHeight() - 50;
  nav.stop().animate({
    height: documentHeight + 'px'
  }, 300);
  tapped.find('.vert').stop().animate({
    height: h + 'px'
  }, 300);
  tapped.find('.horz').stop().animate({
    width: w + 'px'
  }, 300);
  tapped.find('.item-name').stop().animate({
    marginTop: '-0.6em'
  }, 300);
  tapped.find('.desc').stop().animate({
    marginTop: '-0.1em'
  }, 300);
}


$(window).scroll(function (e) {
  var windowHeight = $(window).innerHeight();
  var documentHeight = $(document).height();
  var nav = $('nav');
  var homeButton = $('#home-button');
  if ( windowHeight < 400) {
    nav.stop().animate({
      height: documentHeight + 'px'
    }, 300);
    if ($(window).scrollTop() > 10 ) {
      homeButton.addClass('sticky-pig');
    } else {
      homeButton.removeClass('sticky-pig');
    }
  }
});

$(window).resize(function(e) {
  adjustSize();
});


$(document).keypress(function(e) {
  if(e.which == 13) {
    $('input').blur(); // blur any input fields
  }
});

$('html').click(function (e) {
  if (!e.target.classList.contains('touch-click')) {
    var all = $('.touch-click.hover'); // Make sure only those items hovered are affected 
    $(all).removeClass('hover');
    $(all).parent().find('.blog').css({'border': '1px solid #eee'});
    $(all).find('.item').css({'border': '1px solid rgba(0, 0, 0, 0.05)'});
    $(all).find('.title').stop().animate({
      marginTop: '0.2em',
      marginBottom: '-0.2em'
    }, 100);
    $(all).find('.excerpt').stop().animate({
      marginTop: '1em',
      marginBottom: '-1em',
      opacity: 0
    }, 100);
    $(all).find('.vert').stop().animate({
      height: '0'
    }, 300);
    $(all).find('.horz').stop().animate({
      width: '0'
    }, 300);
    $(all).find('.item-name').stop().animate({
      marginTop: '1.6em'
    }, 300);
    $(all).find('.desc').stop().animate({
      opacity: 0,
      marginTop: '2em'
    }, 300);
    e.stopPropagation();
  }
});

