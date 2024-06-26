function textwriter() {
    const contentDiv = document.querySelector('.typing_effect');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = 'MA <span class="mot_page_typing">VEILLE</span> PORTERA SUR LES <span class="mot_page_typing">CRYPTOMONNAIES</span>';
}

setTimeout(() => {
    textwriter()
}, 500);

sortArticles({ target: { value: "note" } })

//Fonction qui servira à trié par note, date, alphabet, les article de veille



function sortArticles(event) {

    const sortType = event.target.value;
    const articlesList = document.querySelectorAll(".article");
    const articlesArray = Array.from(articlesList);

    articlesArray.sort((a, b) => {
        switch (sortType) {
            case "alpha":
                const titleA = a.querySelector(".article .titre").textContent;
                const titleB = b.querySelector(".article .titre").textContent;
                return titleA.localeCompare(titleB);

            case "date":
                const dateA = new Date(a.querySelector(".date").getAttribute("data-date"));
                const dateB = new Date(b.querySelector(".date").getAttribute("data-date"));
                return dateB - dateA;

            case "note":
                const noteA = parseFloat(a.querySelector(".note").getAttribute("data-note"));
                const noteB = parseFloat(b.querySelector(".note").getAttribute("data-note"));
                return noteB - noteA;

            default:
                return 0;
        }
    });

    const articleList = document.querySelector(".article-list");
    articlesArray.forEach((article, index) => {
        article.style.order = index; // Changez visuellement l'ordre des éléments en utilisant l'attribut order
        articleList.appendChild(article);
    });
}



function affiche_detail(arg) {
    const noscroll = document.querySelector('html');
    noscroll.style.overflow = 'hidden';
    let image_detail = document.querySelector('.img_paragraphe_detail .image');
    let paragraphe_detail = document.querySelector('.img_paragraphe_detail .paragraphe');
    let titre_detail = document.querySelector('.titre_article_detail');
    let auteur = document.querySelector('.auteur');
    let telechargement = document.querySelector('.article_details_hide .file');

    if (arg === 'article_1') {
        console.log('yes')
        titre_detail.innerHTML = `<p>CRYPTOMONNAIES: SOCIÉTÉ GÉNÉRALE ÉMET SA PREMIÈRE OBLIGATION VERTE NUMÉRIQUE SUR ETHEREUM</p>`
        image_detail.src = `IMG/veille/image_article_1.png`
        paragraphe_detail.innerHTML = `
        Les banques explorent une nouvelle technologie appelée blockchain, qui est comme un grand livre numérique sécurisé.
        Plutôt que de l'utiliser uniquement pour les cryptomonnaies, elles créent des jetons numériques pour représenter des choses comme des obligations 
        (sorte de prêts financiers).`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://www.bfmtv.com/crypto/blockchain/cryptomonnaies-societe-generale-emet-sa-premiere-obligation-verte-numerique-sur-ethereum_AV-202312040529.html">Voir l'article</a>`

    }

    if (arg === 'article_2') {
        console.log('yes')
        titre_detail.innerHTML = `<p>NFT ET ENVIRONNEMENT : DÉMÊLER LE VRAI DU FAUX</p>`
        image_detail.src = `IMG/veille/image_article_2.png`
        paragraphe_detail.innerHTML = `En 2021, Joanie Lemercier a découvert l'empreinte carbone des NFT via des recherches personnelles et un article de Memo Akten. 
        Ce constat a donné naissance au mouvement Clean NFT, incitant à utiliser des consensus moins énergivores. Malgré la transition d'Ethereum vers la preuve d'enjeu en 
        septembre 2022, les préoccupations environnementales persistent dans l'industrie crypto et NFT.`
        telechargement.innerHTML = `<a class="button" target="blink"  href="https://journalducoin.com/nft/nft-et-environnement-demeler-le-vrai-du-faux/">Voir l'article</a>`

    }

    if (arg === 'article_3') {
        console.log('yes')
        titre_detail.innerHTML = `<p>SunContract, le projet qui permet de transformer ses NFT en énergie solaire</p>`
        image_detail.src = `IMG/veille/image_article_3.png`
        paragraphe_detail.innerHTML = `SunContract utilise la blockchain pour faciliter les échanges d'énergie solaire entre producteurs et consommateurs, 
        éliminant les intermédiaires. Débuté en Slovénie en 2015, il s'étend désormais à toute l'Europe. La plateforme va introduire les NFT, permettant la 
        tokenisation des panneaux solaires et offrant aux détenteurs une part des revenus. Son objectif est d'apporter de la liquidité à un marché en demande.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://fr.cryptonews.com/news/suncontract-nft-energie-solaire.htm">Voir l'article</a>`

    }

    if (arg === 'article_4') {
        console.log('yes')
        titre_detail.innerHTML = `<p>Projets environnementaux financés par des cryptomonnaies : où sont passés les millions d'euros ?</p>`
        image_detail.src = `IMG/veille/image_article_4.png`
        paragraphe_detail.innerHTML = `Des investisseurs envisagent de porter plainte pour "escroquerie" contre une start-up qui promettait des investissements environnementaux 
        et sociaux via des cryptomonnaies. Seuls trois projets ont été concrétisés sur les nombreux annoncés, laissant les investisseurs insatisfaits. La start-up, désormais Erable, 
        refuse de répondre aux accusations et met en avant les projets réalisés, malgré les doutes sur ses méthodes et l'absence de transparence quant à l'utilisation des fonds.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://www.radiofrance.fr/franceinter/projets-environnementaux-finances-par-des-cryptomonnaies-des-millions-d-euros-perdus-dans-la-nature-4183513">Voir l'article</a>`

    }

    if (arg === 'article_5') {
        console.log('yes')
        titre_detail.innerHTML = `<p>La demande d’électricité des centres de données devrait doubler d’ici 2026</p>`
        image_detail.src = `IMG/veille/image_article_5.png`
        paragraphe_detail.innerHTML = `La demande croissante en électricité due aux centres de données, à l'IA et aux cryptomonnaies nécessite des solutions pour réduire l'impact 
        environnemental, comme l'efficacité énergétique et l'utilisation des énergies renouvelables. Cependant, des politiques énergétiques adaptées sont également nécessaires pour 
        encadrer cette transition vers une consommation d'énergie plus durable et pour soutenir les efforts des gestionnaires de centres de données dans leur quête de solutions plus
        respectueuses de l'environnement.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://trustmyscience.com/demande-electricite-centres-donnees-double-2026-ia/">Voir l'article</a>`

    }

    if (arg === 'article_6') {
        console.log('yes')
        titre_detail.innerHTML = `Cryptomonnaies : comment elles redéfinissent la finance internationale`
        image_detail.src = `IMG/veille/image_article_6.png`
        paragraphe_detail.innerHTML = `Les cryptomonnaies transforment la finance mondiale en démocratisant l'accès aux marchés via la technologie blockchain, en introduisant des 
        défis liés à la volatilité et à la consommation énergétique, et en nécessitant une régulation adaptée pour équilibrer innovation et sécurité.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://www.insoelite.com/actualites-economiques/cryptomonnaies-comment-elles-redefinissent-la-finance-internationale/">Voir l'article</a>`

    }

    if (arg === 'article_7') {
        console.log('yes')
        titre_detail.innerHTML = `CRYPTOMONNAIES DANS PARIS : LE POUBELLE COIN ET LE $RATP ENVAHISSENT LES JO 2024`
        image_detail.src = `IMG/veille/image_article_7.png`
        paragraphe_detail.innerHTML = `
        Pour les Jeux Olympiques, la mairie de Paris enrichit l'usage du Poubelle Coin (PBL) et introduit l'application PBL Tracker, récompensant les recyclages et les retards dans 
        les transports avec des avantages olympiques et des expériences uniques. Malgré des critiques, ces initiatives visent à lier sport, écologie, et citoyenneté.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://journalducoin.com/actualites/cryptomonnaies-paris-poubelle-coin-ratp-jo-2024/">Voir l'article</a>`

    }

    if (arg === 'article_8') {
        console.log('yes')
        titre_detail.innerHTML = `Bitcoiners et climatosceptiques seraient « interconnectés » selon Greenpeace – Analyse d'une conclusion erronée`
        image_detail.src = `IMG/veille/image_article_8.png`
        paragraphe_detail.innerHTML = `
        Greenpeace critique le minage de Bitcoin pour son impact environnemental, mais néglige des arguments qui montrent ses bénéfices énergétiques et son utilisation croissante d'énergies renouvelables.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://cryptoast.fr/bitcoiners-climatosceptiques-seraient-interconnectes-selon-greenpeace-nalyse-conclusion-erronee/">Voir l'article</a>`

    }

    if (arg === 'article_9') {
        console.log('yes')
        titre_detail.innerHTML = `Cryptomonnaie Écologique : Exploration des Technologies Blockchain Durables`
        image_detail.src = `IMG/veille/image_article_9.png`
        paragraphe_detail.innerHTML = `L'industrie des cryptomonnaies évolue vers plus de durabilité avec des technologies comme la preuve d’enjeu (PoS), réduisant son impact écologique et 
        attirant des investisseurs conscients des enjeux environnementaux.`
        telechargement.innerHTML = `<a class="button" target="blink" href="https://www.237online.com/cryptomonnaie-ecologique-exploration-des-technologies-blockchain-durables/">Voir l'article</a>`

    }





    const clic_article = document.querySelector('.article_details_hide');
    const fleche_retour = document.querySelector('.fleche_retour_hide');
    clic_article.classList.remove('article_details_hide');
    clic_article.classList.add('article_details_show');
    fleche_retour.classList.remove('fleche_retour_hide');
    fleche_retour.classList.add('fleche_retour_show');
}

function retour() {
    const noscroll = document.querySelector('html');
    noscroll.style.overflowY = 'auto';
    const clic_article = document.querySelector('.article_details_show');
    const fleche_retour = document.querySelector('.fleche_retour_show');
    clic_article.classList.add('article_details_hide');
    clic_article.classList.remove('article_details_show');
    fleche_retour.classList.add('fleche_retour_hide');
    fleche_retour.classList.remove('fleche_retour_show');
}











