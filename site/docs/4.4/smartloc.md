---
layout: docs
title: Design system
description: Ensemble des éléments utilisés sur le site
group: smartloc
redirect_from: "/smartloc/"
toc: true
---
<link rel="stylesheet" type="text/css" media="all" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css" />


## Boutons & liens

### Bouton primaire

Bouton à utiliser pour avancer sur un autre panneau ou une autre page

{% capture example %}
<button class="btn btn-dark">Générer le bail</button>
{% endcapture %}
{% include example.html content=example %}

### Bouton secondaire

Bouton à utiliser pour faire une action secondaire sur une page : sauvegarder, choisir une offre

{% capture example %}
<button class="btn btn-outline-dark">Sauvegarder</button>
{% endcapture %}
{% include example.html content=example %}

### Bouton résultat

Bouton pour mettre en avant un fichier résultat d'une action : récupération du bail, du dossier locataire, d'un devis à relire, d'un courrier mise en forme.

{% capture example %}
<button class="btn btn-primary">Votre dossier de location</button>
{% endcapture %}
{% include example.html content=example %}

### Lien simple

Lien simple vers une autre page ou un fichier

{% capture example %}
<a href="#">Liste des communes en zone tendue</a>
{% endcapture %}
{% include example.html content=example %}

### Lien annexe

Lien vers une page sans importance (cgu, avis)

{% capture example %}
<a href="#" target="_blank" class="lien_annexe">Avis clients 4,4/5</a>
{% endcapture %}
{% include example.html content=example %}

### Bouton lien

Bouton à utiliser avec une icône pour une action rapide : ajouter un locataire, supprimer un dossier, étape précédente.

{% capture example %}
<p><a href="#" class="btn-link"><i class="fas fa-exchange-alt"></i> Changer de locataire</a></p>
<p><a href="#" class="btn-link"><i class="far fa-angle-left"></i> Etape précédente</a></p>
{% endcapture %}
{% include example.html content=example %}

### Lien vers fiches ou fichiers

Lien avec icône dans une card simple, pour renvoyer vers une fiche smartloc

{% capture example %}
<div class="card cardLigne">
  <div class="card-body">
    <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
    <span><a href="/blog/fiscalite-de-location-meublee-regime-reel-en-lmnp/" class="stretched-link">Signature électronique du bail</a></span>
  </div>
</div>
<div class="card cardLigne">
  <div class="card-body">
    <i class="fal fa-file-word cardLigne__icone icone_medium"></i>
    <span><a href="#" class="stretched-link">Modèle de courrier de régularisation</a></span>
  </div>
</div>
<div class="card cardLigne">
  <div class="card-body">
    <i class="fal fa-file-pdf cardLigne__icone icone_medium"></i>
    <span><a href="#" class="stretched-link">Modèle d'état des lieux</a></span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}



## Formulaire

Formulaire dans une card

{% capture example %}
<div class="formulaire__section">
  <div class="formulaire__sousElement">
    <h3 class="formulaire__sousElement_titre">Titre d'un panneau</h3>
    <div class="form-group">
      <label>Label du champ radio</label>
      <div class="boutonsRadioViolets__conteneur">
        <label>
          <input type="radio" checked="checked" name="radio3">
          <div>Choix 1</div>
        </label>
        <label>
          <input type="radio" name="radio3">
          <div>Choix 2</div>
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-lg-6">
        <label>Label du champ texte</label>
        <div class="champSaisie--illustré ">
          <input type="text" class="form-control">
          <span>€/mois</span>
        </div>
      </div>
      <div class="form-group col-lg-6">
        <label>Label du champ select</label>
        <select class="custom-select">
          <option>4T 2019 valeur 130,26</option>
          <option>3T 2019 valeur 130,26</option>
          <option>2T 2019 valeur 130,26</option>
          <option>1T 2019 valeur 130,26</option>
        </select> 
      </div>
    </div>
    <div class="form-group mt-3">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Ceci est le label d'une checkbox</label>
      </div>
    </div>
    <div class="form-group ">
      <label class="mt-3">Label du champ select</label>
      <textarea class="form-control" rows="10" placeholder="Ce placeholder va disparaître si tu cliques" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Optionel'"></textarea>
    </div>
    <div class="form-group">
      <label class="d-block">Label du fichier</label>
      <div class="custom-file col-sm-8 col-lg-6">
        <input type="file" class="custom-file-input" id="file-input" lang="fr">
        <label class="custom-file-label" for="file-input">--</label>
      </div>
    </div>                                   
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


## Navigation
### Navbar

Navbar d'une page avec 

{% capture example %}
<header class="container-fluid">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="https://www.smartloc.fr/imgs/smartloc.png" class="logoSmartloc">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/assurance-loyer-impaye">Assurance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">Ressources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tarifs">Tarifs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-lg-5" href="/login" id="connexion"><h5>Mon compte</h5></a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-lg-0 mr-lg-0 pr-lg-0" href="#" data-toggle="modal" data-target="#modal_contact"><h5>Contact</h5></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
{% endcapture %}
{% include example.html content=example %}

### Sous-menu fixe

<p>Navbar en fixed top pour un sous-menu au milieu d'une page.</p>
<p>Les ancres doivent être bien nommées via la classe menuSticky--section__ancre plus bas.</p>
<p>La navbar est invisible en dessous de 991px (soit en en dessous de lg), pour éviter de gérer des collapses, au cas par cas il faut cacher certains items entre lg et xl).</p>

{% capture example %}
<div class="menuSticky--section">
  <ul class="nav">
    <li class="nav-item">
      <a href="#garanties" class="menuSticky--section__conteneurLiens_item">Garanties & tarifs</a>
    </li>
    <li class="nav-item">
      <a href="#conditions" class="menuSticky--section__conteneurLiens_item">Conditions</a>
    </li>
    <li class="nav-item">
      <a href="#status" class="menuSticky--section__conteneurLiens_item">Justificatifs locataire</a>
    </li>
  </ul>
  <a href="#" class="btn btn-dark btn-sm menuSticky--section__bouton" data-toggle="modal" data-target="#modalDemarrer">Démarrer</a>
</div>
<div class="container-fluid mt-5">
  <div class="menuSticky--section__ancre" id="garanties"></div>
  <div class="row">
    <div class="col-lg-12">
      <h2>Garanties & tarifs de l’assurance loyer impayé</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </div>
</div>
<div class="container-fluid">
  <div class="menuSticky--section__ancre" id="conditions"></div>
  <div class="row">
    <div class="col-lg-12">
      <h2>Conditions</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </div>
</div>
<div class="container-fluid">
  <div class="menuSticky--section__ancre" id="status"></div>
  <div class="row">
    <div class="col-lg-12">
      <h2>Justificatifs</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Hero & Bannieres
## Cards & Alerts
## Modal
## Typographie
### Tableaux
### Listes
### Font
### Images






