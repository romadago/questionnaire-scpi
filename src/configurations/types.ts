// Fichier : src/configurations/types.ts

// On s'assure que chaque option peut avoir des points.
export interface Option {
  label: string;
  value: string;
  points: number; 
}

// On ajoute l'ID unique et obligatoire à chaque question. C'est la correction principale.
export interface Question {
  id: string; 
  question: string;
  type: 'choix_unique' | 'choix_multiple';
  options: Option[];
}

// On s'assure que chaque résultat a bien une tranche de score (min/max).
export interface Result {
    min: number;
    max: number;
    label: string;
    description: string;
    imageSrc: string;
}

// La configuration globale du questionnaire reste la même.
export interface QuestionnaireConfig {
  id: string;
  titre: string;
  stockageId: string;
  questions: Question[];
  results: Result[];
}