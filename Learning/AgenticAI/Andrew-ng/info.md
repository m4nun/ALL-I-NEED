# Agentic AI — Course Transcripts & Insights

**Instructor:** Andrew Ng  
**Platform:** DeepLearning.AI  
**Duration:** ~4.5 hours across 5 modules

---

## Module 1: Introduction to Agentic Workflows

### 1.1 Welcome!

**Transcript Summary:**
Andrew Ng introduces the course by addressing the hype around "agentic AI." He notes that marketers grabbed the term and put it on everything, causing hype to skyrocket. However, the number of truly valuable applications built using agentic AI has also grown rapidly. Agentic workflows are being used to build customer support agents, deep research reports, legal document processing, and medical diagnosis assistance.

The key differentiator between people who build agentic workflows effectively vs. those who struggle is the ability to drive a **disciplined development process focused on evals and error analysis**. This course teaches best practices for building agentic AI applications, which Andrew considers one of the most important and valuable skills in AI today.

> "Knowing how to build applications with agentic workflows is one of the most important and valuable skills in AI today."

**Key Insight:** Don't get distracted by the hype — focus on the disciplined process of building, evaluating, and iterating.

---

### 1.2 What Is Agentic AI?

**Transcript Summary:**
Andrew contrasts one-shot LLM prompting with agentic workflows. One-shot prompting is like asking someone to write an essay from first word to last without ever using backspace. Humans don't write their best work that way, and neither do LLMs — yet they do surprisingly well.

In contrast, an **agentic workflow** iterates:
1. Write an essay outline
2. Conduct web research
3. Write the first draft
4. Read and critique the draft
5. Revise based on the critique

The running example is a **research agent** that plans research, calls web search APIs, downloads pages, synthesizes findings, drafts outlines, has an editor review for coherence, and generates a comprehensive markdown report.

> "An agentic AI workflow is a process where an LLM-based app executes multiple steps to complete a task."

**Key Insight:** The core skill is decomposing complex tasks into smaller steps that can each be executed by an LLM, code, or a function call.

---

### 1.3 Degrees of Autonomy

**Transcript Summary:**
Andrew explains why he coined the term "agentic" — to move past the binary debate of "is it a true agent or not?" Systems can be agentic to different degrees on a spectrum.

**Notation used throughout the course:**
- Red boxes = user input
- Gray boxes = LLM calls
- Green boxes = software/tool use

**Spectrum of autonomy:**
- **Less autonomous:** Deterministic sequence hard-coded by the programmer. LLM only generates text. The example: generate search terms → hard-coded web search → write essay.
- **Semi-autonomous:** LLM decides which tools to call, but the tool set is predefined.
- **Highly autonomous:** LLM decides the sequence of steps, may even write new functions or create tools.

Most valuable applications today sit on the less-to-semi-autonomous end. Highly autonomous agents are harder to control and more unpredictable.

> "Instead of arguing over which word to include or exclude as being a true agent, let's acknowledge the different degrees to which systems can be agentic."

---

### 1.4 Benefits of Agentic AI

**Transcript Summary:**
Andrew presents data from the HumanEval coding benchmark:
- GPT-3.5 one-shot: 40%
- GPT-4 one-shot: 67%
- GPT-3.5 with agentic workflow: much higher (beats GPT-4 one-shot)

**Three key benefits:**

1. **Performance:** The improvement from one model generation to the next is dwarfed by wrapping the older model in an agentic workflow.

2. **Parallelism:** An agentic workflow can have three LLMs generate search terms in parallel, fetch nine web pages simultaneously, then synthesize — much faster than a human reading sequentially.

3. **Modularity:** Components can be swapped independently — try different search engines (Google, Bing, DuckDuckGo, Tavily), different LLMs, different tools — without rebuilding the whole system.

> "The improvement from one generation of model to another is huge, but still not as big a difference as implementing an agentic workflow on the previous generation."

---

### 1.5 Agentic AI Applications

**Transcript Summary:**
Andrew walks through four application examples of increasing difficulty:

**1. Invoice Processing** (simplest — clear process)
- Convert PDF to text
- LLM verifies it's an invoice
- Extract fields (biller, address, amount due, due date)
- API call to update database

**2. Customer Order Inquiry** (clear process)
- Extract order details from email
- Look up orders database
- Draft response for human review

**3. General Customer Service** (more challenging — steps not predetermined)
- Customer asks: "Do you have black jeans or blue jeans?"
- Agent must plan: check inventory for black jeans → check for blue jeans → respond
- Or: "I'd like to return the beach towel I bought" — verify purchase → check return policy → issue return slip

**4. Computer Use** (most difficult)
- Agent navigates a web browser independently
- Example: checking United Airlines flight availability by clicking page elements and filling text fields

---

### 1.6 Task Decomposition

**Transcript Summary:**
Andrew's framework for decomposing tasks:

1. Start with **direct generation** (one step)
2. If quality isn't good enough, **decompose into 2-3 steps** (outline → search → write)
3. If still disjointed, **further decompose** (first draft → reflect → revise)

The key question to ask: *"Can each step be done by an LLM, a short piece of code, a function call, or a tool?"*

**Examples:**
- **Essay writing:** outline (LLM) → search terms (LLM) → write essay (LLM with search results)
- **Customer email:** extract key info (LLM) → query database (LLM + function) → draft response (LLM + API)
- **Invoice processing:** PDF to text (code) → extract fields (LLM) → save to database (API call)

> "As I take a task and decompose it into steps, I'm always asking myself: can each of these steps be done either by an LLM, or by a short piece of code, or by a function call, or by a tool?"

---

### 1.7 Evaluating Agentic AI (Evals)

**Transcript Summary:**
Disciplined evaluation is the biggest predictor of success with agentic workflows.

**The process:**
1. Build a quick prototype
2. Examine outputs manually to discover problems
3. Create evaluations to track those problems

**Objective evals:** Write code to check specific criteria. Example: regex search for competitor names in email outputs.

**Subjective evals:** Use an LLM as a judge. Example: prompt an LLM to rate essay quality on a scale of 1-5. However, LLMs aren't that good at 1-5 ratings — they have position bias and sensitivity to prompt wording.

**Preview of later content:**
- End-to-end evals vs. component-level evals
- Examining intermediate outputs (traces/spans)

> "One of the biggest predictors for whether someone is able to build agentic workflows really well is whether or not they're able to drive a really disciplined evaluation process."

---

### 1.8 Agentic Design Patterns

**Transcript Summary:**
Andrew introduces the four key design patterns for building agentic workflows:

**1. Reflection:** Ask the LLM to examine its own output and iteratively improve. Example: generate code → critique the code → fix the bugs. Can use the same model or a separate "critique agent."

**2. Tool Use:** LLMs can request function calls — web search, code execution, database queries, productivity app APIs. The LLM decides *when* to use tools.

**3. Planning:** The LLM decides the sequence of API calls needed to complete a task. Example from HuggingGPT: "Generate an image where a girl reads a book in the same pose as a boy" → pose detection → image generation → text-to-speech.

**4. Multi-Agent Collaboration:** Multiple LLMs with different personas work together. Example: a coder agent and a critic agent go back and forth to improve code.

---

## Module 2: Reflection Design Pattern

### 2.1 Reflection to Improve Outputs of a Task

**Transcript Summary:**
Just as humans reflect on their drafts, LLMs can do the same. The pattern:
- Generate v1 output
- Feed v1 back with a reflection prompt
- Generate improved v2

**Example — email writing:**
- v1: draft email with typos and vague dates
- Reflect: "Check the tone, verify facts, check dates"
- v2: improved email

**Example — code generation:**
- v1: code with bugs
- Reflect with a reasoning model (good at finding bugs)
- v2: fixed code

**Key insight:** Reflection is **much more powerful** with external feedback. Running the code and feeding error messages back to the LLM gives it new information to reflect on, leading to significantly better improvements.

> "The reflection design pattern isn't magic. It does not make an LLM always get everything right 100% of the time, but it can often give it maybe a modest bump in performance."

> "Reflection is much more powerful when there is new additional external information that you can ingest into the reflection process."

---

### 2.2 Why Not Just Direct Generation?

**Transcript Summary:**
Andrew compares zero-shot prompting (no examples in the prompt) with reflection workflows.

**Data from Madaan et al. research paper:** Across many tasks and models, reflection consistently outperforms zero-shot prompting. The dark bars (with reflection) are consistently higher than light bars (without).

**Practical examples where reflection helps:**
- Validating structured HTML/JSON outputs
- Checking instructions for completeness (e.g., "how to brew the perfect cup of tea")
- Reviewing domain names for unintended meanings or pronunciation issues

**Tips for writing reflection prompts:**
- Clearly indicate you want a review/reflection
- Specify clear criteria (e.g., "check if easy to pronounce," "check for negative connotations")
- Use a different model for reflection than generation if possible

---

### 2.3 Chart Generation Workflow

**Transcript Summary:**
A concrete example: generating a chart comparing Q1 coffee sales for 2024 and 2025.

- v1 code generates a **stacked bar plot** — poor visualization
- Feed both the code AND the resulting plot image into a **multimodal LLM**
- The multimodal LLM uses visual reasoning to critique the chart
- v2 generates a clearer, more pleasing bar graph

**Key insight:** Different LLMs have different strengths. You might use one LLM for initial generation and a different one (e.g., a reasoning model) for reflection.

---

### 2.4 Evaluating the Impact of Reflection

**Transcript Summary:**
Andrew walks through building evals for a reflection workflow using SQL query generation.

**Process:**
1. Collect 10-15 questions with ground-truth answers
2. Run the workflow without reflection — measure accuracy
3. Run with reflection — measure accuracy
4. Compare

**Example results:** Without reflection: 87% correct. With reflection: 95% correct. This quantifies the value of reflection.

**For subjective criteria** (e.g., which chart looks better):
- Use LLM-as-judge, but be aware of **position bias** (LLMs prefer the first option)
- Results are sensitive to prompt wording
- Better approaches are covered in Module 4

---

### 2.5 Using External Feedback

**Transcript Summary:**
Andrew explains why external feedback matters. Pure prompt engineering follows a curve: improve rapidly at first, then **plateau**. Adding reflection gives a bump, but adding external feedback enables a much higher ceiling.

**Examples of external feedback:**
- **Code execution:** Run the code → feed error messages back → LLM fixes bugs
- **Competitor detection:** Regex pattern matching on output → if competitor mentioned, feed back as criticism
- **Fact-checking:** Web search to verify claims → feed snippets back to LLM
- **Word count:** Count words → if over limit, feed count back → LLM tightens the text

> "Reflection with external feedback, if you can get it, is much more powerful than reflection using the LLM as the only source of feedback."

---

## Module 3: Tool Use

### 3.1 What Are Tools?

**Transcript Summary:**
Tools are functions an LLM can request to call. The mechanism:
1. Tool descriptions (name, description, parameters) are provided in the prompt
2. The LLM decides whether to use a tool based on the query
3. If the LLM requests a tool call, your code executes it and returns the result
4. The LLM incorporates the result into its final output

**Key point:** The LLM autonomously decides whether to use tools. For "what time is it?" it calls getCurrentTime. For "how much caffeine in green tea?" it answers directly without the tool.

**Examples:**
- Web search tool for restaurant recommendations
- Database query tool for retail questions
- Calculation tool for interest rates
- Code execution as a general mathematical tool

---

### 3.2 Creating a Tool

**Transcript Summary:**
Andrew explains the underlying process before modern abstractions:

1. Give the LLM a prompt: "To use a tool, output FUNCTION: functionName"
2. The LLM decides when to call a tool and outputs the instruction
3. Your code parses the output, looks for "FUNCTION:", and extracts the function name and arguments
4. Your code calls the actual function and gets the result
5. The result is fed back into the LLM's conversational history
6. The LLM generates the final answer

For functions with arguments (e.g., getCurrentTime with a timezone), the prompt tells the LLM to output "FUNCTION: getCurrentTime Pacific/Auckland" — your code parses both the function name and the argument.

---

### 3.3 Tool Syntax

**Transcript Summary:**
Andrew introduces the modern syntax using the **AISuite** library (open source, similar to OpenAI syntax):

```python
response = client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=[getCurrentTime],  # list of function references
    max_turns=5
)
```

**How it works behind the scenes:**
- AISuite automatically generates a **JSON schema** from the function's docstring and type annotations
- The schema includes: function name, description (from docstring), parameter names, types, and descriptions
- This JSON schema is passed to the LLM so it knows when and how to call the function
- AISuite handles the entire function-calling loop — calling the function and feeding the result back

The `max_turns` parameter (typically set to 5) prevents infinite tool-calling loops.

---

### 3.4 Code Execution

**Transcript Summary:**
Rather than creating a separate tool for every operation (one for add, subtract, multiply, divide, square root, exponentiation, etc.), Andrew recommends letting the LLM **write and execute Python code**.

**Pattern:**
1. Prompt the LLM to write code delimited with tags: `<execute_python>...</execute_python>`
2. Extract the code using pattern matching (regex)
3. Execute the code
4. Return the output to the LLM
5. If execution fails, feed the error message back for iterative debugging

**Security best practice:** Always run LLM-generated code in a **sandbox** (Docker, E2B). Andrew shares a real incident where an agentic coder deleted Python files from a project directory (fortunately backed up on GitHub).

> "I've been a few times now, I've been really surprised and delighted by the cleverness of the code solutions [the LLM] generated."

---

### 3.5 MCP (Model Context Protocol)

**Transcript Summary:**
MCP is an Anthropic-proposed standard (now widely adopted) that solves the **N×M integration problem**:

- Without MCP: M applications integrating with N tools = M×N custom wrappers
- With MCP: M clients + N servers = M+N total work (standard protocol)

**Architecture:**
- **MCP Clients:** Applications that want access to tools/data
- **MCP Servers:** Software wrappers that provide access to tools/data (Slack, GitHub, Google Drive, Postgres, etc.)

**Demo:** A cloud desktop app connected to a GitHub MCP server:
- "Summarize the README from this repo" → MCP server calls getFile → LLM summarizes
- "What are the latest pull requests?" → MCP server calls listPRs → LLM summarizes

MCP covers both **data access** (resources) and **function calling** (tools).

---

## Module 4: Practical Tips for Building Agentic AI

### 4.1 Evaluations (Evals)

**Transcript Summary:**
Andrew's core advice: **build a quick, safe prototype** rather than spending weeks theorizing. Then use evals to drive improvements.

**The eval-driven development process (invoice processing example):**
1. Build a quick system to extract four fields from invoices
2. Examine outputs on 10-20 invoices — discover that due dates are frequently wrong
3. Create an eval: annotate 10-20 invoices with ground-truth due dates
4. Instruct the LLM to output dates in YYYY-MM-DD format
5. Write code to extract dates and compare with ground truth
6. Iterate on prompts and track accuracy improvements

> "It's difficult to know in advance where [the system] will work and where it won't work so well. Build a quick system, look at it, and use that to prioritize."

---

### 4.2 Error Analysis and Prioritizing Next Steps

**Transcript Summary:**
Agentic workflows have many components — guessing which one to improve is inefficient. Andrew's solution: **trace analysis**.

**Traces:** The intermediate outputs after each step in the workflow.

**Process (research agent example):**
1. Find the problem: the agent is "missing key points" in essays
2. Look at traces to identify which component is failing:
   - Search term generation? (Are the search terms good?)
   - Web search engine? (Are the results authoritative?)
   - Article selection? (Did it pick the best articles?)
   - LLM synthesis? (Did it ignore key points?)
3. Have a human expert evaluate each component's output quality
4. Count how often each component produces subpar output
5. Focus effort on the component with the highest error count

**Real example:** The web search engine returned too many blog-level articles instead of scientific sources — pointing to the search engine, not the LLM, as the problem.

---

### 4.3 More Error Analysis Examples

**Transcript Summary:**
Andrew walks through two more examples:

**Invoice processing error analysis:**
- Collect 10-100 invoices where dates were extracted incorrectly
- Categorize: was it a PDF-to-text error or an LLM extraction error?
- Result: LLM extraction caused most errors — focus on improving LLM prompting, not PDF conversion

**Customer email error analysis:**
- Collect examples where final output was unsatisfactory
- Categorize: SQL query error? Database data corruption? Email drafting error?
- Result: 75% of errors came from SQL query generation — improving the query prompt had the highest ROI

> "This is incredibly helpful information to tell you where to focus your efforts."

---

### 4.4 Component-Level Evaluations

**Transcript Summary:**
End-to-end evals are expensive and noisy. **Component-level evals** let you iterate 10× faster.

**Web search example:**
1. Create a list of "gold standard" authoritative URLs for a set of queries
2. Measure the overlap (F1 score) between search results and gold-standard URLs
3. Quickly test: different search engines, different result counts, different date ranges
4. Once the component is optimized, validate with an end-to-end eval

Component evals provide a clearer signal for specific errors and enable parallel team workflows — each team optimizes its own metric.

---

### 4.5 How to Address Problems You Identify

**Transcript Summary:**
Andrew categorizes fixes by component type:

**Non-LLM components (web search, RAG, code execution, ML models):**
- Tune hyperparameters (number of results, similarity threshold, chunk size, detection threshold)
- Replace the component entirely (swap search engines, RAG providers)

**LLM-based components:**
- Improve prompts (add explicit instructions, few-shot examples)
- Try a different LLM (some are better for specific tasks)
- Decompose a complex step into simpler sub-steps
- **Fine-tune** a model (last resort — expensive but can squeeze out last few percent of performance)

> "I tend not to fine-tune a model until I've really exhausted the other options."

---

### 4.6 Latency, Cost Optimization

**Transcript Summary:**
Andrew's priority order: **output quality first → latency → cost**.

**When optimization is needed:**
- **Benchmark each step:** Time each component and calculate per-step cost
- **Identify bottlenecks:** If the final LLM generation takes 18 seconds, try a smaller/faster model
- **Leverage parallelism:** Fetch multiple web pages simultaneously
- **Cost analysis:** Calculate token costs and API fees per component — focus on the most expensive ones

> "Getting the performance or the output quality to be high is usually the hardest part, and then only when it's really working, maybe focus on the other things."

---

### 4.7 Development Process Summary

**Transcript Summary:**
Andrew summarizes the **build-analyze loop**:

1. Build a quick end-to-end system
2. Manually examine outputs and traces
3. Build small evals (10-20 examples)
4. Do error analysis — count error frequencies
5. Build component-level evals for focused optimization
6. Iterate: build → analyze → improve → repeat

**The process is nonlinear** — teams bounce between techniques. Less experienced teams spend too much time building and not enough analyzing.

> "If you're able to implement even a fraction of the ideas from this module, I think you'll be well ahead of the vast majority of developers."

---

## Module 5: Patterns for Highly Autonomous Agents

### 5.1 Planning Workflows

**Transcript Summary:**
Andrew demonstrates how an LLM can generate a step-by-step plan to answer complex queries.

**Example — sunglasses retail store agent:**
- Tools: getItemDescriptions, checkInventory, getItemPrice, checkPastTransactions, processItemReturn, processItemSale
- Query: "Do you have any round sunglasses in stock under $100?"
- LLM-generated plan:
  1. Use getItemDescriptions to find round sunglasses
  2. Use checkInventory to see if they're in stock
  3. Use getItemPrice to filter in-stock items under $100
- Each step is executed by an LLM call with appropriate context

**This is powerful because** the sequence wasn't hard-coded. For a different query (e.g., "return my gold frame glasses"), the LLM would generate a completely different plan.

---

### 5.2 Creating and Executing LLM Plans

**Transcript Summary:**
Andrew recommends **structured formats** for plans — JSON or XML rather than plain text.

**JSON plan example:**
```json
[
  {
    "step": 1,
    "description": "Find round sunglasses",
    "tool": "getItemDescriptions",
    "arguments": { "shape": "round" }
  },
  { "step": 2, ... },
  { "step": 3, ... }
]
```

JSON and XML are more **reliable to parse** than plain text or markdown. The structured output enables downstream code to reliably execute each step.

---

### 5.3 Planning with Code Execution

**Transcript Summary:**
Creating narrow tools for every possible query is **brittle**. Instead, let the LLM write code.

**Example — coffee machine sales analysis:**
- Instead of tools for: getColumnMax, filterRows, getColumnMean, sumRows... (brittle, doesn't cover all queries)
- Let the LLM write Python using pandas:
  - "Which month had the highest sales of hot chocolate?" → pandas: load CSV → filter → group → aggregate
  - "How many unique transactions last week?" → pandas: parse dates → filter → drop duplicates → count

**Code-as-action** gives the LLM access to hundreds of library functions it already knows how to use. Research (Wang et al.) confirms this outperforms tool-only approaches across multiple models.

---

### 5.4 Multi-Agentic Workflows

**Transcript Summary:**
Andrew uses the analogy of hiring a **team** rather than a single person.

**Example — marketing asset creation:**
- **Researcher agent:** Analyzes market trends, researches competitors (tool: web search)
- **Graphic Designer agent:** Creates visualizations, generates images (tools: image APIs, code execution)
- **Writer agent:** Transforms research into report text and marketing copy (no special tools needed)

Each agent is an LLM prompted with a specific persona and tool set. Workflows can be:
- **Linear:** Researcher → Graphic Designer → Writer
- **Hierarchical:** A manager agent coordinates sub-agents

This decomposition mirrors how human teams naturally organize complex work.

---

### 5.5 Communication Patterns for Multi-Agent Systems

**Transcript Summary:**
Andrew covers three communication patterns:

1. **Linear** — most common. A → B → C. Each agent passes output to the next.

2. **Hierarchical** — most common. A manager coordinates specialists. The manager receives results and passes them to the next sub-agent. Can extend to deeper hierarchies (sub-agents calling sub-agents).

3. **All-to-All** — experimental. Any agent can communicate with any other. Agents collaborate until all declare completion. Results are unpredictable but can be creative. Best for applications where some variability is acceptable.

Software frameworks exist to simplify implementing these patterns.

---

### 5.6 Conclusion

**Transcript Summary:**
Andrew wraps up the course:

- **Module 1:** Applications, design patterns overview
- **Module 2:** Reflection — simple performance boost
- **Module 3:** Tool use and code execution
- **Module 4:** Evaluations and error analysis — the most important module
- **Module 5:** Planning and multi-agent systems for highly autonomous agents

Agentic AI skills are increasingly assessed in job interviews. Andrew encourages learners to use these skills responsibly and build amazing applications.

> "With the skills you learn from this course, I think you now know how to build a lot of cool, exciting Agentic AI applications."

---

## Overall Key Insights

1. **Agentic beats one-shot:** Iterative workflows dramatically outperform single-prompt generation — often more than upgrading the model itself.

2. **Four design patterns:** Reflection, Tool Use, Planning, and Multi-Agent collaboration are the building blocks.

3. **Eval-driven development wins:** Build quick, analyze traces, count errors, and let data tell you where to focus. This is the #1 predictor of success.

4. **Code is the ultimate plan:** Letting LLMs write and execute code gives them access to thousands of library functions — far beyond any fixed tool set.

5. **External feedback > reflection alone:** Prompt engineering plateaus; external feedback (error messages, web search results, word counts) breaks through the ceiling.

6. **Start simple, decompose only when needed:** Begin with direct generation, add complexity only when quality metrics demand it.
