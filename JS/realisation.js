function textwriter() {
    const contentDiv = document.querySelector('.typing_effect');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = 'CETTE PAGE, VOUS PRÉSENTERA MES <span class="mot_page_typing">RÉALISATIONS</span>';
}

setTimeout(() => {
    textwriter()
}, 500);



function affiche_detail(arg) {

    const noscroll = document.querySelector('html');
    noscroll.style.overflow = 'hidden';


    
    
    

    let titre_projet_detail = document.querySelector('.titre_projet_detail');
    let liste_informations = document.querySelector('.detail_projet .informations .liste');
    let liste_competences = document.querySelector('.detail_projet .competences .liste');
    let telechargement = document.querySelector('.projet_details_hide .file');

    let image_detail = document.querySelector('.img_paragraphe_detail .image');
    let image_detail2 = document.querySelector('.img_paragraphe_detail .image2');
    let image_detail3 = document.querySelector('.img_paragraphe_detail .image3');
    let image_detail4 = document.querySelector('.img_paragraphe_detail .image4');
    let image_detail5 = document.querySelector('.img_paragraphe_detail .image5');
    let image_detail6 = document.querySelector('.img_paragraphe_detail .image6');
    let image_detail7 = document.querySelector('.img_paragraphe_detail .image7');
    let image_detail8 = document.querySelector('.img_paragraphe_detail .image8');

    let titre_detail = document.querySelector('.img_paragraphe_detail .titre');
    let titre_detail2 = document.querySelector('.img_paragraphe_detail .titre2');
    let titre_detail3 = document.querySelector('.img_paragraphe_detail .titre3');
    let titre_detail4 = document.querySelector('.img_paragraphe_detail .titre4');
    let titre_detail5 = document.querySelector('.img_paragraphe_detail .titre5');
    let titre_detail6 = document.querySelector('.img_paragraphe_detail .titre6');
    let titre_detail7 = document.querySelector('.img_paragraphe_detail .titre7');
    let titre_detail8 = document.querySelector('.img_paragraphe_detail .titre8');

    let paragraphe_detail = document.querySelector('.img_paragraphe_detail .paragraphe');
    let paragraphe_detail2 = document.querySelector('.img_paragraphe_detail .paragraphe2');
    let paragraphe_detail3 = document.querySelector('.img_paragraphe_detail .paragraphe3');
    let paragraphe_detail4 = document.querySelector('.img_paragraphe_detail .paragraphe4');
    let paragraphe_detail5 = document.querySelector('.img_paragraphe_detail .paragraphe5');
    let paragraphe_detail6 = document.querySelector('.img_paragraphe_detail .paragraphe6');
    let paragraphe_detail7 = document.querySelector('.img_paragraphe_detail .paragraphe7');
    let paragraphe_detail8 = document.querySelector('.img_paragraphe_detail .paragraphe8');



    if (arg === 'projet_sokoban') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Sokoban`

        liste_informations.innerHTML = `<li><i class="fa-solid fa-person"></i> Projet fait <span class="mot_speciaux">seul</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">2 mois</span>(en cours)</li>
        <li><i><a class="fa-brands fa-github" href="https://github.com/Pierre095" target="_blank"></a></i> Projet stocké sur<a class="lien_button" target="blank" href="https://github.com/Pierre095"> git hub</a></li>
        <li><i class="fa-solid fa-globe"></i> Destiné à tout type d'<span class="mot_speciaux">utilisateur</span></li>`
        
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Approfondissement en<span class="mot_speciaux"> JavaScript</span></li>`

        image_detail.src = `IMG/realisation/sokoban/PJ.gif`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `
        Le projet Sokoban est un jeu de puzzle où le joueur doit pousser des blocs vers des emplacements cibles sur un plateau de jeu. Le jeu se caractérise par sa simplicité de 
        conception mais offre un défi de réflexion profond. Le joueur contrôle un personnage dans un labyrinthe composé de murs, de blocs (ou caisses) et de destinations spécifiques
        où les blocs doivent être placés. L'objectif est d'atteindre l'arrivé sans dépassé le nombre de coup autorisé'. Sokoban met l'accent 
        sur la planification stratégique et la résolution de problèmes spatiaux, chaque niveau étant un puzzle statique avec une solution spécifique.`
        image_detail2.src = `IMG/realisation/sokoban/jeu.png`
        titre_detail2.innerHTML = `Présentation d'un niveau`
        paragraphe_detail2.innerHTML = `Dans ce premier niveau nous pouvons des blocs des squelettes et le diamant qui symbolise l'arrivé. chaque élément a une spécificité,
        par exemple les blocs ne peuvent pas être déplacé si un autre élément est derrière`
        image_detail3.src = `IMG/realisation/sokoban/generation_map.png`
        titre_detail3.innerHTML = `Generation de la map`
        paragraphe_detail3.innerHTML = `Ici chaques numéro représente un élément particulier, par exmple le 3 représente le personnage, et le 6 le diamant. Avec cette méthode 
        la création de map devient beaucoup plus simple`
        
        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = `<a class="button" target="blink" href="index_jeu.html">Jouer a Sokoban</a>`
    }

    if (arg === 'projet_nozama') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `NOZAMA`


        liste_informations.innerHTML = `<li><i class="fa-solid fa-user-group"></i> Projet fait à <span class="mot_speciaux">2</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">2 mois</span></li>
        <li><i><a class="fa-brands fa-gitlab" href="https://gitlab.com/Pierre-BOUFFIES" target="_blank"></a></i> Projet stocké sur <a class="lien_button" href="https://gitlab.com/Pierre-BOUFFIES">git lab</a></li>
        <li><i class="fa-solid fa-warehouse"></i> Destiné à des <span class="mot_speciaux">entreprise de transport de colis</span></li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> <span class="mot_speciaux">Autonomie</span></li>`

        image_detail.src = `IMG/realisation/nozama/logo_nozama_sans_fond_noir.png`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `Le projet Nozama, est une application métier permettant de gérer les colis des clients(buisness) pour qu'ils ne soient pas perdu,
        et/ou gerer les imprévus tel que des pertes, des vols, ou pour tout autres problèmes.`
        
        image_detail2.src = `IMG/realisation/nozama/cahier_des_charges.png`
        titre_detail2.innerHTML = `Cahier des charges`
        paragraphe_detail2.innerHTML = `Voici le cahier des charges de notre projet, c'est ce document qui va nous guider afin de réaliser le design de l'application 
        et la structure au niveau de la base de donnée et les liens entres chaques éléments`

        image_detail3.src = `IMG/realisation/nozama/cahier_technique.png`
        titre_detail3.innerHTML = `Cahier Technique`
        paragraphe_detail3.innerHTML = ``



        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }






    if (arg === 'projet_RTC') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Rugby Tropical Cup`

        liste_informations.innerHTML = `<li><i class="fa-solid fa-person"></i> Projet fait<span class="mot_speciaux"> seul</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">1 mois</span></li>
        <li><i><a class="fa-brands fa-github" href="https://github.com/Pierre095" target="_blank"></a></i> Projet stocké sur<a class="lien_button" class="github" target="blank" href="https://github.com/Pierre095"> git hub</a></li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Autonomie</li>
        <li><i class="fa-solid fa-check"></i> Création d'<span class="mot_speciaux">API</span></li>`

        image_detail.src = `IMG/realisation/rugby/rugby.png`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `Le projet <span class="mot_important">Rugby Tropical Cup</span> est un <span class="mot_important">site internet</span> 
        complété par deux pages <span class="mot_important">web mobile</span>. La plateforme recense les <span class="mot_important">matchs</span> de <span class="mot_important">rugby</span> et les informations concernant l'évenements
        en lui même, les utilisateur avec un ticket ont la possibilité de les <span class="mot_important">scanner</span> pour accéder <span class="mot_speciaux">rapidement</span> aux détails spécifiques de chaque match, 
        comme les <span class="mot_speciaux">équipes</span>, les <span class="mot_speciaux">dates</span> et le <span class="mot_speciaux">stade</span>.`

        image_detail2.src = `IMG/realisation/rugby/view.png`
        titre_detail2.innerHTML = `Usage de <span class="mot_page_typing">Vues</span>`
        paragraphe_detail2.innerHTML = `Les <span class="mot_important">vues</span> API définissent comment les informations sont <span class="mot_speciaux">préparées</span> et 
        <span class="mot_speciaux">envoyées</span> en réponse aux demandes. Elles s'occupent de rendre les données <span class="mot_important">faciles</span> à comprendre pour 
        les applications qui utilisent l'<span class="mot_speciaux">API</span>.`

        image_detail3.src = `IMG/realisation/rugby/json.png`
        titre_detail3.innerHTML = `Données <span class="mot_page_typing">Json</span>`
        paragraphe_detail3.innerHTML = ` le <span class="mot_important">JSON</span> ressemble à une <span class="mot_important">liste</span> de choses, chaque chose ayant un 
        <span class="mot_speciaux">nom</span> et une <span class="mot_speciaux">valeur</span> associée. C'est un moyen efficace pour les <span class="mot_important">applications</span>
        de partager des données de manière <span class="mot_speciaux">lisible</span> et <span class="mot_speciaux">structurée</span>.`

        image_detail4.src = `IMG/realisation/rugby/appel-API.png`
        titre_detail4.innerHTML = `L'appel <span class="mot_page_typing">API</span>`
        paragraphe_detail4.innerHTML = `un appel <span class="mot_important">API</span> est comme une conversation entre deux <span class="mot_speciaux">applications</span>, 
        où l'une demande quelque chose et l'autre répond avec les <span class="mot_important">informations</span> demandées.`

        image_detail5.src = `IMG/realisation/rugby/bdd.png`
        titre_detail5.innerHTML = `Base de <span class="mot_page_typing">Données</span>`
        paragraphe_detail5.innerHTML = `une <span class="mot_important">base de données</span> permet de <span class="mot_speciaux">ranger</span> et 
        d'<span class="mot_speciaux">organiser</span> les données, puis de les récupérer rapidement quand on en a besoin. On utilise un langage
        de <span class="mot_speciaux">requête</span> (comme le SQL) pour interagir avec la base de données et effectuer des <span class="mot_important">opérations</span> 
        telles que la <span class="mot_speciaux">création</span>, la <span class="mot_speciaux">lecture</span>, la <span class="mot_speciaux">mise à jour</span> et la 
        <span class="mot_speciaux">suppression</span> de données.`

        image_detail6.src = `IMG/realisation/rugby/site.png`
        titre_detail6.innerHTML = `La page <span class="mot_page_typing">principale</span>`
        paragraphe_detail6.innerHTML = `Ceci est la page <span class="mot_important">principale</span>, où l'on peut retrouver les différents <span class="mot_speciaux">stades</span>, <span class="mot_speciaux">équipes</span>, et 
        quelques informations concernant la <span class="mot_important">Rugby Tropical Cup</span>`

        image_detail7.src = `IMG/realisation/rugby/mobile.png`
        titre_detail7.innerHTML = `la page <span class="mot_page_typing">Mobile</span>`
        paragraphe_detail7.innerHTML = `Voici la page <span class="mot_important">Mobile</span>, créée en Mobile First, cette page permet de retrouver tout les <span class="mot_speciaux">matchs</span>, où l'on retrouve le <span class="mot_speciaux">stade</span> où aura lieu l'affrontement, avec les équipes <span class="mot_speciaux">locals</span> et <span class="mot_speciaux">visiteurs</span>, et enfin la date et l'heure`

        image_detail8.src = `IMG/realisation/rugby/scan.png`
        titre_detail8.innerHTML = `Le <span class="mot_page_typing">Scanneur</span>`
        paragraphe_detail8.innerHTML = `le <span class="mot_important">Scanneur</span>, est une <span class="mot_important">application</span> web <span class="mot_important">mobile</span>, qui permet de scanner des <span class="mot_speciaux">QR codes</span> présent sur les billets pour aller voir les matchs, cela affiche, la <span class="mot_speciaux">catégorie</span>, le 
        <span class="mot_speciaux">prix</span> du billet, la <span class="mot_speciaux">place</span>, et de quel <span class="mot_speciaux">match</span> il s'agit, `

        telechargement.innerHTML = ``
    }







    if (arg === 'projet_croquette') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Team Croquette`

        liste_informations.innerHTML = `<li><i class="fa-solid fa-people-group"></i> Projet fait en <span class="mot_speciaux">Équipe</span> de <span class="mot_speciaux">3</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">2 mois</span></li>
        <li><i><a class="fa-brands fa-gitlab" href="https://gitlab.com/Pierre-BOUFFIES" target="_blank"></a></i> Projet stocké sur<a class="lien_button" class="github" target="blank" href="https://gitlab.com/Pierre-BOUFFIES"> git lab</a></li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Travail en <span class="mot_speciaux">Équipe<span class="mot_speciaux"></li>
        <li><i class="fa-solid fa-check"></i> Gestion d'une <span class="mot_speciaux">API<span class="mot_speciaux"></li>`

        image_detail.src = `IMG/realisation/teamcroquette/logo_teamcroquette_sans_fond_noir.png`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `Le projet <span class="mot_important">Team Croquette,</span> à été réalisé avec deux camarades de classe, et moi-même. c'est un 
        <span class="mot_important">site internet</span> qui affiche une liste de <span class="mot_important">pokémon</span> triés, leur <span class="mot_important">forces</span> 
        et <span class="mot_important">faiblesses</span>, pour permettre de choisir <span class="mot_important">6</span> pokémons à l'aide d'un onglet 
        <span class="mot_important">recherche</span>, et de <span class="mot_important">filtres</span> par <span class="mot_speciaux">nom</span>, 
        <span class="mot_speciaux">types</span>, <span class="mot_speciaux">évolutions</span> etc... Cette fonctionnalitée permet à l'utilisateur d'avoir sa page où il selectionne
        son équipe.`
        image_detail2.src = `IMG/realisation/teamcroquette/charte_graphique.png`
        titre_detail2.innerHTML = `La Charte Graphique`
        paragraphe_detail2.innerHTML = `Voici notre charte graphique que nous avons utiliser pour designer notre site`
        image_detail3.src = `IMG/realisation/teamcroquette/diagramme_de_classe.png`
        titre_detail3.innerHTML = `Diagramme de Classe`
        paragraphe_detail3.innerHTML = `Voici Notre diagramme de Classe`
        image_detail4.src = `IMG/realisation/teamcroquette/site.png`
        titre_detail4.innerHTML = `La page <span class="mot_page_typing">principale</span>`
        paragraphe_detail4.innerHTML = `Ici Voici la page principale où l'on retrouve la liste de tout les pokémons`
        image_detail5.src = `IMG/realisation/teamcroquette/inscription.png`
        titre_detail5.innerHTML = `page d'Inscription`
        paragraphe_detail5.innerHTML = `Voici la page d'inscription, permettant de s'inscrire, et par la suite avoir accès à son compte avec les pokémon ajouter dans son équipe`
        image_detail6.src = `IMG/realisation/teamcroquette/connexion.png`
        titre_detail6.innerHTML = `Page de Connexion`
        paragraphe_detail6.innerHTML = `Voici la page de connexion, qui sert après avoir rempli la page d'inscription`
        image_detail7.src = `IMG/realisation/teamcroquette/recherche.png`
        titre_detail7.innerHTML = `La Recherche`
        paragraphe_detail7.innerHTML = `Nous avons integrer une partie recherche afin de pouvoir ecrire le nom d'un pokémon le rechercher et pouvoir le mettre dans son équipe`
        image_detail8.src = `IMG/realisation/teamcroquette/code_API.png`

        titre_detail8.style.display = 'none'

        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }






    if (arg === 'projet_adventure') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Text adventure`

        liste_informations.innerHTML = `<li><i class="fa-solid fa-person"></i> Projet fait<span class="mot_speciaux"> seul</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">1 mois</span></li>
        <li><i><a class="fa-brands fa-github" href="https://github.com/Pierre095" target="_blank"></a></i> Projet stocké sur<a class="lien_button" class="github" target="blank" href="https://github.com/Pierre095"> git hub</a></li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Découverte des <span class="mot_speciaux">boucles</span> (if else, for, while)</li>
        <li><i class="fa-solid fa-check"></i> Gestion de <span class="mot_speciaux">fonctions</span></li>`

        image_detail.src = `IMG/realisation/textadventure/textadventure.png`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `Le projet <span class="mot_important">textadventure</span>, consiste a faire un jeu <span class="mot_important">textuelle</span> dans l'univers de notre choix, qui doit retracer 
        le parcours d'un <span class="mot_speciaux">lycéen</span>, certains <span class="mot_speciaux">évenements</span> interviennent et l'élève
        doit s'en sortir en faisant des <span class="mot_speciaux">choix</span>, l'histoire se fini lorsque le joueur a récolté tout les <span class="mot_speciaux">succès</span>`
        image_detail2.src = `IMG/realisation/textadventure/choix-theme.png`
        titre_detail2.innerHTML = `Différent <span class="mot_page_typing">thème</span>`
        paragraphe_detail2.innerHTML = `J'ai fait le choix de proposer deux <span class="mot_important">thèmes</span>, ce qui ne change pas grandement l'histoire mais permet 
        d'<span class="mot_important">évoluer</span> dans l'<span class="mot_speciaux">univers</span> de son choix`
        image_detail3.src = `IMG/realisation/textadventure/statut.png`
        titre_detail3.innerHTML = `Le <span class="mot_page_typing">Statut</span>`
        paragraphe_detail3.innerHTML = `Le joueur à la possibilité d'afficher son <span class="mot_important">statut</span>, ce qui lui affiche 
        ses <span class="mot_speciaux">Points de Vie</span>, son <span class="mot_speciaux">prénom</span>, son 
        <span class="mot_speciaux">âge</span>, et son <span class="mot_speciaux">pouvoir</span> (choisis au début du jeu)`
        image_detail4.src = `IMG/realisation/textadventure/combat.png`
        titre_detail4.innerHTML = `Les <span class="mot_page_typing">Combats</span>`
        paragraphe_detail4.innerHTML = `Il y a une fonctionnalité de <span class="mot_important">combat</span> où l'on peut aller dans un centre d'<span class="mot_speciaux">entrainement</span> et se battre 
        contre un <span class="mot_important">mannequin</span>, il y a un système de perte de <span class="mot_speciaux">Points de Vie</span> et de <span class="mot_speciaux">dégats</span> infligé au mannequin`
        image_detail5.src = `IMG/realisation/textadventure/fonction.png`
        titre_detail5.innerHTML = `Une des <span class="mot_page_typing">fonctions</span>`
        paragraphe_detail5.innerHTML = `Voici une des <span class="mot_important">fonctions</span> présente dans le jeu, celle-ci permet d'aller a la <span class="mot_speciaux">cantine</span> afin de 
        récuperer des <span class="mot_speciaux">Points de Vie</span>, il y a un système de <span class="mot_speciaux">stock</span> de nourriture, qui diminue au fur et a mesure que l'on <span class="mot_speciaux">mange</span>`
        
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = `<a class="button" target="blink" href="IMG/realisation/textadventure/textadventure.py">Jouez à Textadventure</a>`
    }






    if (arg === 'projet_billeterie') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Billeterie de Fukuokakuko`

        liste_informations.innerHTML = `<li><i class="fa-solid fa-person"></i> Projet fait<span class="mot_speciaux"> seul</span></li>
        <li><i class="fa-solid fa-calendar-days"></i> Durée : <span class="mot_speciaux">2 semaines</span></li>
        <li><i><a class="fa-brands fa-github" href="https://github.com/Pierre095" target="_blank"></a></i> Projet stocké sur<a class="lien_button" class="github" target="blank" href="https://github.com/Pierre095"> git hub</a></li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Calcul avec des <span class="mot_speciaux">variables</span></li>
        <li><i class="fa-solid fa-check"></i> Organisation d'un <span class="mot_speciaux">code</span></li>`

        image_detail.src = `IMG/realisation/billeterie/billeterie.png`
        titre_detail.innerHTML = `Le <span class="mot_page_typing">projet</span> en quelques mots`
        paragraphe_detail.innerHTML = `Le projet <span class="mot_important">billeterie</span>, se situe au japon, elle consiste à demander à un utilisateur quel <span class="mot_important">trajet</span> il souhaite effectuer, pour cela nous demandons plusieurs informations 
        comme le <span class="mot_speciaux">nombre</span> de billet pris, s'il y a des billet a <span class="mot_speciaux">tarif réduit</span>, la station de <span class="mot_speciaux">départ</span> et la station d'<span class="mot_speciaux">arrivée</span>.
        Une fois cela fait nous <span class="mot_important">calculons</span> en fonction du trajet(en km), et des tarifs réduits, le <span class="mot_speciaux">prix</span> des billets en yen `
        image_detail2.src = `IMG/realisation/billeterie/fonction.png`
        titre_detail2.innerHTML = `Calculs du trajet et du tarif`
        paragraphe_detail2.innerHTML = `Voici une des fonctionnalités permettant de calculer la distance entre deux stations choisis par l'utilisateur, puis le prix en fonction de la distance du trajet,
        et enfin le coût total du trajet avec le nombre de billets saisis précédement`
        image_detail3.src = `IMG/realisation/billeterie/resultat.png`
        titre_detail3.innerHTML = `Format de la Billeterie`
        paragraphe_detail3.innerHTML = `Voici donc le format de la billeterie, la demande des stations est simplifier afin de faciliter la saisi pour l'utilisateur, 
        et à la fin on affiche le détail du billet de metro, à noter qu'il s'agit d'une vrai ligne de metro au japon, et des vrais tarifs et zones tarifaire.`

        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = `<a class="button" target="blink" href="IMG/realisation/billeterie/billetterie.py">Télécharger la billeterie</a>`
    }







    if (arg === 'projet_ticket_reseau') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Résolution d'un ticket en réseau`

        liste_informations.innerHTML = `<li><span class="mot_speciaux">Temps</span> de résolution moyen : <span class="mot_speciaux">X</span>...</li>
        <li>Nombre de ticket <span class="mot_speciaux">créé</span> par semaine : </li>
        <li>Nombre de ticket <span class="mot_speciaux">fermé</span> par semaine : </li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Esprit d'<span class="mot_speciaux">analyse</span></li>
        <li><i class="fa-solid fa-check"></i> <span class="mot_speciaux">Relation client</span></li>`

        image_detail.src = `IMG/realisation/professionnel/desk.jpg`
        titre_detail.innerHTML = `Zoho desk`
        paragraphe_detail.innerHTML = `Afin de réaliser nos ticket nous utilisons la plateforme de ticketing Zoho Desk, elle nous permet de répondre au mieux au client 
        stout en gardant une chronologie et une logique dans la résolution du ticket`

        image_detail2.src = `IMG/realisation/professionnel/ticket/creation_ticket.png`
        titre_detail2.innerHTML = `<span class="mot_important">Création</span> d'un ticket`
        paragraphe_detail2.innerHTML = `Afin créer un <span class="mot_important">ticket</span>, deux <span class="mot_important">options</span> sont disponibles :
        <li>Le client peut contacter notre service par <span class="mot_important">téléphone</span>, où des personnes attitrées prennent en charge la demande et rassemblent des 
        <span class="mot_speciaux">informations</span> pour <span class="mot_speciaux">créer</span> le ticket. Ils notent la <span class="mot_speciaux">raison sociale</span> 
        du client, le <span class="mot_speciaux">nom</span> du demandeur et ses <span class="mot_speciaux">coordonnées</span>, ainsi que la <span class="mot_speciaux">priorité</span>
        et le <span class="mot_speciaux">niveau</span> du ticket. Ensuite, dans la <span class="mot_speciaux">description</span>, la demande est détaillée pour les 
        <span class="mot_important">techniciens.</li>
        <li>le client peut envoyer un <span class="mot_important">e-mail</span>. Ce processus génère un ticket <span class="mot_speciaux">automatiquement</span>
        où toutes les informations sont <span class="mot_speciaux">enregistrées</span> pour commencer le traitement de la demande.</li>`

        image_detail3.src = `IMG/realisation/professionnel/ticket/listing_ticket.png`
        titre_detail3.innerHTML = `<span class="mot_important">Linsting</span> des tickets`
        paragraphe_detail3.innerHTML = `Ici nous voyons tout les tickets en cours, avec le technicien attitré. Il est possible qu'un technicien n'ait plus de tickets a traiter, 
        ou ceux-ci sont en attente de l'interlocuteur, dans ce cas là il va traiter les tickets en surplus attitrés aux autres technicien`

        image_detail4.src = `IMG/realisation/professionnel/ticket/reseau/traitement_ticket.png`
        titre_detail4.innerHTML = `<span class="mot_important">Traitement</span> du Ticket`
        paragraphe_detail4.innerHTML = `Lors du traitement de la demande, nous nous penchons sur toutes les potentielles configurations qui 
        entraînent la panne, pour cela nous allons dans un premier temps nous rendre sur notre logiciel metier et accèder au site du client, 
        cela nous donne toute sortes d'information, comme l'état de son réseau, l'état de ses téléphone, etc... En ce qui concerne les demandes de changement
        ou ajout dans la configuration, le traitement est assez rapide car nous savons où aller directement, afin de répondre au besoins du client. `

        image_detail5.src = `IMG/realisation/professionnel/ticket/reseau/resolution_ticket.png`
        titre_detail5.innerHTML = `La <span class="mot_important">résolution</span> du ticket`
        paragraphe_detail5.innerHTML = `Une fois le problème résolu nous envoyons un message au client pour lui informer que la panne est résolu.
        Il est également courant d'appeler directement le client afin de faire des tests pour s'assurer que tout est de nouveau opérationnel, 
        dans ce cas nous envoyons tout de même un message afin d'avoir une trace écrite en cas de mauvaise fois de la part du client`


        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }

    if (arg === 'projet_conf_firewall') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Configuration d'un Firewall`

        image_detail.src = `IMG/realisation/professionnel/conf_firewall/sophia.png`
        titre_detail.innerHTML = `Logiciel Metier`
        paragraphe_detail.innerHTML = `Nous utilisons un logiciel métier qui s'appel Sophia, c'est ici que nous gerons tout nos client, c'est à 
        dire leurs téléphonie, leurs lien d'accès, leurs Firewall, etc...`

        image_detail2.src = `IMG/realisation/professionnel/conf_firewall/firewall.png`
        titre_detail2.innerHTML = `Logiciel gestion Firewall`
        paragraphe_detail2.innerHTML = `Afin de créer la configuration d'un Firewall, nous utilisons le logiciel Fortinet, nous allons pouvoir les paramètre du Firewall, notament les redirections.`


        image_detail3.style.display = 'none'
        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail3.style.display = 'none'
        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail3.style.display = 'none'
        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }

    if (arg === 'projet_conf_routeur') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Configuration d'un routeur`

        image_detail.src = `IMG/realisation/professionnel/conf_routeur/sophia.png`
        titre_detail.innerHTML = `Logiciel Metier`
        paragraphe_detail.innerHTML = `Nous utilisons un logiciel métier qui s'appel Sophia, c'est ici que nous gerons tout nos client, c'est à dire leurs téléphonie, leurs lien d'accès, leurs Firewall, etc...`
        image_detail2.src = `IMG/realisation/professionnel/conf_routeur/winbox.png`
        titre_detail2.innerHTML = `Logiciel gestion Routeur`
        paragraphe_detail2.innerHTML = `Afin de créer la configuration du routeur, nous utilisons le logiciel Winbox, nous allons pouvoir gérer tout les aspect du routeur, de la gestion du Wifi, aux ouvertures de ports.`

        image_detail3.style.display = 'none'
        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail3.style.display = 'none'
        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail3.style.display = 'none'
        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }

    if (arg === 'projet_ticket_telephonie') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Résolution d'un ticket en téléphonie`

        liste_informations.innerHTML = `<li><span class="mot_speciaux">Temps</span> de résolution moyen : <span class="mot_speciaux">X</span>...</li>
        <li>Nombre de ticket <span class="mot_speciaux">créé</span> par semaine : </li>
        <li>Nombre de ticket <span class="mot_speciaux">fermé</span> par semaine : </li>`
        liste_competences.innerHTML = `<li><i class="fa-solid fa-check"></i> Esprit d'<span class="mot_speciaux">analyse</span></li>
        <li><i class="fa-solid fa-check"></i> <span class="mot_speciaux">Relation client</span></li>`

        image_detail.src = `IMG/realisation/professionnel/desk.jpg`
        titre_detail.innerHTML = `Zoho desk`
        paragraphe_detail.innerHTML = `Afin de réaliser nos ticket nous utilisons la plateforme de ticketing Zoho Desk, elle nous permet de répondre au mieux au client 
        stout en gardant une chronologie et une logique dans la résolution du ticket`

        image_detail2.src = `IMG/realisation/professionnel/ticket/creation_ticket.png`
        titre_detail2.innerHTML = `<span class="mot_important">Création</span> d'un ticket`
        paragraphe_detail2.innerHTML = `Afin créer un <span class="mot_important">ticket</span>, deux <span class="mot_important">options</span> sont disponibles :
        <li>Le client peut contacter notre service par <span class="mot_important">téléphone</span>, où des personnes attitrées prennent en charge la demande et rassemblent des 
        <span class="mot_speciaux">informations</span> pour <span class="mot_speciaux">créer</span> le ticket. Ils notent la <span class="mot_speciaux">raison sociale</span> 
        du client, le <span class="mot_speciaux">nom</span> du demandeur et ses <span class="mot_speciaux">coordonnées</span>, ainsi que la <span class="mot_speciaux">priorité</span>
        et le <span class="mot_speciaux">niveau</span> du ticket. Ensuite, dans la <span class="mot_speciaux">description</span>, la demande est détaillée pour les 
        <span class="mot_important">techniciens.</li>
        <li>le client peut envoyer un <span class="mot_important">e-mail</span>. Ce processus génère un ticket <span class="mot_speciaux">automatiquement</span>
        où toutes les informations sont <span class="mot_speciaux">enregistrées</span> pour commencer le traitement de la demande.</li>`

        image_detail3.src = `IMG/realisation/professionnel/ticket/listing_ticket.png`
        titre_detail3.innerHTML = `<span class="mot_important">Linsting</span> des tickets`
        paragraphe_detail3.innerHTML = `Ici nous voyons tout les tickets en cours, avec le technicien attitré. Il est possible qu'un technicien n'ait plus de tickets a traiter, 
        ou ceux-ci sont en attente de l'interlocuteur, dans ce cas là il va traiter les tickets en surplus attitrés aux autres technicien`

        image_detail4.src = `IMG/realisation/professionnel/ticket/telephonie/traitement_ticket.png`
        titre_detail4.innerHTML = `<span class="mot_important">Traitement</span> du Ticket`
        paragraphe_detail4.innerHTML = `Lors du traitement de la demande, nous nous penchons sur toutes les potentielles configurations qui 
        entraînent la panne, pour cela nous allons dans un premier temps nous rendre sur notre logiciel metier et accèder au site du client, 
        cela nous donne toute sortes d'information, comme l'état de son réseau, l'état de ses téléphone, etc... En ce qui concerne les demandes de changement
        ou ajout dans la configuration, le traitement est assez rapide car nous savons où aller directement, afin de répondre au besoins du client. `

        image_detail5.src = `IMG/realisation/professionnel/ticket/telephonie/resolution_ticket.png`
        titre_detail5.innerHTML = `La <span class="mot_important">résolution</span> du ticket`
        paragraphe_detail5.innerHTML = `Une fois le problème résolu nous envoyons un message au client pour lui informer que la panne est résolu.
        Il est également courant d'appeler directement le client afin de faire des tests pour s'assurer que tout est de nouveau opérationnel, 
        dans ce cas nous envoyons tout de même un message afin d'avoir une trace écrite en cas de mauvaise fois de la part du client`


        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }

    if (arg === 'projet_install_fibre') {

        image_detail.style.display = ''
        image_detail2.style.display = ''
        image_detail3.style.display = ''
        image_detail4.style.display = ''
        image_detail5.style.display = ''
        image_detail6.style.display = ''
        image_detail7.style.display = ''
        image_detail8.style.display = ''

        titre_detail.style.display = ''
        titre_detail2.style.display = ''
        titre_detail3.style.display = ''
        titre_detail4.style.display = ''
        titre_detail5.style.display = ''
        titre_detail6.style.display = ''
        titre_detail7.style.display = ''
        titre_detail8.style.display = ''

        paragraphe_detail.style.display = ''
        paragraphe_detail2.style.display = ''
        paragraphe_detail3.style.display = ''
        paragraphe_detail4.style.display = ''
        paragraphe_detail5.style.display = ''
        paragraphe_detail6.style.display = ''
        paragraphe_detail7.style.display = ''
        paragraphe_detail8.style.display = ''

        titre_projet_detail.innerHTML = `Installation d'un lien Fibre`

        image_detail.src = `IMG/realisation/professionnel/intervention/outlook.png`
        titre_detail.innerHTML = `Planification`
        paragraphe_detail.innerHTML = `La plagnification de chaque intervention est gérer sur le calendrier Outlook, c'est ici que l'on voit nos disponibilités, 
        lorsque nous sommes plannifié nous avons une notification et sur le planning nous avons tout les détails de l'intervention. `
        image_detail2.src = `IMG/realisation/professionnel/intervention/provisionnig.png`
        titre_detail2.innerHTML = `Provisionning`
        paragraphe_detail2.innerHTML = `Avant de partir en intervention pour une installation, nous essayons de savoir a l'avance la configuration initial du client, 
        afin de préparer le routeur fibre, pour qu'une fois arrivé chez le client nous ayons plus qu'à installer l'équipement et faire quelques modifications supplémentaire en 
        fonction des préférences du client.`

        image_detail3.style.display = 'none'
        image_detail4.style.display = 'none'
        image_detail5.style.display = 'none'
        image_detail6.style.display = 'none'
        image_detail7.style.display = 'none'
        image_detail8.style.display = 'none'

        titre_detail3.style.display = 'none'
        titre_detail4.style.display = 'none'
        titre_detail5.style.display = 'none'
        titre_detail6.style.display = 'none'
        titre_detail7.style.display = 'none'
        titre_detail8.style.display = 'none'

        paragraphe_detail3.style.display = 'none'
        paragraphe_detail4.style.display = 'none'
        paragraphe_detail5.style.display = 'none'
        paragraphe_detail6.style.display = 'none'
        paragraphe_detail7.style.display = 'none'
        paragraphe_detail8.style.display = 'none'

        telechargement.innerHTML = ``
    }





    const clic_projet = document.querySelector('.projet_details_hide');
    const fleche_retour = document.querySelector('.fleche_retour_hide');
    clic_projet.classList.remove('projet_details_hide');
    clic_projet.classList.add('projet_details_show');
    fleche_retour.classList.remove('fleche_retour_hide');
    fleche_retour.classList.add('fleche_retour_show');
}

function retour() {
    const noscroll = document.querySelector('html');
    noscroll.style.overflowY = 'auto';
    const resetscroll = document.querySelector('.projet_details_show');
    resetscroll.scrollTop = 0;
    const clic_projet = document.querySelector('.projet_details_show');
    const fleche_retour = document.querySelector('.fleche_retour_show');
    clic_projet.classList.add('projet_details_hide');
    clic_projet.classList.remove('projet_details_show');
    fleche_retour.classList.add('fleche_retour_hide');
    fleche_retour.classList.remove('fleche_retour_show');


}