var Menu = {
  init: function() {
    $('a.new-menu').on('click', this.toggleMenuForm);
  },

  toggleMenuForm: function(e) {
    e.preventDefault();
    $('form#new_menu').toggleClass('hidden');
  }
}

$(document).ready(function() {
  Menu.init();
})
