window.addEventListener('DOMContentLoaded', (event) => {

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

}
