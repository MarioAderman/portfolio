import deepCriticalImg from '../assets/DeepCritical.jpeg'
import inventoryImg from '../assets/Inventory.png'
import bullImg from '../assets/Bull.jpg'
import cashyImg from '../assets/Cashy.webp'
import advisorImg from '../assets/Advisor.webp'

export const projects = [
  {
    id: 1,
    title: "DeepCritical: Multi-LLM Provider Support",
    description: "Added infrastructure for multiple LLM providers (vLLM, Llama.cpp, TGI) using Pydantic-AI wrappers and Hydra configs. Enables local LLM integration for scientific research ecosystems. Built with Claude Code, Context7 MCP, and DeepWiki.",
    image: deepCriticalImg,
    gradient: "from-[#667eea] to-[#764ba2]",
    links: [
      { label: "View PR →", url: "https://github.com/DeepCritical/DeepCritical/pull/92", primary: true },
      { label: "GitHub →", url: "https://github.com/DeepCritical/DeepCritical", primary: false },
    ]
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Full-stack inventory system for local store with FIFO stock logic, dark mode, and PostgreSQL database. Features optimized DB schema design and RESTful API architecture. Built with React.js, TailwindCSS, Express.js using Windsurf and GitHub Copilot.",
    image: inventoryImg,
    gradient: "from-[#f093fb] to-[#f5576c]",
    links: [
      { label: "View Demo →", url: "https://inventory-system-rust-three.vercel.app", primary: true },
      { label: "GitHub →", url: "https://github.com/MarioAderman/inventory-system", primary: false },
    ]
  },
  {
    id: 3,
    title: "CTGAN Portfolio Optimization Replication",
    description: "Active development replicating 'A Modified CTGAN-Plus-Features Based Method for Optimal Asset Allocation'. Implemented modular architecture for data generators, optimization algorithms, and visualization pipelines. Built with Python using Claude Code.",
    image: bullImg,
    gradient: "from-[#4facfe] to-[#00f2fe]",
    links: [
      { label: "View Code →", url: "https://github.com/MarioAderman/ctgan-portfolio-research", primary: true },
      { label: "View Paper →", url: "https://arxiv.org/abs/2302.02269", primary: false },
    ]
  },
  {
    id: 4,
    title: "Cashy Financial Advisor",
    description: "Active development of AI agent for personal finance planning. Features natural language queries to PostgreSQL database, budget tracking/analysis, and financial planning recommendations. POC built with LangFlow supporting OpenAI and Anthropic LLMs. Built using Claude Code.",
    image: cashyImg,
    gradient: "from-[#43e97b] to-[#38f9d7]",
    links: [
      { label: "View Code →", url: "https://github.com/MarioAderman/financial-advisor", primary: true },
    ]
  },
  {
    id: 5,
    title: "LLM Advisor",
    description: "MVP tool for recommending optimal LLMs based on user context and task requirements. Features user profiling, task-specific model recommendations with specs, and integrated feedback system. Full-stack app with React, TypeScript, Vite, FastAPI, and PostgreSQL. Built using Windsurf.",
    image: advisorImg,
    gradient: "from-[#fa709a] to-[#fee140]",
    links: [
      { label: "View Demo →", url: "https://llm-advisor-cl1bz0m9n-mario-adermans-projects.vercel.app", primary: true },
      { label: "GitHub →", url: "https://github.com/MarioAderman/llm-advisor", primary: false },
    ]
  },
]
