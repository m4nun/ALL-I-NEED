# Building AI Browser Agents - Course Summary

**Course URL:** https://learn.deeplearning.ai/courses/building-ai-browser-agents/
**Instructors:** Div Garg & Naman Garg (Co-founders of AGI Inc.)
**Platform:** DeepLearning.AI
**Partner:** AGI Inc. (MultiOn)

---

## Lesson 1: Introduction (2m)

**Instructors:** Andrew Ng (host), Div Garg & Naman Garg

- AI browser/web agents can log into websites, fill out forms, click through web pages, and place online orders autonomously
- Agents use **two types of information**: visual (screenshots) and structural (HTML/DOM)
- The action space at each step is enormous - any error can have unintended consequences (wrong flights, random products)
- Errors compound quickly when agents run long sequences
- **AgentQ** is introduced as the core solution framework combining:
  - **Monte Carlo Tree Search (MCTS)** - exploring decision spaces
  - **Self-critic mechanism** - continuous improvement through feedback
  - **Direct Preference Optimization (DPO)** - RL algorithm refining the policy model
- Course builds: simple web agent → autonomous web agent → MCTS implementation → AgentQ + MCTS for web search

---

## Lesson 2: Intro to Web Agents (11m)

**Real-World Demo:** Agent ordering "Radical Candor" and "The Cold Start Problem" on Amazon - navigates, searches, adds to cart without human intervention

**Definition:** A web agent is an autonomous software program that performs tasks automatically on our behalf

**Applications:**
- Online search beyond simple queries
- E-commerce assistance (finding products, completing purchases)
- Social media management (monitoring, automated posting)
- Data analysis across multiple platforms
- Customer support automation
- Cloud booking and planning
- Specialized applications in finance, healthcare

**5 Essential Modules of Web Agents:**
1. **User Interface Module** - natural language communication
2. **Control Module** - the brain, handles reasoning and decision-making
3. **Knowledge Base** - stores data, rules, and information
4. **Communication Module** - manages interactions with websites, APIs, systems
5. **Data Processing Module** - analyzes, processes, transforms data

**3 Specialized Components:**
1. **Parsers** - systematically extract website data, interpret HTML
2. **Action Models** - decision-making, predicts actions to take
3. **Executors** - execute specific actions (clicks, form filling)

**Process Flow:**
Human request → Agent understands → Personalizes approach → Action model analyzes website → Predicts optimal action → Executes on website → Cycle repeats until task complete

**HTML Elements Agents Interact With:** Links, text areas, checkboxes, radio buttons, dropdown menus, buttons, text input fields

**4 Steps of Agent Execution:**
1. **Planning** - determining what actions to take
2. **Reasoning** - making decisions based on available information (most error-prone)
3. **Environmental Actions** - executing planned actions
4. **Explanations** - communicating what was done and why

**Key Challenges:**
- Reliability issues
- Compounding errors
- Agents getting stuck in loops
- Incorrect reasoning leads to bad decisions

---

## Lesson 3: Building a Simple Web Agent (7m) - WITH CODE

**Goal:** Build a "learning recommender agent" that scrapes DeepLearning.AI website

**Libraries Used:**
- Pandas (data manipulation)
- playwright.asyncio (browser automation)
- OpenAI (LLM integration)
- web client (HTTP requests)
- image library / IPython (display screenshots)

**Step-by-Step Implementation:**

1. **Initialize OpenAI client** with API key (gpt-4o-mini model)
2. **Create Web Scraper Agent:**
   - Initialize browser for HTML scraping
   - Take screenshots, convert to buffer
   - Close browser when done
3. **Define Structured Data Format:**
   - Course title, description, presenter, image URL, course URL
4. **System Prompt Design:**
   - Act as web scraping agent
   - Extract relevant info from HTML to JSON
   - Return only specified fields
   - Output only JSON format
5. **Web Scraper Pipeline:**
   - Get HTML content → Take screenshot → Process with LLM → Return structured response

**Example 1: Get All Courses**
- Target URL: DeepLearning.AI courses page
- Instruction: "get all the courses"
- Result: Structured JSON with all courses (title, description, presenter, image URL, course URL)
- Visualized with `visualize_course()` function

**Example 2: Filter by Topic**
- Read course descriptions, let LLM understand content
- Filter to only courses about "Retrieval Augmented Generation (RAG)"
- Result: Only RAG-related courses returned

**Challenge Demonstration:**
- Complex instruction: "get summary and learnings"
- Agent failed - returned ALL courses instead of following instructions correctly
- Key insight: Agents need to understand tasks well and generalize, not overfit

**Lesson Takeaways:**
- Built a simple web scraping agent with structured output
- Identified challenges: unclear instructions, agents lacking capability to follow complex tasks

---

## Lesson 4: Building an Autonomous Web Agent (9m) - WITH CODE

**Goal:** Build an agent that executes multiple tasks simultaneously - navigating, taking actions, summarizing pages, filling forms, signing up for newsletters

**Technology:** MultiOn web agent client

**Code Implementation:**

1. **Import MultiOn client** and utility functions (visualize session, session manager, image utils, step header)
2. **Initialize MultiOn Agent:**
   - Load API key
   - Create MultiOn client
   - Create session with starting URL + screenshots enabled
   - Close sessions and navigate to URLs
3. **Execute Tasks:**
   - Give task instructions
   - Single step or continuous multi-step execution
   - Agent instructions: "Do not ask questions, complete task to best of abilities"
4. **Actions:** Click, tag, submit, scroll, trigger
5. **Max steps limit:** Configurable (e.g., 10 steps)

**Demo 1: List All Courses**
- Agent scrolls page to load more content
- Follows multiple steps to reach end of page
- Final response: conversational listing of all courses
- If structured output needed, can instruct to return JSON/markdown

**Demo 2: Custom Browser UI**
- Create own browser UI with session manager
- Instructions: Find course on subject → Open it → Summarize → Get detailed lessons
- Variables: subject (RAG), name (Div Garg), email (info@theagi.company)

**Demo 3: Subscribe to Newsletter**
- Go to DeepLearning.AI homepage
- Subscribe to "The Batch" Newsletter
- Fill name, email, select dropdown values
- Guidelines: Select proper dropdown values, click subscribe button when visible

---

## Lesson 5: Agent Q (8m)

**Purpose:** Framework designed to teach AI agents how to self-correct

**Problems Addressed from Lesson 1:**
1. Reliability and trust
2. Decision-making errors
3. Plan divergence and looping

**4 Core Methodologies of Agent Q:**

### 1. Monte Carlo Tree Search (MCTS)
- Search methodology for exploring decision spaces
- Allows planning several steps ahead
- Process:
  - **Root node** = current situation
  - **Selection** - follow best path using exploitation strategy
  - **Expansion** - create new possibilities at uncharted nodes
  - **Simulation** - predict expected future reward (Monte Carlo estimate)
  - **Back-propagation** - update knowledge based on results
- Repeats many times, agent gets smarter, focuses on promising paths

### 2. Self-Critique Mechanism
- Uses an LLM critic to give feedback and improve reasoning
- Critic analyzes: current state, user request, relevant information
- Provides detailed feedback ranking each option
- Example (restaurant booking): "First go to OpenTable homepage → search restaurant → select date and time"

### 3. Direct Preference Optimization (DPO)
- RL algorithm that improves based on current experience
- Creates preference data from MCTS + self-critic comparisons
- Fine-tunes policy model to favor actions leading to better outcomes

### 4. Reinforcement Learning from Human Feedback (RLHF)
- AI learns to make better decisions by incorporating human judgments
- Training through ongoing feedback and guidance

**Real-World Example:** Booking a restaurant reservation on OpenTable
- MCTS + self-critic → creates preference data
- DPO fine-tunes the model
- Policy is updated to favor best-ranked actions

---

## Lesson 6: Deep Dive into AgentQ and MCTS (9m) - WITH CODE

**Grid World Implementation:**

**Setup:**
- Grid with start state (green, cell 7,6), end state (red, cell 2,4)
- Walls/obstacles marked with "W"
- Agent can travel North, South, East, West
- Goal: shortest path from start to end

**Code Implementation:**
1. **Import packages** - MCTSGridWrapper, DFS algorithm, grid visualization
2. **Create initial grid state:**
   - 0 = traversable path
   - 2 = starting position
   - 3 = end state
3. **Define boundaries** and plot graph

**MCTS Parameters:**
- Low weight: 1.0
- High weight: 3.0
- 5 explorations
- ~1000 iterations
- MCTSGridWrapper in utils file handles execution and collects optimal routes

**Results Visualization:**
- Heatmap of visited states for different exploration weights
- Weight 1.8: starts at initial state, reaches end state
- Darker colors = higher Q-value (more optimal path)
- Brighter/yellow = lower Q-value (less optimal)
- Agent avoids paths with lowest Q-values

**Convergence Behavior:**
- Model initially explores larger paths
- Converges to shortest path possible
- Final Q-value approaches ~0.8

**Browser MCTS (AgentQ in browser):**
- **State representation:** DOM + URL + Objective
- **Actions:** Clicking, typing, navigation → state transitions
- **Process:**
  1. Initialize world model
  2. Selection phase
  3. Expansion phase
  4. Simulation phase
  5. Back-propagation phase

---

## Lesson 7: Future of AI Agents (5m)

**Key Factors Driving AI Agent Proliferation:**

1. **Technological Advancements:**
   - Specialized hardware (GPUs, storage computing)
   - Larger models running complex agents
2. **Computational & Algorithm Innovation:**
   - Foundation for planning and acting autonomously
   - New advancements in LLMs
3. **Data Availability:**
   - Large diverse datasets for learning complex patterns
   - Open data initiatives and large-scale platforms

**Current Challenges:**

1. **Lack of Uniformity** - diverse frameworks, no interoperability
2. **Fragmented Ecosystem** - multiple systems, hard integration
3. **Evaluation Methods Fall Short:**
   - Need deterministic environments for consistent evaluation
   - Need realistic interactions (loading errors, latency, pop-ups)
   - Need comprehensive metrics (outcomes + navigation ability)

**REAL Benchmark (Realistic Evaluation for Agents Leaderboard):**
- Provides deterministic yet realistic playground
- Models real-world browser experiences
- Tests: information retrieval, transaction operations
- Establishes baselines for browser agent models

**Multi-Agent Systems:**
- Manager agent oversees multiple specialized worker agents
- Challenges:
  1. **Coordination complexity** - ensuring coherent behavior without centralized oversight
  2. **Communication overhead** - complex protocols for effective collaboration
  3. **Security concerns** - maintaining system integrity, preventing malicious behavior

**Multi-Agent Architectures:**
- Senior supervisor model
- LLM for tool-calling
- Network-based architecture
- Custom multi-agent workflows
- Hierarchy-based systems

**Future Research Directions:**
1. Hybrid architectures (centralized + decentralized)
2. Advanced communication protocols
3. Decentralized multi-agent systems in different domains (collaborative robotics, sensing, simulations)

---

## Lesson 8: Conclusion (1m)

**Course Recap:**
1. Fundamentals of web agents - what they are and how they work
2. Building simple web agents - scraping with structured output
3. Building autonomous web agents - MultiOn, multi-task execution
4. AgentQ - MCTS + self-critic + DPO for self-correction
5. Future trajectory - REAL benchmark, multi-agent systems

**Final Message:** Looking forward to seeing what you build on your own.

---

## Quiz (Graded - 10m)
*Requires course enrollment/free trial to access.*
