import { TrainingWeekReflection, ColosseumReadinessScore } from '../types.js';
export declare const FOUR_WEEK_CURRICULUM: TrainingWeekReflection[];
export declare class ColosseumReadinessEngine {
    static calculateReadiness(reflections?: TrainingWeekReflection[]): ColosseumReadinessScore;
}
