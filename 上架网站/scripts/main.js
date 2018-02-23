'use strict';

(function () {
  'use strict';

  /**
   * navbar
   */

  $('.ui.navbar .search-icon > i').click(function () {
    var icon = $(this);
    if (icon.text() === 'search') {
      icon.text('close').parents('.content').addClass('searching');
    } else {
      icon.text('search').parents('.content').removeClass('searching');
    }
  });

  $('.sub-daohang').visibility({ type: 'fixed' });

  $('.ui.secondary.menu .item').click(function () {
    var id = $(this).attr('href');
    var $element = $(id);
    var position = $element.offset().top - 60;

    $('body').animate({
      scrollTop: position
    }, 500);
  });

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

  $('.ui.sidebar').sidebar('setting', 'dimPage', false).sidebar('attach events', '.ui.navbar .menu-icon').sidebar('attach events', '.ui.sidebar .close-icon');
  $('.ui.navbar .menu').clone().appendTo('.ui.sidebar');

  /**
   * slick carousel
   */
  $('.ui.slider.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true
      }
    }]

  });
  /**
  modal
  **/
  $('.ui.xcx.modal').modal('attach events', '.ui .xcx.colorful-button', 'show');
  /**
  online-kefu
  **/
  $('.ui.kefu-modal.modal').modal('attach events', '.online-kefu', 'show').modal('attach events', '.close-kefu', 'close');
  $('.ui.kefu-modal.modal').modal('attach events', '.online-kefu-body', 'show');
  $('.wx-qrcode.modal').modal('attach events', '.wxgzh', 'show');

  /**
  scrolltop
  **/

  $('.scrolltop').click(function () {
    $('body').animate({
      scrollTop: 0 }, 500);
  });
})();

/**
* scollReveal
 **/
window.sr = ScrollReveal({ reset: true });
sr.reveal('.songfu-tech .header', 100);
sr.reveal('.songfu-tech .description', 100);
sr.reveal('.songfu-tech .image', 100);
sr.reveal('.songfu-mutimedia .header', 100);
sr.reveal('.songfu-mutimedia .description', 100);
sr.reveal('.songfu-mutimedia .image', 100);
sr.reveal('.kefu .content', 100);
sr.reveal('.kefu .anniu', 100);
sr.reveal('.ui.buttom', 100);

sr.reveal('.about-songfu-top .img.songfu-logo', 100);
sr.reveal('.about-songfu-top .header', 100);
sr.reveal('.about-songfu-top .description', 100);
sr.reveal('.about-songfu-top .lacapital', 100);
sr.reveal('.songfu-story .bgimg', 100);
sr.reveal('.songfu-story .songfu-company-name', 100);
sr.reveal('.songfu-story .songfu-story-content >.content', 100);
sr.reveal('.songfu-team .header', 100);
sr.reveal('.songfu-team .description', 100);
sr.reveal('.songfu-team .team-fuli >.item', 100);
sr.reveal('.songfu-team .songfu-offce >.grid', 100);
sr.reveal('.joinus .header', 100);
sr.reveal('.joinus .description', 100);
sr.reveal('.joinus .zhaoping', 100);
sr.reveal('.songfu-office .grid >.column', 100);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaWNvbiIsInRleHQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInZpc2liaWxpdHkiLCJ0eXBlIiwiaWQiLCJhdHRyIiwiJGVsZW1lbnQiLCJwb3NpdGlvbiIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzaWRlYmFyIiwiY2xvbmUiLCJhcHBlbmRUbyIsInNsaWNrIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRvdHMiLCJtb2RhbCIsIndpbmRvdyIsInNyIiwiU2Nyb2xsUmV2ZWFsIiwicmVzZXQiLCJyZXZlYWwiXSwibWFwcGluZ3MiOiI7O0FBQ0EsQ0FBQyxZQUFXO0FBQ1Y7O0FBRUY7Ozs7QUFJRUEsSUFBRSw2QkFBRixFQUNDQyxLQURELENBQ08sWUFBWTtBQUNqQixRQUFJQyxPQUFNRixFQUFFLElBQUYsQ0FBVjtBQUNBLFFBQ0VFLEtBQUtDLElBQUwsT0FBZ0IsUUFEbEIsRUFDNEI7QUFDeEJELFdBQUtDLElBQUwsQ0FBVSxPQUFWLEVBQW1CQyxPQUFuQixDQUEyQixVQUEzQixFQUF1Q0MsUUFBdkMsQ0FBZ0QsV0FBaEQ7QUFFRCxLQUpILE1BSVM7QUFDTEgsV0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0JDLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDRSxXQUF4QyxDQUFvRCxXQUFwRDtBQUNEO0FBRUYsR0FYSDs7QUFjQU4sSUFBRSxjQUFGLEVBQ0NPLFVBREQsQ0FDWSxFQUFDQyxNQUFLLE9BQU4sRUFEWjs7QUFHQVIsSUFBRSwwQkFBRixFQUNDQyxLQURELENBQ08sWUFBWTtBQUNqQixRQUFJUSxLQUFJVCxFQUFFLElBQUYsRUFBUVUsSUFBUixDQUFhLE1BQWIsQ0FBUjtBQUNBLFFBQUlDLFdBQVVYLEVBQUVTLEVBQUYsQ0FBZDtBQUNBLFFBQUlHLFdBQVdELFNBQVNF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QyxHQUF0QztBQUNBSCxHQUFHRyxNQUFILENBQVUsZ0NBQVYsRUFBMkMsR0FBM0M7QUFDQUgsR0FBR0csTUFBSCxDQUFVLG1DQUFWLEVBQThDLEdBQTlDO0FBQ0FILEdBQUdHLE1BQUgsQ0FBVSxpQkFBVixFQUE0QixHQUE1QjtBQUNBSCxHQUFHRyxNQUFILENBQVUsc0JBQVYsRUFBaUMsR0FBakM7QUFDQUgsR0FBR0csTUFBSCxDQUFVLG1CQUFWLEVBQThCLEdBQTlCO0FBQ0FILEdBQUdHLE1BQUgsQ0FBVSwrQkFBVixFQUEwQyxHQUExQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBuYXZiYXJcbiAqL1xuXG4gICQoJy51aS5uYXZiYXIgLnNlYXJjaC1pY29uID4gaScpXG4gIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGljb24gPSQodGhpcylcbiAgICBpZiAoXG4gICAgICBpY29uLnRleHQoKSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgaWNvbi50ZXh0KCdjbG9zZScpLnBhcmVudHMoJy5jb250ZW50JykuYWRkQ2xhc3MoJ3NlYXJjaGluZycpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGljb24udGV4dCgnc2VhcmNoJykucGFyZW50cygnLmNvbnRlbnQnKS5yZW1vdmVDbGFzcygnc2VhcmNoaW5nJylcbiAgICAgIH1cblxuICAgIH1cbiAgKVxuXG4gICQoJy5zdWItZGFvaGFuZycpXG4gIC52aXNpYmlsaXR5KHt0eXBlOidmaXhlZCd9KVxuXG4gICQoJy51aS5zZWNvbmRhcnkubWVudSAuaXRlbScpXG4gIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlkID0kKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICAgIGxldCAkZWxlbWVudCA9JChpZClcbiAgICBsZXQgcG9zaXRpb24gPSAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSA2MFxuXG4gICAgJCgnYm9keScpXG4gICAgLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOnBvc2l0aW9uXG4gICAgfSw1MDApXG4gIH0pXG5cbi8v6K6+572u5b2T5YmN5a+86Iiq5qCPIOacquWujOaIkO+8m1xuICAvLyAkKCdzZWNpb24nKVxuICAvLyAudmlzaWJpbGl0eSh7XG4gIC8vICAgb2JzZXJ2ZUNoYW5nZXM6ZmFsc2UsXG4gIC8vICAgb25jZTpmbGFzZSxcbiAgLy8gICBvZmZzZXQ6MTIwLFxuICAvLyAgIG9uVG9wUGFzc2VkOnNlY3Rpb25IYW5kbGUsXG4gIC8vICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlOiBzZWN0aW9uSGFuZGxlLFxuICAvLyB9KVxuICAvLyBmdW5jdGlvbiBzZWN0aW9uSGFuZGxlKCkge1xuICAvLyAgIGxldCAkY3VycmVudFNlY3Rpb249JCh0aGlzKVxuICAvLyAgIGxldCBpbmRleD0kKCcuc2VjdGlvbicpLmluZGV4KCRjdXJyZW50U2VjdGlvbilcbiAgLy8gICBsZXQgJHN1Yk5hdk1lbnVJdGVtPSQoJy5zdWItZGFvaGFuZyAubWVudSA+Lml0ZW0nKVxuICAvLyAgIGxldCAkc3ViTmF2TWVudUFjdGl2ZUl0ZW09ICRzdWJOYXZNZW51SXRlbS5lcShpbmRleClcbiAgLy9cbiAgLy8gICAkc3ViTmF2TWVudUl0ZW1cbiAgLy8gICAuZmlsdGVyKCcuYWN0aXZlJylcbiAgLy8gICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gIC8vXG4gIC8vICAgJHN1Yk5hdk1lbnVBY3RpdmVJdGVtXG4gIC8vICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAvL1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIHNpZGViYXJcbiAgICovXG5cbiAgICQoJy51aS5zaWRlYmFyJylcbiAgICAgIC5zaWRlYmFyKCdzZXR0aW5nJywnZGltUGFnZScsZmFsc2UpXG4gICAgICAuc2lkZWJhcignYXR0YWNoIGV2ZW50cycsJy51aS5uYXZiYXIgLm1lbnUtaWNvbicpXG4gICAgICAuc2lkZWJhcignYXR0YWNoIGV2ZW50cycsJy51aS5zaWRlYmFyIC5jbG9zZS1pY29uJylcbiAgJCgnLnVpLm5hdmJhciAubWVudScpXG4gICAgLmNsb25lKClcbiAgICAuYXBwZW5kVG8oJy51aS5zaWRlYmFyJylcblxuICAgIC8qKlxuICAgICAqIHNsaWNrIGNhcm91c2VsXG4gICAgICovXG4kKCcudWkuc2xpZGVyLmNhcm91c2VsJylcbi5zbGljayh7XG4gIGF1dG9wbGF5OnRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6NTAwMCxcbiAgcmVzcG9uc2l2ZTpbXG4gICAge1xuICAgICAgYnJlYWtwb2ludDo3NjcsXG4gICAgICBzZXR0aW5nczp7XG4gICAgICAgIGRvdHM6dHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAgICAgICAgICAgXVxuXG59KVxuLyoqXG5tb2RhbFxuKiovXG4kKCcudWkueGN4Lm1vZGFsJylcbiAgLm1vZGFsKCdhdHRhY2ggZXZlbnRzJywnLnVpIC54Y3guY29sb3JmdWwtYnV0dG9uJywnc2hvdycpXG4vKipcbm9ubGluZS1rZWZ1XG4qKi9cbiQoJy51aS5rZWZ1LW1vZGFsLm1vZGFsJylcbiAgLm1vZGFsKCdhdHRhY2ggZXZlbnRzJywnLm9ubGluZS1rZWZ1Jywnc2hvdycpXG4gIC5tb2RhbCgnYXR0YWNoIGV2ZW50cycsJy5jbG9zZS1rZWZ1JywnY2xvc2UnKVxuICAkKCcudWkua2VmdS1tb2RhbC5tb2RhbCcpXG4gICAgICAubW9kYWwoJ2F0dGFjaCBldmVudHMnLCcub25saW5lLWtlZnUtYm9keScsJ3Nob3cnKVxuICAkKCcud3gtcXJjb2RlLm1vZGFsJylcbiAgLm1vZGFsKCdhdHRhY2ggZXZlbnRzJywnLnd4Z3poJywnc2hvdycpXG5cbiAgLyoqXG4gIHNjcm9sbHRvcFxuICAqKi9cblxuICAkKCcuc2Nyb2xsdG9wJylcbiAgLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogMH0sIDUwMCk7XG4gIH0pXG4gIH0pICgpXG5cbiAgLyoqXG4qIHNjb2xsUmV2ZWFsXG4gICAqKi9cbndpbmRvdy5zciA9IFNjcm9sbFJldmVhbCh7cmVzZXQ6dHJ1ZX0pXG5zci5yZXZlYWwoJy5zb25nZnUtdGVjaCAuaGVhZGVyJywxMDApXG5zci5yZXZlYWwoJy5zb25nZnUtdGVjaCAuZGVzY3JpcHRpb24nLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS10ZWNoIC5pbWFnZScsMTAwKVxuc3IucmV2ZWFsKCcuc29uZ2Z1LW11dGltZWRpYSAuaGVhZGVyJywxMDApXG5zci5yZXZlYWwoJy5zb25nZnUtbXV0aW1lZGlhIC5kZXNjcmlwdGlvbicsMTAwKVxuc3IucmV2ZWFsKCcuc29uZ2Z1LW11dGltZWRpYSAuaW1hZ2UnLDEwMClcbnNyLnJldmVhbCgnLmtlZnUgLmNvbnRlbnQnLDEwMClcbnNyLnJldmVhbCgnLmtlZnUgLmFubml1JywxMDApXG5zci5yZXZlYWwoJy51aS5idXR0b20nLDEwMClcblxuc3IucmV2ZWFsKCcuYWJvdXQtc29uZ2Z1LXRvcCAuaW1nLnNvbmdmdS1sb2dvJywxMDApXG5zci5yZXZlYWwoJy5hYm91dC1zb25nZnUtdG9wIC5oZWFkZXInLDEwMClcbnNyLnJldmVhbCgnLmFib3V0LXNvbmdmdS10b3AgLmRlc2NyaXB0aW9uJywxMDApXG5zci5yZXZlYWwoJy5hYm91dC1zb25nZnUtdG9wIC5sYWNhcGl0YWwnLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS1zdG9yeSAuYmdpbWcnLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS1zdG9yeSAuc29uZ2Z1LWNvbXBhbnktbmFtZScsMTAwKVxuc3IucmV2ZWFsKCcuc29uZ2Z1LXN0b3J5IC5zb25nZnUtc3RvcnktY29udGVudCA+LmNvbnRlbnQnLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS10ZWFtIC5oZWFkZXInLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS10ZWFtIC5kZXNjcmlwdGlvbicsMTAwKVxuc3IucmV2ZWFsKCcuc29uZ2Z1LXRlYW0gLnRlYW0tZnVsaSA+Lml0ZW0nLDEwMClcbnNyLnJldmVhbCgnLnNvbmdmdS10ZWFtIC5zb25nZnUtb2ZmY2UgPi5ncmlkJywxMDApXG5zci5yZXZlYWwoJy5qb2ludXMgLmhlYWRlcicsMTAwKVxuc3IucmV2ZWFsKCcuam9pbnVzIC5kZXNjcmlwdGlvbicsMTAwKVxuc3IucmV2ZWFsKCcuam9pbnVzIC56aGFvcGluZycsMTAwKVxuc3IucmV2ZWFsKCcuc29uZ2Z1LW9mZmljZSAuZ3JpZCA+LmNvbHVtbicsMTAwKVxuIl19
