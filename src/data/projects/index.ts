import { sistemaCollecting } from './sistema-collecting';
import { elCanario } from './el-canario';
import { kodatek } from './kodatek';
import { Project } from './types';

export const projects: Project[] = [
  sistemaCollecting,
  elCanario,
  kodatek
];

export { sistemaCollecting, elCanario, kodatek };
export type { Project, ProjectTranslations } from './types';
