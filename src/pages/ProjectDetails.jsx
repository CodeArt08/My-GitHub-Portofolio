import ProjectDetailsLayout from '../components/ProjectDetailsLayout';

const projectSlides = [
    {
        id: 1,
        title: "Page d'accueil",
        image: "/assets/images/PageAccueil.png",
        description: "Cette page d'accueil sert de point d'entrée central pour la plateforme. Elle présente une vue d'ensemble du projet, qui est basé sur la géolocalisation et l'intelligence artificielle pour la gestion efficace des services opérationnels au sein d'une force armée. L'interface est conçue pour être intuitive et rapide d'accès."
    },
    {
        id: 2,
        title: "Connexion Sécurisée",
        image: "/assets/images/Login.png",
        description: "L'accès à la plateforme est protégé par un système d'authentification robuste. L'interface de connexion garantit que seul le personnel autorisé peut accéder aux données sensibles et aux fonctionnalités opérationnelles."
    },
    {
        id: 3,
        title: "Scrapping et Analyse IA",
        image: "/assets/images/ScrappingFacebook.png",
        description: "Le module de scrapping, développé en Python, collecte des informations pertinentes depuis des sources externes comme Facebook. Ces données sont ensuite analysées par des algorithmes d'Intelligence Artificielle pour extraire des renseignements utiles à la prise de décision opérationnelle."
    },
    {
        id: 4,
        title: "Système de Géolocalisation",
        image: "/assets/images/Geolocalisation.png",
        description: "Le cœur du système repose sur une fonctionnalité de géolocalisation avancée. Elle permet de visualiser en temps réel le déploiement des services, de suivre les unités sur le terrain et d'optimiser la répartition des ressources en fonction de la situation géographique."
    }
];

const ProjectDetails = () => {
    const meta = [
        { icon: "fas fa-code", text: "Laravel, React.js, Python, Tailwind CSS" },
        { icon: "fas fa-database", text: "MySQL" },
        { icon: "fas fa-calendar", text: "2024" }
    ];

    const description = (
        <p>
            Une plateforme intégrant l'Intelligence Artificielle et la géolocalisation pour optimiser les services opérationnels.
            Ce projet vise à moderniser la gestion des opérations en fournissant des outils avancés de suivi et d'analyse.
        </p>
    );

    return (
        <ProjectDetailsLayout
            title="Désignation Intelligente de Service Opérationnel"
            subtitle="Une plateforme intégrant l'Intelligence Artificielle et la géolocalisation pour optimiser les services opérationnels."
            meta={meta}
            slides={projectSlides}
            description={description}
            contactText="N'hésitez pas à me contacter pour en savoir plus sur la conception et les défis techniques de cette réalisation."
        />
    );
};

export default ProjectDetails;
