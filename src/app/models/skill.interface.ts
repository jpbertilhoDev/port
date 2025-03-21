export interface Skill {
  id: number;
  name: string;
  level: number; // 1-5 ou 1-100
  category: 'frontend' | 'backend' | 'other';
  icon?: string;
}