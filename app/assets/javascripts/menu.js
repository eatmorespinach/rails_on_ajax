var Menu = {
  init: function() {
    $('a.new-menu').on('click', this.toggleMenuForm);
    $('form#new_menu').on('submit', this.save);
  },

  toggleMenuForm: function(e) {
    e.preventDefault();
    $('form#new_menu').toggleClass('hidden');
  },

  save: function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      url: $form.prop('action'),
      type: $form.prop('method'),
      data: $form.serialize()
    }).done(function(menu) {
      $('.menus').append(menu);
    }).error(function(xhr) {
      $('.menus').before(xhr.responseText);
    })
  }
}

$(document).ready(function() {
  Menu.init();
})
