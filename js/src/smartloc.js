import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Smartloc {
  static setActive(items, ancres) {
    if (items.length > 0) {
      items[0].classList.add('active')
      window.addEventListener('scroll', () => {
        for (let i = 0; i < items.length; i++) {
          const ancreDecalage = -140
          const ancrePosition = ancres[i].getBoundingClientRect().top + window.scrollY + ancreDecalage
          if (window.pageYOffset > ancrePosition) {
            for (let j = 0; j < items.length; j++) {
              items[j].classList.remove('active')
            }
            items[i].classList.add('active')
          }
        }
      })
    }
  }
}

$(document).ready(() => {
  Smartloc.setActive(
    document.querySelectorAll('.menuSticky--sousElement__item'),
    document.querySelectorAll('.menuSticky--sousElement__ancre')
  )
  Smartloc.setActive(
    document.querySelectorAll('.menuSticky--section__conteneurLiens_item'),
    document.querySelectorAll('.menuSticky--section__ancre')
  )

  $('.objetDeroulant__contenu').on('shown.bs.collapse', function () {
    $(this).closest('.questionDeroulante').find('.fas').removeClass('fa-plus').addClass('fa-minus');
  });

  $('.objetDeroulant__contenu').on('hidden.bs.collapse', function () {
    $(this).closest('.questionDeroulante').find('.fas').removeClass('fa-minus').addClass('fa-plus');
  });

  $('.js-scrollTo').click(function(){
    $('html, body').animate( { scrollTop: $($(this).attr('href')).offset().top-30 }, 750 );
    return false;
  });
})

export default Smartloc
