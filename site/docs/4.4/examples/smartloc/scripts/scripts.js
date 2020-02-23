/* eslint-disable brace-style */
/* eslint-disable func-style */
/* eslint-disable strict */
/* eslint-disable camelcase */

// MENU NOIR
const menuNoir_items = document.querySelectorAll('.menuNoir__item')

if (menuNoir_items.length > 0) {
  menuNoir_items[0].classList.add('active')
  for (let i = 0; i < menuNoir_items.length; i++) {
    menuNoir_items[i].onclick = () => {
      for (let i = 0; i < menuNoir_items.length; i++) {
        menuNoir_items[i].classList.remove('active')
      }
      menuNoir_items[i].classList.add('active')
    }
  }
}

// NAV AVEC JUMP DANS LA PAGE
const menuSticky_sousElement_items = document.querySelectorAll('.menuSticky--sousElement__item')
const menuSticky_section_items = document.querySelectorAll('.menuSticky--section__item')

const menuSticky_section_ancres = document.querySelectorAll('.menuSticky--section__ancre')
const menuSticky_sousElement_ancres = document.querySelectorAll('.menuSticky--sousElement__ancre')

const set_active = function (items, jumpers)
{
  if (items.length > 0) {
    items[0].classList.add('active')
    window.addEventListener('scroll', () => {
      for (let i = 0; i < items.length; i++) {
        const jumperPosition = jumpers[i].getBoundingClientRect().top + window.scrollY
        if (window.pageYOffset > jumperPosition - 5)
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
