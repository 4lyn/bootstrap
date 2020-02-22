/* eslint-disable brace-style */
/* eslint-disable func-style */
/* eslint-disable strict */
/* eslint-disable camelcase */

// MENU NOIR
const menuNoir_items = document.querySelectorAll('.menuNoir__item')

if (menuNoir_items.length > 0) {
  menuNoir_items[0].classList.add('menuNoir__item--active')
  for (let i = 0; i < menuNoir_items.length; i++) {
    menuNoir_items[i].onclick = () => {
      for (let i = 0; i < menuNoir_items.length; i++) {
        menuNoir_items[i].classList.remove('menuNoir__item--active')
      }
      menuNoir_items[i].classList.add('menuNoir__item--active')
    }
  }
}

// NAV AVEC JUMP DANS LA PAGE
const menuSticky_sousElement_items = document.querySelectorAll('.menuSticky--sousElement__item')
const menuSticky_section_items = document.querySelectorAll('.menuSticky--section__item')

const menuSticky_section_ancres = document.querySelectorAll('.menuSticky--section__ancre')
const menuSticky_sousElement_ancres = document.querySelectorAll('.menuSticky--sousElement__ancre')

const set_active = function (items, jumpers, className)
{
  if (items.length > 0) {
    items[0].classList.add(className + '--active')
    window.addEventListener('scroll', () => {
      for (let i = 0; i < items.length; i++) {
        const jumperPosition = jumpers[i].getBoundingClientRect().top + window.scrollY
        if (window.pageYOffset > jumperPosition - 5)
        {
          for (let j = 0; j < items.length; j++) {
            items[j].classList.remove(className + '--active')
          }
          items[i].classList.add(className + '--active')
        }
      }
    })
  }
}

set_active(menuSticky_sousElement_items, menuSticky_sousElement_ancres, 'menuSticky--sousElement__item')
set_active(menuSticky_section_items, menuSticky_section_ancres, 'menuSticky--section__item')
