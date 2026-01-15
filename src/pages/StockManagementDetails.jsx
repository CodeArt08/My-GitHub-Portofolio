import ProjectDetailsLayout from '../components/ProjectDetailsLayout';

const StockManagementDetails = () => {
    const slides = [
        {
            image: "/assets/images/stock1.png",
            title: "Portail d'Accès Sécurisé au Système",
            description: "Cette page de garde présente le formulaire d'authentification de l'application. Elle arbore une esthétique verte thématique et permet aux administrateurs de se connecter en saisissant leur nom d'utilisateur et leur mot de passe."
        },
        {
            image: "/assets/images/stock2.png",
            title: "Tableau de Bord de l'État des Stocks",
            description: "C'est la vue principale du module « Stock ». Elle affiche un résumé global (1469 cartons et 6955 pièces en stock) ainsi qu'un tableau détaillé des fournitures reçues (livres de mathématiques, français, SVT, tabliers). Chaque entrée précise le nombre de cartons, de pièces et la date d'arrivée."
        },
        {
            image: "/assets/images/stock3.png",
            title: "Registre des Dotations aux Établissements",
            description: "Dans l'onglet « Distribution », l'interface liste les fournitures envoyées sur le terrain. On y voit les bénéficiaires classés par Zone d'Administration Pédagogique (ZAP) et par établissement, avec les quantités exactes et la date de distribution (ex: 26/11/2024)."
        },
        {
            image: "/assets/images/stock4.png",
            title: "Registre des Dotations aux Établissements",
            description: "C'est ici qu'on ajoute et enregistre les fournitures reçues sur le terrain et faire les calculs de conversion en cartons et pièces."
        },
        {
            image: "/assets/images/stock5.png",
            title: "Annuaire des Écoles par Zone Géographique",
            description: "Située dans le module « Etablissement », cette page se concentre sur une zone spécifique (ZAP Ambalarondra). Elle permet d'ajouter de nouvelles écoles via un formulaire et affiche la liste des établissements existants (Écoles Communautaires, EPP) avec leurs codes d'identification et contacts téléphoniques."
        },
        {
            image: "/assets/images/stock6.png",
            title: "Contrôle de Réception et Génération de Rapports",
            description: "L'onglet « Historique » sert ici à identifier les établissements n'ayant pas encore reçu leur stock pour une livraison spécifique (ici, celle du 13/10/2024). L'interface propose des filtres par date, par ZAP, et permet de générer un rapport PDF pour le suivi administratif."
        }
    ];

    const meta = [
        { label: "Client", value: "CISCO Brickaville" },
        { label: "Date", value: "2023" },
        { label: "Rôle", value: "Développeur Full Stack (Stage)" },
        { label: "Technologies", value: "Laravel, VueJS, MySQL" }
    ];

    return (
        <ProjectDetailsLayout
            title="Gestion de Stock CISCO"
            subtitle="Application de gestion des manuels et kits scolaires"
            description="Conception et réalisation d'une application web pour la CISCO Brickaville permettant de gérer efficacement les stocks de manuels et de kits scolaires. L'application facilite le suivi des entrées et sorties, la gestion des inventaires et la génération de rapports pour une meilleure prise de décision."
            meta={meta}
            slides={slides}
            contactText="Intéressé par une solution similaire pour votre organisation ?"
            githubLink="https://github.com/CodeArt08/stock_manager"
        />
    );
};

export default StockManagementDetails;
