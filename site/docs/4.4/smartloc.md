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
        <div class="champSaisie--illustré">
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
    <div class="form-group">
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
              <a class="nav-link ml-lg-5 font-weight-bold" href="#" data-toggle="modal" data-target="#modal_contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-lg-0 mr-lg-0 pr-lg-0 font-weight-bold" href="/login" id="connexion">Mon Compte</a>
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
      <a href="#garanties" class="menuSticky--section__conteneurLiens_item js-scrollTo">Garanties & tarifs</a>
    </li>
    <li class="nav-item">
      <a href="#conditions" class="menuSticky--section__conteneurLiens_item js-scrollTo">Conditions</a>
    </li>
    <li class="nav-item">
      <a href="#status" class="menuSticky--section__conteneurLiens_item js-scrollTo">Justificatifs locataire</a>
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
          <h4><a href="#faq_garanties" class="menuSticky--sousElement__item active js-scrollTo">Les garanties</a></h4>
        </li>
        <li class="nav-item">
          <h4><a href="#faq_criteres" class="menuSticky--sousElement__item js-scrollTo">Les critères</a></h4>
        </li>
        <li class="nav-item">
          <h4><a href="#faq_dossier" class="menuSticky--sousElement__item js-scrollTo">Le dossier locataire</a></h4>
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
      <h2 class="section__sousElement_titre mt-5">Les critères de l’assurance loyer impayé</h2>
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
      <h2 class="section__sousElement_titre mt-5">Le dossier locataire pour l'assurance loyer impayé</h2>
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

### Breadcrumb d'articles

Chapeau d'un article de blog

{% capture example %}
<div class="row headerArticle__titrage mt-4 mt-lg-5">
  <div class="col-lg-8">
    <div class="headerHub__titrage_arboresence">
      <a href="">Ressources </a> > <a href=""> Gestion</a> > <a href=""> Échéances importantes</a>
    </div>
    <h1 class="headerArticle__titrage_titre">Régularisation des charges locatives : mode d’emploi</h1>
  </div>
  <div class="col-lg-4 headerArticle__titrage_articleInfos mt-4 mt-lg-0 pt-0 pt-lg-5 float-right">
    <div>
      <p>Mathieu Chantalat</p>
      <p>8 juillet 2018</p>
    </div>
    <img src="../assets/img/smartloc/photos/Image.png" alt="">
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
    <div class="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1 text-center sectionSmartlocAide__contenu">
      <h2>Ne prenez plus de risques et laissez Smartloc vous aider</h2>
      <a href="#" class="btn btn-dark">Démarrer</a>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

Bannière small en haut de page

{% capture example %}
<p class="bg-primary w-100 text-center py-1 d-none d-lg-inline-block">
  <strong>Gérez sans agence</strong> - Découvrez comment économiser 50€/mois grâce à Smartloc
  <a class="btn btn-outline-dark btn-sm ml-2" style="padding: 0.2rem 0.5rem" href="/gestion-locative">en savoir plus</a>
</p>
{% endcapture %}
{% include example.html content=example %}

## Cards & Alerts
### Cards

Cards standard

{% capture example %}
<div class="row">
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Particulier</h3>
        <h4 class="card-subtitle mb-2 text-muted">4,90€/mois (3 mois offerts)</h4>
        <p class="card-text">Abonnement trimestriel par lot, annulable à tout moment</p>
        <a href="/gestion-locative/creation" class="card-link">Démarrer</a>
        <a href="/gestion-locative" class="card-link">En savoir</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Investisseur</h3>
        <h4 class="card-subtitle mb-2 text-muted">19€/mois (1 mois offert)</h4>
        <p class="card-text">Abonnement mensuel pour 4 à 9 lots, annulable à tout moment</p>
        <a href="#" data-toggle="modal" data-target="#modalInvestisseur" class="card-link">Démarrer</a>
        <a href="/gestion-locative" class="card-link">En savoir plus</a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Gestionnaire</h3>
        <h4 class="card-subtitle mb-2 text-muted">nous contacter</h4>
        <p class="card-text">Abonnement mensuel pour +10 lots, annulable à tout moment</p>
        <a href="#" data-toggle="modal" data-target="#modalInvestisseur" class="card-link">Démarrer</a>
        <a href="/gestion-locative" class="card-link">En savoir plus</a>
      </div>
    </div>
  </div>            
</div>
{% endcapture %}
{% include example.html content=example %}

Cards cas d'usage

{% capture example %}
<div class="alert-notice alert-notice-warning">
  <img src="../assets/img/smartloc/illustrations/conversation.png" class="notice-illustration" alt="">
  <div class="notice-info">
    <h3 class="notice-title">“J'hésite pour ma déclaration fiscale en meublé entre LMNP et micro-BIC”</h3>
    <p>Lors de la déclaration de vos revenus, la question principale à se poser est la suivante : "est-ce rentable de déclarer mes charges au réel ou au forfait ?"</p>
    <p>Ces deux régimes, respectivement appelés LMNP et micro-BIC ont des implications différentes et nécessitent de bien calculer les charges réelles ou comptables que vous pouvez imputer à vos revenus locatifs.</p>
    <p>Notre équipe a rédigé une fiche complète sur le sujet du LMNP, mais dans le cadre de l'assistance nous restons également disponible pour répondre à vos questions.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Cards temoignage

{% capture example %}
<div class="row">
  <div class="col-lg-4 offset-lg-0 col-md-8 offset-md-2">
    <div class="card cardTemoignage">
      <p>“Trés pratique et réactif. Un vrai support pour toutes les démarches à faire en tant que propriétaire. 
        J'avais une question fiscale autour de ma location, j'ai obtenu la réponse en moins de 24h.”
      </p>
      <div class="cardTemoignage__conteneurInfos">
        <h6>François V. le 17/02/2020</h6>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-md-8 offset-md-2">
    <div class="card cardTemoignage">
      <p>“J'utilise ce site depuis plusieurs années pour rédiger mon baux en signature éléctronique, j'en suis ravi.”</p>
      <div class="cardTemoignage__conteneurInfos">
        <h6>François-xavier M. le 14 mars 2020</h6>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-md-8 offset-md-2">
    <div class="card cardTemoignage">
      <p>“Professionnel de l'immobilier depuis 30 ans, les outils informatiques proposés par smartloc sont d'une réelle efficacité et permettent d'être sûrs de contracter dans le respect des derniers décrets.”</p>
      <div class="cardTemoignage__conteneurInfos">
        <h6>Xavier D. le 19 janvier 2020</h6>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


Cards je te parle, à utiliser idéalement sur un container-fluid de couleur

{% capture example %}
<section class="container-fluid bg-secondary">
  <div class="alert-notice border-0">
    <div class="notice-illustration d-none d-sm-block">
      <img src="../assets/img/smartloc/photos/photo_mathieu.jpg" class="img-fluid">
    </div>
    <div class="notice-info">
      <h3 class="notice-title">Economisez 50€/mois en moyenne en gardant le contrôle de votre location</h3>
      <p>Un gestionnaire immobilier va vous facturer en moyenne 6% HT du loyer charges comprises pour encaisser le loyer et gérer les rares incidents que vous aurez pendant vos locations (les frais de recherche locataire et la garantie des loyers impayés sont facturés séparément).</p>
      <p>Pour un loyer de 700€ CC, vous économisez donc en moyenne 50€/mois en gardant le contrôle sur l'encaissement de vos loyers et en étant complètement assisté sur les échéances importantes du bail et les incidents.</p>
      <p>- Mathieu Chantalat, Directeur immobilier</p>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}


Cards article de blog

{% capture example %}
<section class="container-fluid bg-light">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <h2 class="mb-5">Derniers articles</h2>
      <div class="row">
        <div class="col-sm-6">
          <div class="card cardArticle">
            <div class="card-body">
              <div class="cardArticle__articleInfos">
                <img src="../assets/img/smartloc/photos/Image.png" alt="">
                <span>Novembre 2019</span>
              </div>
              <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur ...</h3>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum optio in magnam culpa debitis, modi quae totam nemo corrupti incidunt numquam...</p>
              <a href="#" class="card-link">Voir l'article</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card cardArticle">
            <div class="card-body">
              <div class="cardArticle__articleInfos">
                <img src="../assets/img/smartloc/photos/Image.png" alt="">
                <span>Novembre 2019</span>
              </div>
              <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur ...</h3>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum optio in magnam culpa debitis, modi quae totam nemo corrupti incidunt numquam...</p>
              <a href="#" class="card-link">Voir l'article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

Cards services avec illustrations

{% capture example %}
<div class="row">
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card cardAccompagnementExperts bail_card">
      <img class="cardAccompagnementExperts__illustration" src="../assets/img/smartloc/illustrations/notes.png" alt="">
      <h4><a href="/bail/" class="btn-link stretched-link">Bail de <br> location</a></h4>
      <img class="cardAccompagnementExperts__background" src="../assets/img/smartloc/illustrations/shapes/background_card_1.png" alt="">
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card cardAccompagnementExperts gestion_card">
      <img class="cardAccompagnementExperts__illustration" src="../assets/img/smartloc/illustrations/immeuble.png" alt="">
      <h4><a href="/gestion-locative" class="btn-link stretched-link">Gestion locative <br> en ligne</a></h4>
      <img class="cardAccompagnementExperts__background" src="../assets/img/smartloc/illustrations/shapes/background_card_2.png" alt="">
    </div>
  </div>
  <div class="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
    <div class="card cardAccompagnementExperts assurance_card">
      <img class="cardAccompagnementExperts__illustration" src="../assets/img/smartloc/illustrations/bouclier.png" alt="">
      <h4><a href="/assurance-loyer-impaye" class="btn-link stretched-link">Assurance loyer <br> impayé</a></h4>
      <img class="cardAccompagnementExperts__background" src="../assets/img/smartloc/illustrations/shapes/background_card_3.png" alt="">
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


Cards formules pricing

{% capture example %}
<div class="row">
  <div class="col-md-6 px-4 px-xl-5">
    <h3>Formules</h3>
    <div class="card cursor_pointer" data-toggle="modal" data-target="#modal_bail_simple">
      <div class="card-body">
        <h4 class="card-title">BAIL LIMITE <a href="#" class="btn btn-outline-dark btn-sm float-right">Choisir</a></h4>
        <h5 class="card-subtitle mb-2 text-muted">Modifiable pendant 3 jours</h5>
        <ul class="list-unstyled">
          <li>Bail PDF rempli et mis en forme</li>
          <li>Clauses résolutoire et solidarité</li>
          <li>Notice & Etat des lieux</li>
          <li class="grey"><s>11 Clauses importantes</s></li>
          <li class="grey"><s>14 Annexes importantes</s></li>
        </ul>
        <h4 class="mb-3">
          Gratuit
        </h4>
      </div>
    </div>
  </div>
  <div class="col-md-6 mt-4 mt-md-0 px-4 px-xl-5">
    <h3>Options</h3>
    <div class="card card_active cursor_pointer">
      <div class="card-body">
        <h4 class="card-title">GESTION EN LIGNE <a href="#" class="btn btn-outline-dark btn-sm float-right">Supprimer</a></h4>
        <h5 class="card-subtitle mb-2 text-muted">3 premiers mois offerts</h5>
        <ul class="list-unstyled">
          <li>Checklist d'entrée dans les lieux</li>
          <li>Quittances mensuelles par email</li>
          <li>Indexation du loyer automatique</li>
          <li>Echéances importantes</li>
          <li>Assistance panne & contentieux</li>
        </ul>
        <h4 style="position:relative" class="mb-3">
          <span id="prix_barre">4,90 €/mois</span> 3 mois offerts avec le bail complet
        </h4>
        <a href="#" class="card-link">En savoir plus</a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Alerts

Alerte incise de texte

{% capture example %}
<div class="alert-advice alert-advice-success">
  <img src="../assets/img/smartloc/illustrations/notes.png" class="advice-illustration" alt="">
  <div class="advice-info">
    <h3 class="advice-title">Conseil de Smartloc</h3>
    <p>En alternative au garant nous recommandons de passer par une <a href="">assurance loyer impayé</a> qui couvrira également les sinistres concernant les charges locatives et leurs éventuelles régularisations.</p>
  </div>
</div>
<br/>
<div class="alert-advice alert-advice-danger">
  <img src="../assets/img/smartloc/illustrations/bouclier.png" class="advice-illustration" alt="">
  <div class="advice-info">
    <h3 class="advice-title">Plafonnement et encadrement des loyers</h3>
    <p>En zone tendue, l'évolution des loyers est plafonnée à l'IRL, c'est à dire que vous ne pouvez pas augmenter le loyer entre deux locataires au-delà de l'évolution de l'IRL, sauf à le justifier par des travaux conséquents. Par ailleurs à Paris les valeurs absolues de loyer sont encadrées, vous pouvez dépasser le loyer de référence majorée de votre zone pour un nombre de pièces en justifiant d'un complément de loyer exceptionnel.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


Alerte sur soumission de formulaire

{% capture example %}
<div class="alert alert-danger">
  <div class="alert-heading"><i class="fal fa-times-circle icone_medium"></i> <span>Le loyer est trop élevé !</span></div>
  <p>L'assurance loyer impayé ne couvre pas les loyers mensuels au-dessus de 3100€. 
    Pour ce type de loyer vous pouvez mettre en place notre <a href="https://www.smartloc.fr/caution-bancaire-location" class="alert-link">caution bancaire</a>.
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}

## Modal
## Typographie
### Tableaux

Tableau standard

{% capture example %}
<section class="container-fluid bg-light">
  <div class="section__sousElement tableau tableau_standard bg-white">
    <div class="tableau__entete">
      <div class="tableau__entete_cellule tableau__premiereColonne mb-0">
        <h3 class="d-none d-sm-inline-block">Garantie loyer impayé (GLI)</h3>
      </div>
      <div class="tableau__entete_cellule">Basic</div>
      <div class="tableau__entete_cellule">
        <p class="text-primary position-absolute" style="top:.5rem">le + choisi</p>
        <p>Classic</p>
      </div>
      <div class="tableau__entete_cellule">Premium</div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">
        <p>Abandon du logement par le locataire </p>
        <p class="tableau__cellule_petitTexte">Remboursement des loyers jusqu'à récupération du bien</p>
      </div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">
        <p>Détériorations immobilières <a href="/blog/assurance-loyer-impaye-degradations-immobilieres-du-locataire/"><u>détails</u></a></p>
        <p class="tableau__cellule_petitTexte">Plafond de 10 000€ avec franchise du dépôt de garantie</p>
      </div>
      <div class="tableau__ligne_cellule"></div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">
        <p>Protection juridique hors impayés <a href="/blog/protection-juridique/"><u>détails</u></a> </p>
        <p class="tableau__cellule_petitTexte">Plafond de 20 000€</p>
      </div>
      <div class="tableau__ligne_cellule"></div>
      <div class="tableau__ligne_cellule"></div>
      <div class="tableau__ligne_cellule"><i class="fal fa-check-circle icone_medium"></i></div>
    </div>
    <div class="tableau__ligneSeparation"></div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">
        <p class="mb-2">Tarif de base (en % du loyer charges comprises)</p>
        <p class="tableau__cellule_petitTexte mb-2">+ frais de courtage annuel 30€ TTC</p>
        <p>DEDUCTIBLE DE VOS REVENUS FONCIERS</p>
      </div>
      <div class="tableau__ligne_cellule tableau__cellule_nombre">2,2%</div>
      <div class="tableau__ligne_cellule">
        <p class=" tableau__cellule_nombre">2,64%</p>
      </div>
      <div class="tableau__ligne_cellule tableau__cellule_nombre">2,75%</div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

Tableau compact

{% capture example %}
<section class="bg-primary container-fluid d-none d-md-block">
  <div class="section__sousElement tableau tableau_compact bg-white">
    <div class="tableau__entete">
      <div class="tableau__entete_cellule tableau__premiereColonne mb-0">
        <h3 class="mb-0">Statuts éligibles</h3>
        <p class="tableau__cellule_petitTexte">(locataires ou garants)</p>
      </div>
      <div class="tableau__entete_cellule">CDI</div>
      <div class="tableau__entete_cellule">CDD</div>
      <div class="tableau__entete_cellule">Fonctionnaire</div>
      <div class="tableau__entete_cellule">Indépendant</div>
      <div class="tableau__entete_cellule">Retraité</div>
      <div class="tableau__entete_cellule">Étudiant</div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">Critères d'éligibilité</div>
      <div class="tableau__ligne_cellule">hors période d’essai</div>
      <div class="tableau__ligne_cellule">+ 8 mois restant</div>
      <div class="tableau__ligne_cellule">titulaire</div>
      <div class="tableau__ligne_cellule">2 ans d’activité</div>
      <div class="tableau__ligne_cellule">-</div>
      <div class="tableau__ligne_cellule">avec garant éligible</div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">Revenus pris en compte</div>
      <div class="tableau__ligne_cellule">Salaire net régulier</div>
      <div class="tableau__ligne_cellule">Salaire net régulier</div>
      <div class="tableau__ligne_cellule">Salaire net régulier</div>
      <div class="tableau__ligne_cellule">Revenu imposable</div>
      <div class="tableau__ligne_cellule">Revenu imposable</div>
      <div class="tableau__ligne_cellule">Revenu des garants</div>
    </div>
    <div class="tableau__ligneSeparation"></div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">Carte d'identité ou passeport</div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
    </div>
    <div class="tableau__ligne">
      <div class="tableau__ligne_cellule tableau__premiereColonne">3 dernières quittances / attestation hébergement / taxe foncière</div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule"><i class="far fa-check-circle fa-lg"></i></div>
      <div class="tableau__ligne_cellule">Quittance des garants</div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}

### Listes

Liste en accordion

{% capture example %}
<div class="accordion" id="accordion_faq_home">
  <div class="questionDeroulante objetDeroulant">
    <div class="objetDeroulant__entete" data-toggle="collapse" data-target="#faq_contenu_1">
      <h5>Peut-on prendre chaque prestation à la carte ? <i class="fas fa-minus float-right mt-1"></i></h5>
    </div>
    <div class="objetDeroulant__contenu collapse show" id="faq_contenu_1" data-parent="#accordion_faq_home">
      <p>Oui vous pouvez prendre l'assurance sans le bail, ou la gestion en ligne sans assurance.</p>
      <p>Néanmoins pour vous permettre d'optimiser pleinement votre gestion nous vous recommandons de prendre l'ensemble des élements de votre location sur Smartloc.</p>
    </div>
  </div>
  <div class="questionDeroulante objetDeroulant">
    <div class="objetDeroulant__entete" data-toggle="collapse" data-target="#faq_contenu_2">
      <h5>Quelles sont les durées d'engagement ? <i class="fas fa-plus float-right mt-1"></i></h5>
    </div>
    <div class="objetDeroulant__contenu collapse" id="faq_contenu_2" data-parent="#accordion_faq_home">
      <p>Pour la formule Bail Zen avec gestion en ligne, l'engagement est trimestriel reconductible tacitement, vous pouvez résilier à tout moment en ligne sans motif.</p>
      <p>Pour l'assurance loyer impayé l'engagement est annuel reconductible tacitement; vous pouvez résilier et vous faire rembourser du trop perçu sur l'année en cas de départ du locataire ou du vente du logement.</p>
      <p>Les contrats d'assurance que vous souscrivez via Smartloc sont séparés de la gestion locative en ligne, ce qui vous permet de résilier l'un ou l'autre séparément (contrairement aux mandats de gestion classiques pour lesquels assurance et gestion sont couplés).</p>
    </div>
  </div>
  <div class="questionDeroulante objetDeroulant">
    <div class="objetDeroulant__entete" data-toggle="collapse" data-target="#faq_contenu_3">
      <h5>Avez-vous des formules dégressives pour plusieurs biens ? <i class="fas fa-plus float-right mt-1"></i></h5>
    </div>
    <div class="objetDeroulant__contenu collapse" id="faq_contenu_3" data-parent="#accordion_faq_home">
      <p>Oui nous proposons des formules dégressives sur le bail et la gestion en ligne. Vous avez une formule investisseur 
        entre 4 et 9 lots, une formule gestionnaire à plus de 10 lots. Ces formules sont activables sur demande.</p>
        <p>Sur les signatures électroniques et sur la garantie loyer impayé nous ne proposons pas de formule dégressive car le coût marginal du produit est le même que vous ayez un ou vingt lots; 
        par ailleurs nos tarifs sur ces produits sont déjà très négociés.</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Liste de fonctionnalites avec icones

{% capture example %}
<div class="row">
  <div class="col-lg-6">
    <div class="sectionFontionnalites__conteneurFonctionnalite">
      <img src="../assets/img/smartloc/illustrations/taches.png" alt="">
      <h5>Bail de location numérique</h5>
      <p>Vous rédigez votre bail en ligne avec toutes les clauses et annexes nécessaires. Vous pouvez signer votre bail en ligne et le modifier de manière illimitée, y compris pour faire rentrer un nouveau locataire.</p>
      <a href="/bail/">Voir un exemple de bail numérique</a>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="sectionFontionnalites__conteneurFonctionnalite">
      <img src="../assets/img/smartloc/illustrations/notes.png" alt="">
      <h5>Quittances légales</h5>
      <p>Les quittances et avis d'échéance mensuelles sont envoyées automatiquement aux locataires.</p>
      <a href="/blog/wp-content/uploads/2019/01/Quittance_76341_2019-01.pdf">Voir un exemple de quittance</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Liste d'étapes en comment ça marche

{% capture example %}
<div class="headerClassique__commentCaMarche_conteneurEtapes row">
  <div class="col-md-3 col-sm-6">
    <div class="headerClassique__commentCaMarche_etape">
      <span class="headerClassique__commentCaMarche_etape_number">1</span>
      <a href="/dossier" class="stretched-link"><h5 class="headerClassique__commentCaMarche_etape_text">Constitution d’un dossier locataire</h5></a>
    </div>
  </div>
  <div class="col-md-3 col-sm-6">
    <div class="headerClassique__commentCaMarche_etape">
      <span class="headerClassique__commentCaMarche_etape_number">2</span>
      <h5 class="headerClassique__commentCaMarche_etape_text">Devis en ligne</h5>
    </div>
  </div>
  <div class="col-md-3 col-sm-6">
    <div class="headerClassique__commentCaMarche_etape">
      <span class="headerClassique__commentCaMarche_etape_number">3</span>
      <h5 class="headerClassique__commentCaMarche_etape_text">Rédaction et signature du bail</h5>
    </div>
  </div>
  <div class="col-md-3 col-sm-6">
    <div class="headerClassique__commentCaMarche_etape">
      <span class="headerClassique__commentCaMarche_etape_number">4</span>
      <h5 class="headerClassique__commentCaMarche_etape_text">Souscription à l'assurance</h5>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Sommaire d'article de blog

{% capture example %}
<h2>Sommaire</h2>
<ul class="section__sousElement sectionArticle__sommaire liste--point encadrement--gris">
  <li><a href="#">Quelles dépenses sont récupérables auprès du locataire ?</a></li>
  <li><a href="#">Quand faire la régularisation des charges ?</a></li>
  <li><a href="#">Comment régulariser les charges ?</a>
    <ul class="liste--point">
      <li><a href="#">Comment calculer les charges à régulariser ?</a></li>
      <li><a href="#">Lettre de régularisation des charges et quittances spéciales</a></li>
      <li><a href="#">Réajustement de la provision pour charges</a></li>
    </ul>
  </li>
  <li><a href="#">Oubli de régularisation : le sort des charges locatives non récupérées</a>
    <ul class="liste--point">
      <li><a href="#">Délai de prescription de la régularisation pour charges</a></li>
      <li><a href="#">Action du locataire demandant une régularisation tardive</a></li>
    </ul>
  </li>
  <li><a href="#">Régularisation au départ du locataire : retenue sur le dépôt de garantie</a></li>
  <li><a href="#">Impayés du locataire pour charges</a>
    <ul class="liste--point">
      <li><a href="#">Attention aux régularisation de charges abusives</a></li>
      <li><a href="#">Poursuivre le locataire partant</a></li>
    </ul>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Texte

Paragraphe Landing avec titre latéral

{% capture example %}
<section class="container-fluid">
  <div class="row">
    <div class="col-lg-2 offset-lg-1">
      <h2>Cas d'usage</h2>
    </div>
    <div class="col-lg-8">
      <div class="section__sousElement">
        <p>Le bail et les échéances importantes sont donc gérés automatiquement via votre espace de gestion Smartloc; 
          vous vous demandez peut être comment sont résolus les nombreux problèmes particuliers que peuvent rencontrer nos bailleurs.
          Voici quelques cas d'usage, la liste n'est pas exhaustive.</p>
      </div>
      <div class="section__sousElement">
        <h3 class="section__sousElement_titre">Entrée des locataires</h3>
        <p>Texte</p>
      </div>
      <div class="section__sousElement">
        <h3 class="section__sousElement_titre">Incidents en cours de bail</h3>
          <p>Texte</p>
      </div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}


Paragraphe dans article

{% capture example %}
<div class="section__sousElement">
  <h2 class="section__sousElement_titre">Comment régulariser les charges ?</h2>
  <h3 class="section__sousElement_titre">Comment calculer les charges à régulariser ?</h3>
  <p>Une fois que vous avez déterminé les charges à récupérer auprès du locataire le calcul est assez simple : le montant à régulariser correspond à la différence entre les charges réelles et la provision pour charges pour la période considérée.</p>
</div>
<div class="section__sousElement">
  <h3 class="section__sousElement_titre">Lettre de régularisation des charges et quittances spéciales</h3>
  <p>En accompagnement du décompte de charges et de l’éventuelle répartition entre occupants dans un immeuble collectif, vous devez envoyer un courrier ou un mail au locataire récapitulant le montant total qu’il a payé au titre des provisions, le montant réel dû, et la différence (positive ou négative) qui va modifier la prochaine échéance de loyer.</p>
</div>
{% endcapture %}
{% include example.html content=example %}

### Images

Image d'illustration d'un service

{% capture example %}
<div class="row sectionServices__conteneurService">
  <div class="col-lg-6 pr-lg-5 d-none d-lg-block">
    <img class="sectionServices__photo" src="../assets/img/smartloc/photos/paris_small.jpg" alt="">
  </div>
  <div class="col-lg-5 offset-lg-0 col-sm-8 offset-sm-2 sectionServices__conteneurService_contenu">
    <span class="sectionServices__conteneurService_nomService">ASSURANCE LOYER IMPAYE</span>
    <h1>L'assurance loyer <br> impayé simple</h1>
    <ul class="sectionServices__conteneurService_listeFeatures">
      <li><i class="far fa-check-circle"></i><span>Durée illimité de remboursement</span></li>
      <li><i class="far fa-check-circle"></i><span>Sans franchise et sans carence</span></li>
      <li><i class="far fa-check-circle"></i><span>Options dégradations et protection juridique</span></li>
    </ul>
    <p>Notre assurance vous rembourse dès le premier mois et prend en charge l'expulsion du locataire.
      Vous pouvez souscrire à l'entrée du locataire ou en cours de bail.</p>
    <a href="/assurance-loyer-impaye">En savoir plus</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


Photos de l'équipe d'experts

{% capture example %}
<section class="sectionExpertsAide container-fluid">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Des experts disponibles pour vous aider</h1>
      <div class="sectionExpertsAide__conteneurPhotos">
        <img src="../assets/img/smartloc/photos/expert_1_min.png" alt="">
        <img src="../assets/img/smartloc/photos/expert_2.png" alt="">
        <img src="../assets/img/smartloc/photos/expert_3.png" class="d-none d-sm-block" alt="">
      </div>
      <div class="sectionExpertsAide__conteneurBoutons text-center">
        <a class="btn btn-outline-dark btn-sm" href="#" data-toggle="modal" data-target="#modal_contact"><h5>Nous contacter</h5></a>
      </div>
    </div>
  </div>
</section>
{% endcapture %}
{% include example.html content=example %}



