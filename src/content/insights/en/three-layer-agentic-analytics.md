---
translationKey: three-layer-agentic-analytics
lang: en
title: My 3-layer agentic analytics workflow
description: A practical workflow combining a voice assistant, an autonomous agent and an interactive agent, with human review at the center.
publishedAt: 2026-11-09
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7525471465912250368/
topics: [AI agents, Analytics operations]
reproduced: true
image: /images/insights/three-layer-agentic-analytics.webp
imageAlt: "Diagram of a three-layer agentic analytics workflow: a voice assistant, autonomous agent and interactive agent collaborate through a task queue, with a human retaining control and reviewing production changes."
imageWidth: 800
imageHeight: 1000
---

I started using AI agents for analytics back in spring, but only recently moved to autonomous ones. Why? I need to stay in control, and analytics is a data-driven process: the next step often becomes clear only as you go.

My setup is now a 3-layer process:

1. Voice assistant (Claude). I use it to brainstorm objectives and tasks and to review results from other agents. It’s connected to the company task manager, Slack, and the inter-agent task queue, where it assigns work to other agents, colleagues, and me.
2. Autonomous agent (Codex). It monitors the task queue, delivers prototypes, and reports back to the queue. It’s connected to the DB, BI, Airflow, Dockhand, Slack, Git, and other tools. It deploys only to sandbox environments, never to production.
3. Interactive agent (Codex). This is my hands-on tool. I use it to review and correct the results of the autonomous agent and of colleagues, and to do the work myself: data exploration, coding, BI, ETL, and almost the entire technical side of analytics.

I’ve used the interactive agent since spring, and it significantly raised my throughput. Adding the voice layer made the autonomous one possible: tasks became better defined, and so ready for longer working cycles. Still, control stays with me, especially for high-stakes changes to long data pipelines.
