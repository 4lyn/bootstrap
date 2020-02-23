/* eslint-disable brace-style */
/* eslint-disable func-style */
/* eslint-disable strict */
/* eslint-disable camelcase */

const taille_typo_base = 16

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

// QUESTIONS DROPDOWN
const objet_deroulants = document.querySelectorAll('.objetDeroulant')
const objet_deroulant_entetes = document.querySelectorAll('.objetDeroulant__entete')
const objet_deroulants_contenu = document.querySelectorAll('.objetDeroulant__contenu')
const objet_deroulant_icones_ouvrir = document.querySelectorAll('.objetDeroulant__entete_icone--ouvrir')
const objet_deroulant_icones_fermer = document.querySelectorAll('.objetDeroulant__entete_icone--fermer')

const test = function () {
  for (let i = 0; i < objet_deroulant_entetes.length; i++)
  {
    let toggle = false

    objet_deroulant_entetes[i].addEventListener('click', () =>
    {
      const hauteurDeroulement = objet_deroulants_contenu[i].offsetHeight + objet_deroulants[i].offsetHeight
      if (toggle)
      {
        objet_deroulants[i].style.height = objet_deroulant_entetes[i].offsetHeight / taille_typo_base + 'rem'
        objet_deroulant_icones_ouvrir[i].style.display = 'block'
        objet_deroulant_icones_fermer[i].style.display = 'none'
        toggle = false
      }
      else
      {
        objet_deroulants[i].style.height = hauteurDeroulement / taille_typo_base + 'rem'
        objet_deroulant_icones_ouvrir[i].style.display = 'none'
        objet_deroulant_icones_fermer[i].style.display = 'block'
        toggle = true
      }
    })
  }
}

test()
window.onresize = test()
