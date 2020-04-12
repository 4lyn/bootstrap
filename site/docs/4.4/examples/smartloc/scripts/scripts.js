/* eslint-disable no-loop-func */
/* eslint-disable brace-style */
/* eslint-disable func-style */
/* eslint-disable strict */
/* eslint-disable camelcase */


const tailleTypo = parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'))

// NAV AVEC JUMP DANS LA PAGE
const menuSticky_sousElement_items = document.querySelectorAll('.menuSticky--sousElement__item')
const menuSticky_section_items = document.querySelectorAll('.menuSticky--section__conteneurLiens_item')

const menuSticky_section_ancres = document.querySelectorAll('.menuSticky--section__ancre')
const menuSticky_sousElement_ancres = document.querySelectorAll('.menuSticky--sousElement__ancre')

const set_active = function (items, ancres)
{
  if (items.length > 0) {
    items[0].classList.add('active')
    window.addEventListener('scroll', () => {
      for (let i = 0; i < items.length; i++) {
        const ancreDecalage = -9 * tailleTypo
        const ancrePosition = ancres[i].getBoundingClientRect().top + window.scrollY + ancreDecalage
        if (window.pageYOffset > ancrePosition)
        {
          for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('active')
          }
          items[i].classList.add('active')
        }
      }
    })
  }
}

set_active(menuSticky_sousElement_items, menuSticky_sousElement_ancres)
set_active(menuSticky_section_items, menuSticky_section_ancres)

