window.addEventListener('DOMContentLoaded', (event) => {

  //Enabling tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  //Allows for modals to show
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  //Enables scrollspy
  $('body').scrollspy({ target: '#navbar-example' })

  //Collapsible
  $('#myCollapsible').collapse({
    toggle: false
  })

  $('.collapse').collapse()

  //Adding Offset
  let offset = 180;

  $('.navbar li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -offset);
  });

  //Scrollbar issue
  // calculate width of scrollbar and add it as inline-style to the body
  var checkScrollBars = function() {
      var b = $('body');
      var normalw = 0;
      var scrollw = 0;
      normalw = window.innerWidth;
      scrollw = normalw - b.width();

      var plusScrollBar = 'calc(' + '100% + ' + scrollw + 'px)'
      document.querySelector('body').style.minWidth = plusScrollBar;
  }();

}
