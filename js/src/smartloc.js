
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

Smartloc.setActive(
  document.querySelectorAll('.menuSticky--sousElement__item'),
  document.querySelectorAll('.menuSticky--sousElement__ancre')
)
Smartloc.setActive(
  document.querySelectorAll('.menuSticky--section__conteneurLiens_item'),
  document.querySelectorAll('.menuSticky--section__ancre')
)

export default Smartloc
