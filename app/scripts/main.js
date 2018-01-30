
(function() {
  'use strict';

/**
 * navbar
 */

  $('.ui.navbar .search-icon > i')
  .click(function () {
    let icon =$(this)
    if (
      icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')

      } else {
        icon.text('search').parents('.content').removeClass('searching')
      }

    }
  )

  /**
   * sidebar
   */

   $('.ui.sidebar')
      .sidebar('setting','dimPage',false)
      .sidebar('attach events','.ui.navbar .menu-icon')
      .sidebar('attach events','.ui.sidebar .close-icon')
  $('.ui.navbar .menu')
    .clone()
    .appendTo('.ui.sidebar')

    /**
     * slick carousel
     */
$('.ui.slider.carousel')
.slick({
  autoplay:true,
  autoplaySpeed:5000,
  responsive:[
    {
      breakpoint:767,
      settings:{
        dots:true
      }
    }
              ]

})
/**
modal
**/
$('.ui.xcx.modal')
  .modal('attach events','.ui .xcx.colorful-button','show')
/**
online-kefu
**/
$('.ui.kefu-modal.modal')
  .modal('attach events','.online-kefu','show')


  /**
  scrolltop
  **/

  $('.scrolltop')
  .click(function() {
    $('body').animate({
      scrollTop: 0}, 500);
  })
  }) ()
