import ProjectDetailsLayout from '../components/ProjectDetailsLayout';
import { getAssetPath } from '../utils/assetPath';

const projectSlides = [
    { id: 1, image: getAssetPath("/assets/images/capture1.png"), title: "Interface d'ajout d'un nouveau relevé de compteur", description: "Cette image montre une fenêtre contextuelle (modal) permettant de saisir les informations pour un nouveau relevé (code compteur, type, valeur, dates)." },
    { id: 2, image: getAssetPath("/assets/images/capture2.png"), title: "Tableau de bord des relevés de compteurs récents", description: "Cette vue affiche la liste détaillée des derniers relevés enregistrés avec les montants calculés et les dates limites de paiement." },
    { id: 3, image: getAssetPath("/assets/images/capture3.png"), title: "Historique des paiements récents", description: "Cette interface liste les transactions réussies, affichant le nom du client, le code du compteur, le montant versé et la date du paiement." },
    { id: 4, image: getAssetPath("/assets/images/capture4.png"), title: "Liste des paiements en retard (Relances)", description: "Cette vue identifie les clients ayant des factures impayées, avec le montant du retard et une option d'action (probablement pour envoyer une relance par email)." },
    { id: 5, image: getAssetPath("/assets/images/capture5.png"), title: "Répertoire et tarification des compteurs clients", description: "Cette interface permet de gérer les types de compteurs (Eau ou Électricité) associés à chaque client, en précisant le prix unitaire appliqué à la consommation (ex: 2000,00 Ar pour l'eau)." },
    { id: 6, image: getAssetPath("/assets/images/capture6.png"), title: "Annuaire centralisé et gestion des informations clients", description: "Ce tableau liste tous les usagers enregistrés avec leurs coordonnées (e-mail), leur localisation (Quartier comme Ambozontany ou Tanambao), leur genre et leur niveau d'abonnement (base, expert ou haute)." },
    { id: 7, image: getAssetPath("/assets/images/capture7.png"), title: "Portail de bienvenue et navigation principale de JRMApp", description: "Il s'agit du menu principal présentant le logiciel comme l'outil web rélevant du JIRAMA." },
];

const DataAnalysisDetails = () => {
    const meta = [
        { icon: "fas fa-code", text: "JSP, JavaScript" },
        { icon: "fas fa-database", text: "MariaDB" },
        { icon: "fas fa-calendar", text: "2023" }
    ];

    const description = (
        <p>
            Le projet JRMApp est une solution logicielle web de gestion intégrée conçue pour automatiser et centraliser les opérations administratives et financières liées à la distribution d'eau et d'électricité, spécifiquement pour la JIRAMA.
            L'application permet de piloter l'ensemble du cycle de vie client, de l'abonnement à la facturation finale.
        </p>
    );

    return (
        <ProjectDetailsLayout
            title="Gestion de facturation"
            subtitle="Analyse et suivi en temps réel des factures issues des compteurs"
            meta={meta}
            slides={projectSlides}
            description={description}
            contactText="N'hésitez pas à me contacter pour discuter de vos besoins en analyse de données."
        />
    );
};

export default DataAnalysisDetails;
