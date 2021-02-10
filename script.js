//Allows for modals to show

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
