export interface ShippedArtifact {
    title: string;
    category: 'DEFI' | 'PREDICTION_MARKETS' | 'INFRASTRUCTURE' | 'DEV_TOOLS';
    repoUrl: string;
    liveUrl: string;
    technicalBreakthrough: string;
    blockerEncounteredAndResolved: string;
    unitTestsCount: number;
}
export interface TrainingWeekReflection {
    week: number;
    sessionTheme: string;
    keyLearning: string;
    shippedProject: ShippedArtifact;
    reflectionDate: string;
}
export interface ColosseumReadinessScore {
    technicalBreadth: number;
    testCoverageReliability: number;
    mainnetExecutionSpeed: number;
    overallReadinessScore: number;
    shippedProjectsCount: number;
}
