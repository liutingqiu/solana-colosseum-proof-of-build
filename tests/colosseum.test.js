// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { ColosseumReadinessEngine, FOUR_WEEK_CURRICULUM } from '../dist/index.js';

test('1. FOUR_WEEK_CURRICULUM validates 4 complete chronological training milestones', () => {
  assert.equal(FOUR_WEEK_CURRICULUM.length, 4);

  const dates = FOUR_WEEK_CURRICULUM.map(c => c.reflectionDate);
  assert.deepEqual(dates, ['2026-09-18', '2026-09-25', '2026-10-02', '2026-10-09']);

  FOUR_WEEK_CURRICULUM.forEach((milestone, idx) => {
    assert.equal(milestone.week, idx + 1);
    assert.ok(milestone.keyLearning.length > 50, 'Learning must be substantive');
    assert.ok(milestone.shippedProject.repoUrl.startsWith('https://github.com/liutingqiu/'));
    assert.ok(milestone.shippedProject.liveUrl.startsWith('https://liutingqiu.github.io/'));
    assert.ok(milestone.shippedProject.unitTestsCount >= 6);
  });
});

test('2. ColosseumReadinessEngine computes weighted readiness score across shipped projects', () => {
  const readiness = ColosseumReadinessEngine.calculateReadiness();

  assert.equal(readiness.shippedProjectsCount, 4);
  assert.equal(readiness.technicalBreadth, 100);
  assert.equal(readiness.testCoverageReliability, 100);
  assert.ok(readiness.overallReadinessScore >= 95);
});
