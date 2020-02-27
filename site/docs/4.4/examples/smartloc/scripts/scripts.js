/* eslint-disable no-loop-func */
/* eslint-disable brace-style */
/* eslint-disable func-style */
/* eslint-disable strict */
/* eslint-disable camelcase */


const tailleTypo = parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'))

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

// OBJETS DEROULANTS
const objet_deroulants = document.querySelectorAll('.objetDeroulant')
const objet_deroulant_entetes = document.querySelectorAll('.objetDeroulant__entete')
const objet_deroulants_contenu = document.querySelectorAll('.objetDeroulant__contenu')
const objet_deroulant_icones_ouvrir = document.querySelectorAll('.objetDeroulant__entete_icone--ouvrir')
const objet_deroulant_icones_fermer = document.querySelectorAll('.objetDeroulant__entete_icone--fermer')

if (objet_deroulants.length > 0) {
  for (let i = 0; i < objet_deroulant_entetes.length; i++)
  {
    let toggle = false
    const hauteurDeroulement = objet_deroulants_contenu[i].offsetHeight + objet_deroulants[i].offsetHeight
    const hauteurObjet = objet_deroulant_entetes[i].offsetHeight
    objet_deroulant_entetes[i].addEventListener('click', () =>
    {
      if (toggle)
      {
        objet_deroulants[i].style.height = hauteurObjet / tailleTypo + 'rem'
        objet_deroulant_icones_ouvrir[i].style.display = 'block'
        objet_deroulant_icones_fermer[i].style.display = 'none'
        toggle = false
      }
      else
      {
        objet_deroulants[i].style.height = hauteurDeroulement / tailleTypo + 'rem'
        objet_deroulant_icones_ouvrir[i].style.display = 'none'
        objet_deroulant_icones_fermer[i].style.display = 'block'
        toggle = true
      }
    })
  }
}

