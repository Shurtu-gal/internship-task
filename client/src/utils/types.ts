export interface Material {
  name: string;
  quantity: number;
}

export interface Step {
  stepNumber: number;
  image?: string;
  step?: string;
}

export interface Subject {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Experiment {
  id: string;
  title: string;
  description?: string;
  difficulty?: number;
  subjectID: string[];
  categoryID: string[];
  image?: string;
  materials: Material[];
  steps: Step[];
  precautions?: string[];
  subjects?: Subject[];
  categories?: Category[];
}
