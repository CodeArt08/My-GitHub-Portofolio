import ProjectDetailsLayout from '../components/ProjectDetailsLayout';

const projectSlides = [
    { id: 1, image: "/assets/images/img1.png", title: "Portail de connexion sécurisé CarDiv", description: "Cette page permet aux utilisateurs d'accéder à leur espace personnel via un identifiant (e-mail) et un mot de passe. Le design utilise un arrière-plan immersif lié à l'automobile." },
    { id: 2, image: "/assets/images/img2.png", title: "Page d'Accueil", description: "Il s'agit du point d'entrée du logiciel CarDiv, facilitant la location de voitures grâce à des raccourcis vers les véhicules, les locations, les réservations et la gestion client. Un bouton d'action rapide permet de vérifier directement la disponibilité des véhicules." },
    { id: 3, image: "/assets/images/img3.png", title: "Gestion du parc automobile et catalogue", description: "Cette interface liste l'ensemble des véhicules avec leurs caractéristiques : marque, immatriculation, catégorie (citadine, prestige, etc.), carburant et prix journalier. Elle permet également d'ajouter de nouveaux véhicules au parc." },
    { id: 4, image: "/assets/images/img4.png", title: "Détails du Véhicule", description: "Une fenêtre contextuelle affiche les détails spécifiques d'un véhicule sélectionné (comme une Opel R9 électrique), confirmant son statut actuel (ex: \"Loué\") et son tarif de 150€ par jour." },
    { id: 5, image: "/assets/images/img5.png", title: "Statistiques globales et historique des locations", description: "Cette vue présente des indicateurs clés (KPI) tels que le total de véhicules (11), ceux en maintenance (1) ou disponibles (7). Un tableau détaillé récapitule l'historique des trajets avec les villes de départ/retour et le statut final de la location." },
    { id: 6, image: "/assets/images/img6.png", title: "Formulaire de recherche de disponibilité", description: "Cette interface constitue la première étape du processus de location. Elle permet à l'utilisateur de définir les critères essentiels : les lieux de prise en charge et de retour, ainsi que les dates et heures précises de la location. Un encadré de conseils rappelle les règles de validité des dates." },
    { id: 7, image: "/assets/images/img7.png", title: "Catalogue des résultats et filtres", description: "Une fois la recherche lancée, cette page affiche les véhicules disponibles sous forme de cartes. On y voit le modèle (Opel, Renault, Kia), le prix journalier et le type de carburant. Une barre latérale à gauche permet d'affiner la recherche par catégorie (Citadine, SUV, Luxe, etc.)." },
    { id: 8, image: "/assets/images/img8.png", title: "Saisie des informations client (Partie 1/2)", description: "Première partie du formulaire de renseignements sur le locataire. L'utilisateur doit saisir son nom, son prénom, son numéro de carte d'identité nationale (CIN) et son adresse e-mail. Une barre de progression en haut indique l'avancement dans le processus de réservation." },
    { id: 9, image: "/assets/images/img9.png", title: "Coordonnées de contact et détails de conduite (Partie 2/2)", description: "Ce second volet du formulaire client recueille le numéro de téléphone, l'adresse physique et le numéro du permis de conduire. L'utilisateur peut également choisir l'option \"avec ou sans chauffeur\" et doit confirmer qu'il respecte la tranche d'âge requise (26 à 65 ans)." },
    { id: 10, image: "/assets/images/img10.png", title: "Résumé de la location avant finalisation", description: "Cette page présente une vue d'ensemble complète avant le paiement. Elle regroupe les informations du client, les détails techniques du véhicule (immatriculation, design), les dates de location et le calcul du prix total basé sur la durée. C'est l'étape de vérification finale." },
    { id: 11, image: "/assets/images/img11.png", title: "Tableau de bord (Dashboard) analytique", description: "Une vue administrative ou de gestion affichant les indicateurs clés de performance (KPI). On y trouve le nombre total de véhicules par statut (disponibles, loués, en maintenance), un graphique des recettes sur les 5 dernières semaines, ainsi que les profils du \"Top Client\" et de la \"Top Voiture\"." },
];

const RentalManagementDetails = () => {
    const meta = [
        { icon: "fas fa-code", text: "React.js, Express.js, CSS" },
        { icon: "fas fa-database", text: "MySQL" },
        { icon: "fas fa-calendar", text: "2024" }
    ];

    const description = (
        <p>
            Ce projet est une solution clé en main pour les agences de location de voitures. Il permet de centraliser toutes les opérations,
            de la gestion du parc automobile à la facturation client, en passant par le suivi des réservations et la maintenance.
            L'interface utilisateur a été conçue pour être intuitive et réactive, offrant une expérience fluide sur tous les appareils.
        </p>
    );

    return (
        <ProjectDetailsLayout
            title="Gestion des Locations de Véhicules"
            subtitle="Une application web complète pour la gestion en temps réel d'une flotte de véhicules."
            meta={meta}
            slides={projectSlides}
            description={description}
            contactText="N'hésitez pas à me contacter pour discuter des fonctionnalités ou pour une démonstration."
            githubLink="https://github.com/CodeArt08/nara_project"
        />
    );
};

export default RentalManagementDetails;
