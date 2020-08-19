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
## Hero & Bannieres
## Cards & Alerts
## Modal
## Typographie
### Tableaux
### Listes
### Font
### Images






