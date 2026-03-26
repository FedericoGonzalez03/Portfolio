import { sistemaCollecting } from './sistema-collecting';
import { lacteosUruguay } from './lacteosuruguay';
import { kodatek } from './kodatek';
import { ortegaConstrucciones } from './ortega-construcciones';
import { Project } from './types';

export const projects: Project[] = [
  sistemaCollecting,
  lacteosUruguay,
  kodatek,
  ortegaConstrucciones
];

export { sistemaCollecting, lacteosUruguay, kodatek, ortegaConstrucciones };
export type { Project, ProjectTranslations } from './types';
