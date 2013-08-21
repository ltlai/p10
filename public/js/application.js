$(document).ready(function() {

  $('#followers').submit(function(e) {
    e.preventDefault();
    var username = $(this).serialize();
    $.ajax({
      type: this.method,
      url: this.action,
      data: username
    }).done(function(response) {
      $('#followers_list').html(response);
    })
  })

  $('#following').submit(function(e) {
    e.preventDefault();
    var username = $(this).serialize();
    $.ajax({
      type: this.method,
      url: this.action,
      data: username
    }).done(function(response) {
      $('#following_list').html(response);
    })
  })

});
