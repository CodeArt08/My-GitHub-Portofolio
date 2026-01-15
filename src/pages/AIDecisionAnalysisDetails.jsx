import ProjectDetailsLayout from '../components/ProjectDetailsLayout';
import { getAssetPath } from '../utils/assetPath';

const projectSlides = [
    { id: 1, image: getAssetPath("/assets/images/photo1.png"), title: "Interface des Suggestions Opérationnelles en Temps Réel", description: "Cette vue présente le module d'intelligence opérationnelle pour la zone active d'Ambalavao. L'IA affiche un niveau de risque maximal (5.0/5) et suggère une action prioritaire : « Établir un périmètre de sécurité ». On y voit un indice de confiance de 92 % pour cette recommandation, ainsi que des filtres pour trier les suggestions par urgence ou par type (préventive, organisationnelle, etc.)." },
    { id: 2, image: getAssetPath("/assets/images/photo2.png"), title: "Journal de l'Historique des Décisions Exécutées", description: "Cet écran récapitule les interventions passées et validées par le commandement. On y voit une liste chronologique de déploiements d'unités d'intervention dans les zones de Tanambao et Ambalakely. Chaque entrée est marquée du statut « EXECUTED » (Exécutée) avec une mention de l'urgence et l'heure précise de l'action." },
    { id: 3, image: getAssetPath("/assets/images/photo3.png"), title: "Tableau de Bord Statistique et Indicateurs de Performance", description: "Cette interface affiche les données chiffrées pour la zone d'Ambalavao. Elle met en avant des indicateurs clés (KPI) tels que le niveau de risque (5.0/5), le nombre d'agents déployés (8) et les points de contrôle actifs (4). Le graphique montre également une tendance à la hausse des incidents (+12 %) par rapport à la semaine précédente." },
    { id: 4, image: getAssetPath("/assets/images/photo4.png"), title: "Module d'Intégration de Rapports et Veille Médias", description: "L'image montre l'interface de saisie de rapports basée sur des sources externes. Ici, une publication Facebook de « 303 RADIO » concernant l'arrestation de suspects de vol de motos est en cours d'analyse. Ce module permet de lier des preuves visuelles et des témoignages issus des réseaux sociaux aux dossiers opérationnels." },
    { id: 5, image: getAssetPath("/assets/images/photo5.png"), title: "Registre de Collecte et Validation des Données", description: "Un tableau détaillé listant les « Données Validées » provenant de diverses sources (Web, Presse, Facebook). Les incidents sont classés par catégorie (vol, délit, agression, crime) et par lieu (Ampasambazaha, Tsianolondroa, etc.). Chaque ligne indique la sévérité de l'événement et permet des actions de gestion directe." },
    { id: 6, image: getAssetPath("/assets/images/photo6.png"), title: "Cartographie Tactique et Analyse de Chaleur (Heatmap)", description: "Une vue géographique de la région de Fianarantsoa utilisant un code couleur pour l'indice de danger (du vert au rouge). La carte identifie visuellement les foyers d'incidents, tandis qu'un panneau latéral liste les zones les plus critiques (Ambalavao, Ambatomena) avec leurs scores de risque respectifs générés par l'IA." },
];

const AIDecisionAnalysisDetails = () => {
    const meta = [
        { icon: "fas fa-code", text: "Python, React, LightGBM" },
        { icon: "fas fa-brain", text: "Machine Learning" },
        { icon: "fas fa-database", text: "MariaDB" },
        { icon: "fas fa-calendar", text: "2025" }
    ];

    const description = (
        <>
            <p>
                Ce projet innovant combine l'intelligence artificielle et l'analyse de données pour fournir des insights stratégiques en temps réel.
                En exploitant les données publiques issues des sites d'information et des réseaux sociaux comme Facebook, le système utilise
                des algorithmes de machine learning (LightGBM) pour détecter les patterns, identifier les zones géographiques à risque,
                et proposer des recommandations de décisions intelligentes aux décideurs.
            </p>
            <p>
                L'application offre une interface React moderne permettant de visualiser les résultats sur une carte interactive,
                de consulter les analyses en temps réel, et de générer des rapports détaillés pour faciliter la prise de décision stratégique.
            </p>
        </>
    );

    return (
        <ProjectDetailsLayout
            title="Analyse de Données et Suggestion de Décision Intelligente basée sur l'IA"
            subtitle="Une application intelligente qui analyse les données web et réseaux sociaux pour identifier les zones de dangerosité et recommander des décisions stratégiques."
            meta={meta}
            slides={projectSlides}
            description={description}
            contactText="N'hésitez pas à me contacter pour discuter de solutions d'analyse intelligente basées sur l'IA."
        />
    );
};

export default AIDecisionAnalysisDetails;
