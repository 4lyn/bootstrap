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
      <label class="mt-3">Label du champ typearea</label>
      <textarea class="form-control" rows="10" placeholder="Ce placeholder va disparaître si tu cliques" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Optionel'"></textarea>
    </div>
    <div class="form-group">
      <label class="d-block">Label du fichier</label>
      <div class="custom-file col-sm-8 col-lg-6">
        <input type="file" class="custom-file-input" id="file-input" lang="fr">
        <label class="custom-file-label" for="file-input">--</label>
      </div>
    </div>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1">
      <label class="custom-control-label" for="customSwitch1">Label du switch (ne marche pas sans l'id et le for)</label>
    </div>                                  
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


## Navigation
### Navbar

Navbar d'une page landing

{% capture example %}
<header class="container-fluid">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="../assets/img/smartloc/logos/smartloc_black.png" class="logoSmartloc">
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

### Nav horizontal

<p>Navbar en fixed top pour un sous-menu d'une page longue.</p>

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
<section class="container-fluid bg-light">
  <div class="menuSticky--section__ancre" id="garanties"></div>
  <div class="row">
    <div class="col-lg-12">
      <h2>Garanties & tarifs de l’assurance loyer impayé</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

<p>Nav horizontal non fixe</p>

{% capture example %}
<ul class="nav formulaire__menuDossier">
  <li class="nav-item">
    <a class="nav-link active formulaire__menuDossier_lien" href="#">Dossier 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link formulaire__menuDossier_lien" href="#">Dossier 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link formulaire__menuDossier_lien" href="#">+ Ajouter un dossier</a>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

<p>Nav horizontal en frise</p>

{% capture example %}
<ul class="nav formulaire__menuEtapes">
  <li class="nav-item">
    <a class="nav-link active formulaire__menuEtapes_etape" data-toggle="tab" href="#tab_type">
      <i class="fas fa-list-alt"></i> <span>Type de bail</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link formulaire__menuEtapes_etape" data-toggle="tab" href="#tab_bien">
      <i class="fas fa-building"></i> <span>Bien</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link formulaire__menuEtapes_etape" data-toggle="tab" href="#tab_download">
      <i class="far fa-check-square"></i> <span>Téléchargement</span>
    </a>
  </li>                                                           
</ul>
{% endcapture %}
{% include example.html content=example %}


### Nav vertical
<p>Navs en sticky lateral pour un sous-menu d'un texte long.</p>

{% capture example %}
<div class="row">
  <div class="col-lg-2">
    <div class="menuSticky--sousElement" id="menuSticky_gli_faq">
      <h2>FAQ</h2>
      <ul class="nav flex-column">
        <li class="nav-item">
          <h4><a href="#faq_garanties" class="menuSticky--sousElement__item active">Les garanties</a></h4>
        </li>
        <li class="nav-item">
          <h4><a href="#faq_criteres" class="menuSticky--sousElement__item">Les critères</a></h4>
        </li>
        <li class="nav-item">
          <h4><a href="#faq_dossier" class="menuSticky--sousElement__item">Le dossier locataire</a></h4>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-lg-8 mt-4">
    <div class="section__sousElement">
      <div id="faq_garanties" class="menuSticky--sousElement__ancre"></div>
      <h2 class="section__sousElement_titre">Les garanties de l’assurance loyer impayé</h2>
      <h3 class="section__sousElement_titre">Que couvre la garantie loyer impayé ?</h3>
      <p>Vous êtes couvert contre les impayés de loyer qui vous sont remboursés directement.</p>
      <p>L'assureur vous remplace également dans la procédure et va donc poursuivre directement le locataire pour récupérer les impayés et
        l'expulser si nécessaire.</p>
      <p>Vous êtes également couvert sur les dégradations immobilières causées par le locataire et qui ne seraient pas remboursées
        (directement par le locataire ou en utilisant son dépôt de garantie - voir notre <a
            href="/blog/assurance-loyer-impaye-degradations-immobilieres-du-locataire/">fiche pratique sur le sujet</a>).</p>
      <p>Enfin la garantie vous couvre contre les départs "à la cloche de bois", c'est à dire les départs furtifs du locataire abandonnant son
        logement. Vous êtes alors remboursé des loyers non perçus jusqu'à la récupération effective du logement.</p>
    </div>
    <div class="section__sousElement">
      <h3 class="section__sousElement_titre">Y a-t-il une franchise ou une carence sur l'assurance loyer impayé ?</h3>
      <p>La garantie loyer impayé Insured proposée par Smartloc est <strong>sans franchise pour les impayés de loyer</strong>. Le dépôt de
        garantie du locataire que vous avez encaissé est simplement déduit du dernier remboursement qui vous est dû par la compagnie.</p>
      <p>La composante dégradations immobilières a quant à elle une <strong>franchise d'un mois</strong> de loyer hors charges. Contrairement à
        la déduction du dépôt de garantie sur les impayés de loyer, il s'agit d'une franchise réelle qui est appliquée quoiqu'il arrive. Si vous
        avez conservé le dépôt de garantie vous ne perdez rien, par contre si le dépôt de garantie a été déduit des remboursement d'éventuels
        impayés de loyer, <strong>l'assureur ne vous appliquera pas cette franchise d'un mois sur les dégradations</strong>.</p>
      <p>Pour les locataires entrants ou en place depuis moins de 14 jours il n'y a pas de carence, c'est à dire pas de période probatoire.</p>
      <p>Pour les locataires en place depuis plus de 14 jours vous avez une carence de 3 mois, c'est à dire que si un impayé intervient dans les
        3 premiers mois du contrat vous ne serez pas du tout couvert.</p>
    </div>
    <div class="section__sousElement">
      <div id="faq_criteres" class="menuSticky--sousElement__ancre"></div>
      <h2 class="section__sousElement_titre  mt-5">Les critères de l’assurance loyer impayé</h2>
      <h3 class="section__sousElement_titre">Que couvre la garantie loyer impayé ?</h3>
      <p>Les critères de solvabilité s'appliquent <strong>aux locataires entrants et aux locataires en place depuis moins de 6 mois</strong>.
      </p>
      <p>Les critères de solvabilité sont en synthèse: personnes en situation stable (CDI hors période d'essai, fonctionnaires, retraités,
        indépendants, CDD de plus de 8 mois) ayant un revenu net régulier équivalent à 2,85 fois le loyer charges comprises minimum.</p>
      <p>Pour les locataires en place depuis plus de 6 mois, il n'y pas de critères de solvabilité. Vous pouvez donc souscrire sans dossier de
        solvabilité, à la seule condition que le locataire soit à jour de ses paiements et <strong>qu'il n'y ait pas eu d'incidents de paiement
          sur les 6 derniers mois</strong>.</p>
    </div>
    <div class="section__sousElement">
      <div id="faq_dossier" class="menuSticky--sousElement__ancre"></div>
      <h2 class="section__sousElement_titre  mt-5">Le dossier locataire pour l'assurance loyer impayé</h2>
      <h3 class="section__sousElement_titre">Quelles sont les justificatifs demandés pour le dossier du locataire ?</h3>
        <p>Vous trouverez tous les documents à rassembler sur notre <a
              href="/blog/wp-content/uploads/2019/06/Critères-et-justificatifs-Insured-AZ.pdf">liste des critères et justificatifs</a>.</p>
    </div>
    <div class="section__sousElement">
      <h3 class="section__sousElement_titre">Doit-on envoyer le dossier avant souscription ?</h3>
      <p>Le dossier du locataire, le bail et ses annexes ne vous sont demandés qu'en cas d'impayés.</p>
      <p>Nous vous recommandons donc de :</p>
      <ul>
        <li>valider votre dossier locataire sur Smartloc pour être sûr de ne pas faire d'erreur. Vous pouvez le constituer facilement au lien
          suivant : <a href="/dossier">dossier locataire Smartloc</a></li>
        <li>rédiger le bail et ses annexes sur notre <a href="/bail/">module de bail numérique conforme</a></li>
        <li>utiliser notre <a href="/gestion-locative">gestion locative en ligne</a> pour être sûr de gérer l'entrée dans les lieux sans erreur
          (mais également les relances en cas d'impayés)</li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


### Nav pills
<p>Navs pills pour categoriser des fiches.</p>

{% capture example %}
<div class="row">
  <div class="col-lg-10 offset-lg-1">
    <h2 class="pb-lg-5 pb-lg-2 text-center">Les fiches et documents clés</h2>
    <div class="row">
      <div class="col-lg-8 offset-lg-2 text-center">
        <ul class="mb-5 nav nav-pills nav-justified mx-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#doc_bail" data-toggle="pill">Bail</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#doc_assurance" data-toggle="pill">Assurance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#doc_gestion" data-toggle="pill">Gestion <span class="d-none d-sm-inline-block">locative</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane active" id="doc_bail">
        <div class="row">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/modele-gratuit-dacte-de-caution-solidaire/" class="stretched-link">Modèle d'acte de caution solidaire</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/modele-type-etat-des-lieux-loi-alur/" class="stretched-link">Modèle d'état des lieux</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/bail-individuel-non-solidaire-quel-modele-utiliser-pour-louer-a-la-chambre/" class="stretched-link">Bail
                  individuel non solidaire : quel modèle utiliser en colocation ?</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/signature-en-ligne-du-bail-de-location/" class="stretched-link">Signature électronique du bail de location</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="doc_assurance">
        <div class="row">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/verification-du-dossier-de-location-les-techniques-pour-deceler-les-faux-dossiers/"
                    class="stretched-link">Vérification du dossier de location</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/assurance-loyer-impaye-dun-locataire-deja-en-place/" class="stretched-link">Assurance loyer impayé : locataire
                  déjà en place</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/assurance-loyer-impaye-dune-colocation/" class="stretched-link">Assurance loyer impayé d’une colocation</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/loyer-impaye-comment-se-deroule-la-procedure-dexpulsion/" class="stretched-link">Comment se déroule la procédure
                  d’expulsion ?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="doc_gestion">
        <div class="row">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/encadrement-des-loyers/" class="stretched-link">Encadrement des loyers 2020 : le guide complet</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/modele-gratuit-davenant-au-bail/" class="stretched-link">Avenant au bail : modèle 2020 et cas d’usage</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/indexation-du-loyer/" class="stretched-link">Indexation du loyer : définition, calcul et mode d’emploi</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3 mt-sm-0">
            <div class="card cardLigne">
              <div class="card-body">
                <i class="fal fa-file-alt cardLigne__icone icone_medium"></i>
                <a href="/blog/regularisation-des-charges-locatives-mode-demploi/" class="stretched-link">Régularisation des charges locatives :
                  mode d’emploi</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/blog/" class="mt-5 text-primary d-flex justify-content-center">Voir plus de fiches / documents clés</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Hero & Bannieres
### Hero

Hero grande taille sur landing
{% capture example %}
<section class="container-fluid bg-warning pt-0 pb-0">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="headerClassique__titrage row">
        <div class="col-md-6">
          <h1 class="headerClassique__titrage_titre">L’assurance loyer impayé simple avec dossier locataire et bail numériques.</h1>
          <span class="headerClassique__titrage_sousTitre">Loyers, dégradations et procédure d'expulsion sont pris en charge dès le premier mois d'impayé, en durée illimitée.</span>
          <div class="headerClassique__titrage_conteneurLiens">
            <a href="#" class="btn btn-dark headerClassique__titrage_bouton" data-toggle="modal" data-target="#modalDemarrer">Démarrer</a>
          </div>
        </div>
        <div class="headerClassique__titrage_conteneurIllustration col-md-6 d-none d-md-block">
          <img src="../assets/img/smartloc/illustrations/bouclier_illustrated_grisclair.png" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

Hero petite taille sur page annexe
{% capture example %}
<section class="container-fluid headerHub">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="headerHub__titrage">
        <h1 class="headerArticle__titrage_titre mt-2">Nos tarifs</h1>
        <span class="headerClassique__titrage_sousTitre">Des formules simples et transparentes</span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <a href="https://smartloc.typeform.com/to/mYYucI" class="btn btn-dark headerClassique__titrage_bouton bouton_float">Démarrer</a>
    </div>
  </div>
  <img src="../assets/img/smartloc/illustrations/immeuble.png" class="headerHub_illustration d-none d-lg-block">
</section>
{% endcapture %}
{% include example.html content=example %}


### Bannière

Banniere de CTA dans un article

{% capture example %}
<div class="section__sousElement encadrementPromotion bg-warning">
  <h3>Gérez automatiquement vos <br> quittances et avis d’échéances</h3>
  <p>Pour seulement 4,90€/mois</p>
  <a href="" class="btn btn-dark btn-sm">Gestion locative automatisée avec Smartloc</a>
  <img class="encadrementPromotion__imageBackground d-none d-sm-block" src="../assets/img/smartloc/illustrations/shapes/background_push_1.png" alt="">
  <img class="encadrementPromotion__imageBackground d-none d-sm-block" src="../assets/img/smartloc/illustrations/shapes/background_push_2.png" alt="">
</div>
{% endcapture %}
{% include example.html content=example %}

Banniere de CTA dans une landing

{% capture example %}
<section class="sectionSmartlocAide container-fluid">
  <img src="../assets/img/smartloc/illustrations/shapes/carre-jaune.png" alt="">
  <img src="../assets/img/smartloc/illustrations/shapes/couronne-noire.png" alt="">
  <img src="../assets/img/smartloc/illustrations/shapes/rond-rose.png" alt="">
  <img src="../assets/img/smartloc/illustrations/shapes/carre-vert.png" alt="">
  <div class="row">
    <div class="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1  text-center sectionSmartlocAide__contenu">
      <h2>Ne prenez plus de risques et laissez Smartloc vous aider</h2>
      <a href="#" class="btn btn-dark">Démarrer</a>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}
## Cards & Alerts
## Modal
## Typographie
### Tableaux
### Listes
### Font
### Images






