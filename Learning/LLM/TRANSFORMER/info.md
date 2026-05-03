# How Transformer LLMs Work

**Course:** DeepLearning.AI Short Course
**Instructors:** Jay Alammar, Maarten Grootendorst
**Duration:** 1 Hour 34 Minutes
**Level:** Beginner
**Format:** 13 Video Lessons + 2 Code Examples + 1 Quiz

---

## What You'll Learn

- Key components of transformers: tokenization, embeddings, self-attention, and transformer blocks
- Recent transformer improvements: KV cache, multi-query attention, grouped query attention, sparse attention
- Tokenization strategies used in modern LLMs
- Transformers in the Hugging Face Transformers library

---

## Full Transcripts

### Lesson 1: Introduction (Video - 5 mins)

Welcome to How Transformer LLMs Work. In this course, you learn about the main components of the LLM transformer architecture that has transformed the field of language processing.

The transformer architecture was first introduced in the 2017 paper, "Attention is All You Need" by Ashish Vaswani and others for machine translation tasks. The idea was to input an English sentence and have the network output a German sentence. The same architecture tends to be great at inputting a prompt and outputting a response to that prompt.

The original transformer architecture consisted of two main parts: an encoder and a decoder. Consider translating English into German: the encoder preprocesses the entire input English text to extract the context needed to perform the translation. Then the decoder uses the encoder context to generate the German.

- **Encoder model** provides rich, context-sensitive representations of the input text, and is the basis for BERT and most embedding models used in RAG applications.
- **Decoder model** performs text generation tasks such as summarizing, writing code, answering questions, and is the basis for most popular LLMs (OpenAI, Anthropic, Cohere, Meta).

**Three main stages of a transformer:**
1. Tokenization and embedding - maps each input token into an embedding vector
2. Stack of transformer blocks - each block has an attention layer and a feed-forward network
3. Language modeling head - generates the output token

**Key insight:** The magic of LLMs comes from two parts: (1) The transformer architecture, and (2) All the incredibly rich data that the models learn from.

---

### Lesson 2: Language as a Bag-of-Words (Video - 5 mins)

The evolution of how language has been represented numerically:
- **Bag-of-Words** - represents words as large sparse vectors recording word presence
- **Word2Vec** - word representations capture meaning in context of a few neighboring words
- **Transformers** - dense vectors capture meaning in context of a sentence or paragraph

**Non-transformer models** (bag-of-words, Word2Vec) lack contextualized representations but are good baselines.

**Encoder-only models** - great at representing language in numerical representations (e.g., BERT)
**Decoder-only models** - generative in nature, used for text generation (e.g., GPT)
**Encoder-Decoder models** - attempt to get the best of both worlds

**Bag-of-Words process:**
1. Split text into words (tokenization)
2. Create a vocabulary of all unique tokens
3. Count how often each token appears in the input
4. The result is a vector representation (list of numerical values)

---

### Lesson 3: (Word) Embeddings (Video - 5 mins)

Bag-of-Words ignores the semantic meaning of text. Released in 2013, **Word2Vec** was one of the first successful attempts at capturing meaning in embeddings.

Word2Vec:
- Trained on vast amounts of textual data (like Wikipedia)
- Uses neural networks with interconnected layers of nodes (parameters/weights)
- Generates embeddings by looking at which words tend to appear next to each other
- During training, the model predicts whether pairs of words are likely neighbors
- Embeddings capture properties: e.g., "cats" scores high on "animal" and "plural", low on "newborn" and "fruit"

**Key concepts:**
- **Dimensions** - number of values/properties an embedding has (can be 1000+)
- **Properties are not explicitly known** - they're learned through complex mathematical calculations
- Similar words group together; different words are further apart

**Types of embeddings:**
- **Word embeddings** - individual words
- **Token embeddings** - subword pieces (e.g., "vocalization" → "vocal" + "ization")
- **Sentence embeddings** - averaged token embeddings for entire sentences
- **Document embeddings** - for longer texts

---

### Lesson 4: Encoding and Decoding Context with Attention (Video - 5 mins)

Word2Vec creates **static embeddings** - the same embedding for "bank" regardless of context (financial bank vs. river bank).

**Recurrent Neural Networks (RNNs)** model sequences and are used for:
- **Encoding** - representing an input sentence
- **Decoding** - generating an output sentence

**Autoregressive generation:** Each step consumes all previously generated words. The model generates one token at a time, appending it to the input.

**Problem:** A single context embedding fails to capture the entire context of long/complex sequences.

**2014 Solution: Attention**
- Allows the model to focus on relevant parts of the input sequence
- Selectively determines which words are most important
- Words with similar meaning have higher attention weights
- Hidden states of all input words are passed to the decoder instead of a single context embedding
- The sequential nature of RNNs precludes parallelization during training

---

### Lesson 5: Transformers (Video - 7 mins)

The "Attention Is All You Need" paper introduced the **Transformer architecture** based solely on attention without RNNs. This allows parallel training.

**Architecture:**
- Stacked encoder and decoder blocks, each with the same attention mechanism
- Stacking amplifies the strength of the encoder and decoders

**Encoder process:**
1. Input converted to embeddings (random values, not Word2Vec)
2. Self-attention processes and updates embeddings with contextualized information
3. Feedforward neural network creates final contextualized token embeddings

**Self-attention:** Processes only one sequence (the inputs) by comparing it to itself.

**Decoder process:**
1. Previously generated words go through masked self-attention
2. Intermediate embeddings passed to another attention network with encoder embeddings
3. Output passed to neural network, generates next word

**Masked self-attention:** Removes values from the upper diagonal, so any token can only attend to tokens before it (prevents information leaking).

**BERT (2018)** - Bidirectional Encoder Representations from Transformers
- Encoder-only architecture
- Uses a CLS (classification) token as representation for the entire input
- Trained with masked language modeling (predict randomly masked words)
- Two-step training: pre-training + fine-tuning

**GPT (Generative Pre-Trained Transformer):**
- Decoder-only architecture (generative)
- Uses masked self-attention passed to a neural network
- First implementation: GPT-1

**Context length:** The number of tokens currently being processed. GPT-1 had max 512 tokens.

**Model scale evolution:**
- GPT-1: 100M+ parameters
- GPT-2: 1B+ parameters
- GPT-3: 175B parameters

---

### Lesson 6: Tokenizers (Video with Code - 11 mins)

Tokenization breaks down text into **tokens** (words or word pieces).

**Process:**
1. Input text is tokenized (encoded) into smaller pieces
2. Each token has an associated fixed ID
3. IDs are fed to the language model which creates token embeddings
4. Output is another token ID, decoded to represent an actual word

**Tokenization levels:**
- **Word tokens** - entire words
- **Subword tokens** - words or pieces (most common in LLMs)
- **Character tokens** - one per character
- **Bytes** - smallest representation, encodes single character

**Special tokens:**
- **[CLS]** - Classification token, represents the entire input
- **[SEP]** - Separation token, signifies end of a sentence
- **[UNK]** - Unknown token, used when tokenizer doesn't know a token

**Code example (HuggingFace Transformers):**
```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
tokens = tokenizer("hello world!")
# Decodes to: [CLS], hello, world, !, [SEP]
```

**Tokenizers compared:**
- **BERT** - vocabulary ~30,000, uses subword tokens, has CLS/SEP tokens
- **GPT-4 (Tiktoken)** - vocabulary ~100,000, fewer tokens needed, no CLS/SEP tokens

**Trade-off:** Larger vocabulary = easier to represent uncommon tokens, but more embeddings need to be calculated.

---

### Lesson 7: Architectural Overview (Video - 6 mins)

**Three major components of a transformer:**
1. **Tokenizer** - breaks down text into tokens
2. **Stack of transformer blocks** - where the vast majority of computation happens
3. **Language Modeling head** - produces output tokens

**Token embeddings:** If vocabulary has 50,000 tokens, the model has 50,000 vectors representing each token.

**Language Modeling Head:**
- Performs token probability calculation
- Scores each token with a probability percentage
- **Decoding strategies:**
  - **Greedy decoding** - always pick highest probability token (temperature = 0)
  - **Top P sampling** - incorporates multiple tokens for more natural text

**Parallelization:** Transformers process all input tokens in parallel (unlike RNNs). The number of tracks = context size of the model.

**KV Caching:** After the first generation step, calculations can be cached to speed up generation. This is called KV (Key-Value) caching.
- **Time to First Token (TTFT)** - how long the model takes to process the initial prompt
- Subsequent tokens use cached calculations for faster generation

---

### Lesson 8: The Transformer Block (Video - 6 mins)

The transformer block has **two major components:**
1. **Self-attention layer**
2. **Feed-forward neural network layer**

**Feed-Forward Neural Network:**
- Stores information and statistics about likely next words
- Example: "Shawshank" → "redemption" (statistically likely from training data)
- Structure: expands to a larger layer, then shrinks back down
- Connections (dense layers) are where model knowledge is stored

**Self-Attention:**
- Allows the model to attend to previous tokens and incorporate context
- Solves coreference resolution (e.g., "the dog chased the llama because **it**..." - what does "it" refer to?)
- Bakes representation of relevant tokens into the current token's vector

**Two steps of self-attention:**
1. **Relevance scoring** - assigns scores to how relevant each input token is
2. **Combining information** - combines relevant information into the current vector

---

### Lesson 9: Self-Attention (Video - 10 mins)

**Self-attention happens within an attention head** using three matrices:
1. **Query projection matrix (Q)**
2. **Key projection matrix (K)**
3. **Value projection matrix (V)**

**Relevance scoring step:**
- Query represents the current position
- Keys represent other tokens in the sequence
- Matrix multiplication: queries × keys = relevance scores
- Scores add up to 100%

**Information combination step:**
- Each token has a values vector
- Multiply each token's score by its value vector
- Sum up all weighted values

**Multi-head attention:** The same operation happens in parallel across multiple attention heads, each with its own Q, K, V weight matrices.

**Efficiency improvements:**

1. **Multi-Query Attention** - all attention heads share the same keys and values matrices (fewer parameters, faster)
2. **Grouped Query Attention** - multiple keys/values but fewer groups than attention heads (better results than multi-query)
3. **Sparse Attention** - not all layers allow attending to all previous tokens; some layers only attend to recent N tokens (e.g., last 4, 16, or 32)
   - **Strided attention** - look back at last few positions plus specific positions
   - **Fixed attention** - fixed positions in context that can be attended to
4. **Ring Attention** - enables 100K+ or 1M+ token context sizes

**Reading model architecture tables (e.g., Llama 3.1 8B):**
- 32 layers (transformer blocks)
- 4096 model dimension (vector length)
- Feedforward dimension: 14336
- 32 attention heads
- 8 key-value heads (grouped query attention)
- Vocabulary: 128,000 tokens
- Positional embeddings: RoPE (Rotary Position Embeddings)

---

### Lesson 10: Model Example (Video with Code - 9 mins)

**Using HuggingFace Transformers with Phi-3-mini:**
```python
from transformers import pipeline

model_id = "microsoft/Phi-3-mini-4k-instruct"
pipe = pipeline("text-generation", model=model_id, tokenizer=model_id)
pipe.model.config.max_new_tokens = 50
pipe.model.config.do_sample = False  # greedy decoding

prompt = "Write an email apologizing to Sarah for the tragic gardening mishap."
output = pipe(prompt)
```

**Model architecture structure (printed from HuggingFace):**
- Phi-3 for Causal Language Modeling (decoder model)
- Inside the model:
  - **Model** (the transformer layers)
  - **Token embeddings** matrix - 32,000 tokens × 3072 dimensions
  - **32 decoder transformer layers** with:
    - Self-attention (with rotary embeddings)
    - MLP (Multi-Layer Perceptron) / Feedforward neural network
    - Projects up to 16,384 dimensions, then down to 3,072
    - Activation function + layer normalization
  - **Language modeling head** - outputs vector of dimension 3,072

---

### Lesson 11: Recent Improvements (Video - 10 mins)

**Original transformer (2017) vs. Modern transformer (2024):**

| Component | Original 2017 | Modern 2024 |
|-----------|---------------|-------------|
| Architecture | Encoder-Decoder | Mostly Decoder-only |
| Positional info | Positional encoding at beginning | Rotary embeddings at self-attention level |
| Layer normalization | After self-attention/FFN | Before self-attention/FFN (Pre-LN) |
| Attention | Full attention | Grouped query attention |
| Residual connections | Present | Present (skip connections) |

**Rotary Position Embeddings (RoPE):**
- Positional information added at the self-attention level
- Better at representing relative positions

**Training efficiency - packing:**
- Naive approach: pad short documents to fill context window (wasteful)
- Efficient approach: pack multiple documents into one context window

**KV Cache optimization:**
- During generation, the model recalculates attention for all previous tokens each step
- KV cache stores computed Key and Value matrices from previous steps
- Trade-off: faster generation vs. more memory usage

---

### Lesson 12: Mixture of Experts (MoE) (Video - 9 mins)

**MoE replaces the single feedforward neural network** in the decoder block with multiple "expert" networks.

**Two main components:**
1. **Experts** - multiple feedforward neural networks (not specialized in domains, but learn syntactic information like punctuation, verbs, conjunctions)
2. **Router** - a smaller feedforward network that creates probability scores for each expert

**How it works:**
1. Input flows through the MoE layer
2. Router assigns probability scores to each expert
3. One or more top experts are selected (others remain unactivated = **sparse model**)
4. Selected experts process the input
5. Output is a weighted mean of expert outputs (higher probability = bigger say)

**Parameters in MoE:**
- **Sparse parameters** - all parameters loaded in memory (all experts)
- **Active parameters** - only those actually used during inference

**Benefit:** Computational efficiency - only a subset of experts activates per input, despite having many total parameters.

**Drawback:** Memory requirements are high because all experts must be loaded.

---

### Lesson 13: Conclusion (Video - 1 min)

That's it. Congratulations! You now have a solid understanding of large language models and transformers. You can now see LLMs as more than a black box, and this will help you use them more effectively.

---

### Lesson 14: Quiz

**Attempts:** 3 left (3 attempts every 24 hours)
**Passing score:** 50/70 points earned

**Question 1 (10 pts):** Which of the following best describes the main components and architectural principles of transformer-based large language models (LLMs)?

1. Word segmentation, one-hot encodings, recurrent neural networks, and a decoder module.
2. Tokenization, static word embeddings, recurrent attention layers, and a context output layer.
3. **Tokenization, embeddings, stacked transformer blocks (with attention and feedforward layers), and a language modeling head.** ✓
4. Tokenization, embeddings, convolutional layers, and a sequence classification head.

**Question 2 (10 pts):** How does tokenization prepare text for processing by a language model?

1. Divides text into paragraphs, assigns each a frequency score, and encodes them as matrices.
2. Splits text into words, tags each token with a part-of-speech label, and encodes as one-hot vectors.
3. **Breaks text into tokens, assigns each a unique ID, and represents them as vectors for model processing.** ✓
4. Separates text into sentences, gives each a category label, and stores them as lists.

*Note: Remaining quiz questions locked behind membership.*

---

## Key Topics Summary

| Topic | Key Points |
|-------|------------|
| **Bag-of-Words** | Sparse vectors, counts word presence, no semantics |
| **Word2Vec** | Neural network embeddings, learned from word neighbors, static |
| **RNN with Attention** | Sequential encoding/decoding, attention for context, no parallelization |
| **Transformer** | Parallel processing, stacked encoder/decoder blocks, self-attention |
| **Self-Attention** | Q/K/V matrices, relevance scoring + information combination, multi-head |
| **Multi-Query Attention** | Shared K/V across heads, faster but less expressive |
| **Grouped Query Attention** | Fewer K/V groups than heads, balance of speed and quality |
| **Sparse Attention** | Attend to subset of history, enables longer contexts |
| **KV Cache** | Caches computed K/V matrices, speeds up generation |
| **Rotary Embeddings (RoPE)** | Positional info at attention level |
| **Mixture of Experts** | Multiple FFN experts + router, sparse activation |
| **Tokenization** | Word/subword/character/byte, [CLS]/[SEP]/[UNK] tokens |

---

## Key Papers Referenced

- **2014:** "Neural Machine Translation by Jointly Learning to Align and Translate" (Bahdanau attention)
- **2017:** "Attention Is All You Need" (Vaswani et al. - Original Transformer)
- **2018:** "BERT: Pre-training of Deep Bidirectional Transformers" (Devlin et al.)
- **2018:** "Improving Language Understanding by Generative Pre-Training" (GPT-1)
- **2022:** "Training Data-Efficient Language Models with Mixture of Experts" (MoE)
- **2024:** "The Llama 3 Herd of Models" (Meta - Llama 3.1)
