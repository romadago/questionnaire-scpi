// Fichier : src/configurations/SCPI.ts

import { QuestionnaireConfig } from './types.js';

const questions = [
  {
    id: 'q1_signification',
    question: "Que signifie SCPI ?",
    type: 'choix_unique',
    options: [
      { label: "A. Société Civile de Placement Immobilier", value: "A", points: 1 },
      { label: "B. Société de Crédit pour Particuliers Investisseurs", value: "B", points: 0 },
      { label: "C. Société de Capitalisation à Portefeuille Immobilier", value: "C", points: 0 },
    ],
  },
  {
    id: 'q2_objectif',
    question: "Quel est le principal objectif d’un investissement en SCPI ?",
    type: 'choix_unique',
    options: [
      { label: "A. Profiter de l’effet de levier du crédit immobilier", value: "A", points: 0 },
      { label: "B. Obtenir des revenus potentiels réguliers issus de loyers", value: "B", points: 1 },
      { label: "C. Spéculer sur la hausse rapide du prix de l’immobilier", value: "C", points: 0 },
    ],
  },
  {
    id: 'q3_types_biens',
    question: "Quels types de biens une SCPI peut-elle détenir ?",
    type: 'choix_unique',
    options: [
      { label: "A. Uniquement des logements résidentiels", value: "A", points: 0 },
      { label: "B. Tous types d’actifs financiers", value: "B", points: 0 },
      { label: "C. Des biens immobiliers professionnels (bureaux, commerces, santé, etc.)", value: "C", points: 2 },
    ],
  },
  {
    id: 'q4_liquidite',
    question: "Les parts de SCPI :",
    type: 'choix_unique',
    options: [
      { label: "A. Peuvent être vendues à tout moment sans délai", value: "A", points: 0 },
      { label: "B. Peuvent être difficiles à revendre rapidement", value: "B", points: 2 },
      { label: "C. Sont cotées en Bourse donc très liquides", value: "C", points: 0 },
    ],
  },
  {
    id: 'q5_garantie',
    question: "L’investissement en SCPI est-il garanti en capital ?",
    type: 'choix_unique',
    options: [
      { label: "A. Oui, c’est un placement à capital garanti", value: "A", points: 0 },
      { label: "B. Non, il comporte un risque de perte en capital", value: "B", points: 2 },
      { label: "C. Oui, mais uniquement sur les SCPI fiscales", value: "C", points: 0 },
    ],
  },
  {
    id: 'q6_duree',
    question: "Quelle est la durée recommandée pour un investissement en SCPI ?",
    type: 'choix_unique',
    options: [
      { label: "A. 1 à 2 ans", value: "A", points: 0 },
      { label: "B. 3 à 5 ans", value: "B", points: 0 },
      { label: "C. 8 ans et plus", value: "C", points: 2 },
    ],
  },
  {
    id: 'q7_credit',
    question: "Peut-on investir en SCPI à crédit ?",
    type: 'choix_unique',
    options: [
      { label: "A. Non, ce n’est pas autorisé", value: "A", points: 0 },
      { label: "B. Oui, mais uniquement pour les SCPI européennes", value: "B", points: 0 },
      { label: "C. Oui, c’est même une stratégie fréquente pour optimiser la fiscalité", value: "C", points: 3 },
    ],
  },
  {
    id: 'q8_localisation',
    question: "Une SCPI peut investir :",
    type: 'choix_unique',
    options: [
      { label: "A. Uniquement en France", value: "A", points: 0 },
      { label: "B. En France et à l’étranger selon sa stratégie", value: "B", points: 2 },
      { label: "C. Uniquement dans des logements sociaux", value: "C", points: 0 },
    ],
  },
  {
    id: 'q9_jouissance',
    question: "Qu’est-ce que le délai de jouissance dans une SCPI ?",
    type: 'choix_unique',
    options: [
      { label: "A. Le délai pour pouvoir revendre ses parts", value: "A", points: 0 },
      { label: "B. Le temps entre la souscription et le début du versement des revenus", value: "B", points: 3 },
      { label: "C. La durée minimale d’engagement dans la SCPI", value: "C", points: 0 },
    ],
  },
  {
    id: 'q10_demembrement',
    question: "Une SCPI peut-elle être détenue en démembrement (nue-propriété / usufruit) ?",
    type: 'choix_unique',
    options: [
      { label: "A. Non, ce n’est possible que pour des biens immobiliers en direct", value: "A", points: 0 },
      { label: "B. Oui, et c’est une stratégie patrimoniale souvent utilisée", value: "B", points: 3 },
      { label: "C. Oui, mais uniquement dans le cadre d’une succession", value: "C", points: 0 },
    ],
  },
];

const results = [
  {
    min: 0,
    max: 7,
    label: "Débutant",
    imageSrc: "/debutant.jpg",
    description: "Félicitations, vous avez fait le premier pas ! L'univers des SCPI peut sembler complexe, mais vous avez le bon état d'esprit. Pour transformer cette curiosité en une stratégie solide, une présentation claire et sans jargon est souvent la meilleure étape. Prenons le temps d'y voir plus clair ensemble.",
  },
  {
    min: 8,
    max: 14,
    label: "Intermédiaire",
    imageSrc: "/intermediaire.jpg",
    description: "Excellent score ! Vous avez clairement de bonnes bases sur le fonctionnement des SCPI. Vous êtes à un tournant : celui où l'on passe de la connaissance générale à la stratégie personnalisée (fiscalité, diversification...). Ne laissez pas les détails techniques vous freiner, parlons-en pour affiner votre approche.",
  },
  {
    min: 15,
    max: 21,
    label: "Avancé",
    imageSrc: "/avance.jpg",
    description: "Bravo, votre maîtrise du sujet est impressionnante ! Vous comprenez non seulement le fonctionnement, mais aussi les opportunités et les limites des SCPI. Notre discussion ne portera pas sur les bases, mais sur l'optimisation fine : comment intégrer au mieux cet outil dans votre stratégie patrimoniale globale ? Challengeons nos idées.",
  },
];

export const configSCPI: QuestionnaireConfig = {
  id: 'scpi',
  titre: 'Testez vos connaissances sur les SCPI',
  stockageId: 'reponses_scpi_TEST',
  questions: questions,
  results: results,
};