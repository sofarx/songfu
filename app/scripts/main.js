
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

  $('.sub-daohang')
  .visibility({type:'fixed'})

  $('.ui.secondary.menu .item')
  .click(function () {
    let id =$(this).attr('href')
    let $element =$(id)
    let position = $element.offset().top - 60

    $('body')
    .animate({
      scrollTop:position
    },500)
  })

//设置当前导航栏 未完成；
  // $('secion')
  // .visibility({
  //   observeChanges:false,
  //   once:flase,
  //   offset:120,
  //   onTopPassed:sectionHandle,
  //   onBottomPassedReverse: sectionHandle,
  // })
  // function sectionHandle() {
  //   let $currentSection=$(this)
  //   let index=$('.section').index($currentSection)
  //   let $subNavMenuItem=$('.sub-daohang .menu >.item')
  //   let $subNavMenuActiveItem= $subNavMenuItem.eq(index)
  //
  //   $subNavMenuItem
  //   .filter('.active')
  //   .removeClass('active')
  //
  //   $subNavMenuActiveItem
  //   .addClass('active')
  //
  // }

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
  .modal('attach events','.close-kefu','close')
  $('.ui.kefu-modal.modal')
      .modal('attach events','.online-kefu-body','show')
  $('.wx-qrcode.modal')
  .modal('attach events','.wxgzh','show')

  /**
  scrolltop
  **/

  $('.scrolltop')
  .click(function() {
    $('body').animate({
      scrollTop: 0}, 500);
  })
  }) ()

  /**
* scollReveal
   **/
window.sr = ScrollReveal({reset:true})
sr.reveal('.songfu-tech .header',100)
sr.reveal('.songfu-tech .description',100)
sr.reveal('.songfu-tech .image',100)
sr.reveal('.songfu-mutimedia .header',100)
sr.reveal('.songfu-mutimedia .description',100)
sr.reveal('.songfu-mutimedia .image',100)
sr.reveal('.kefu .content',100)
sr.reveal('.kefu .anniu',100)
sr.reveal('.ui.buttom',100)

sr.reveal('.about-songfu-top .img.songfu-logo',100)
sr.reveal('.about-songfu-top .header',100)
sr.reveal('.about-songfu-top .description',100)
sr.reveal('.about-songfu-top .lacapital',100)
sr.reveal('.songfu-story .bgimg',100)
sr.reveal('.songfu-story .songfu-company-name',100)
sr.reveal('.songfu-story .songfu-story-content >.content',100)
sr.reveal('.songfu-team .header',100)
sr.reveal('.songfu-team .description',100)
sr.reveal('.songfu-team .team-fuli >.item',100)
sr.reveal('.songfu-team .songfu-offce >.grid',100)
sr.reveal('.joinus .header',100)
sr.reveal('.joinus .description',100)
sr.reveal('.joinus .zhaoping',100)
sr.reveal('.songfu-office .grid >.column',100)
