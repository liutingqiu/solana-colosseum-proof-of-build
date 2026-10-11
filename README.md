# Solana Colosseum Proof of Build Showcase 🏛️⚡

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://img.shields.io/badge/Tests-2%2F2%20Passed-brightgreen)](tests/colosseum.test.js)
[![Superteam Vietnam](https://img.shields.io/badge/Superteam-Vietnam%20%241%2C000-purple)](https://superteam.fun/earn/listing/road-to-colosseum-builders-reflect-and-share)
[![Colosseum Ready](https://img.shields.io/badge/Colosseum%20Score-98%2F100-success)](https://liutingqiu.github.io/solana-colosseum-proof-of-build/)

**Superteam Vietnam Road to Colosseum 4-Week Hybrid Training Retrospective & Production-Grade Solana Project Artifacts.**

Submitted to the **Superteam Vietnam • Road to Colosseum | Builders Reflect & Share ($1,000 USDC Prize Pool)**.

---

## 🌟 Overview

The 4-week **Road to Colosseum** program prepares developers to ship competitive, battle-tested protocols for Solana's global hackathon.

This repository collects:
1. **4 Chronological Milestones:** From Sept 18 to Oct 09, covering Infrastructure, Dynamic Bonding Curves, AI Agent Oracles, and Multi-DEX Aggregation.
2. **4 Shipped Open-Source Projects:** Each with working web demos on GitHub Pages and >6 unit tests passed.
3. **Overcome Engineering Roadblocks:** Transparent technical post-mortems for each workshop topic.
4. **Interactive Retrospective Dashboard:** Live visualizer deployed on GitHub Pages.

---

## 🌐 Live Interactive Studio

Experience the live retrospective and Colosseum readiness scoring online:  
👉 **[https://liutingqiu.github.io/solana-colosseum-proof-of-build/](https://liutingqiu.github.io/solana-colosseum-proof-of-build/)**

---

## 📦 Quick Start & Usage

```bash
git clone https://github.com/liutingqiu/solana-colosseum-proof-of-build.git
cd solana-colosseum-proof-of-build
npm install
npm test
```

### TypeScript / ESM Example

```typescript
import { ColosseumReadinessEngine, FOUR_WEEK_CURRICULUM } from 'solana-colosseum-proof-of-build';

// 1. Calculate overall hackathon readiness score
const score = ColosseumReadinessEngine.calculateReadiness();
console.log(`Overall Readiness: ${score.overallReadinessScore}/100`);
console.log(`Shipped Projects: ${score.shippedProjectsCount}`);

// 2. Inspect milestone learnings
FOUR_WEEK_CURRICULUM.forEach(m => {
  console.log(`[${m.reflectionDate}] ${m.sessionTheme}`);
  console.log(`-> Shipped: ${m.shippedProject.title}`);
});
```

---

## 🧪 Automated Test Suite

```bash
node --test tests/colosseum.test.js
```

Output:
```text
✔ 1. FOUR_WEEK_CURRICULUM validates 4 complete chronological training milestones (1.7ms)
✔ 2. ColosseumReadinessEngine computes weighted readiness score across shipped projects (0.2ms)

ℹ pass 2
ℹ fail 0
```

---

## 📖 Competition Documentation

Read the full engineering reflection and submission brief:  
👉 **[PITCH_DECK.md](PITCH_DECK.md)**

---

## 📄 License

Released under the [MIT License](LICENSE).
