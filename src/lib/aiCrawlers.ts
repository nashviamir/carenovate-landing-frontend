// Known AI crawlers by purpose, used to build robots.txt from the
// "AI crawlers" policy in SEO Settings.

/** Collect content to train AI models. Blocking them doesn't affect search. */
export const AI_TRAINING_CRAWLERS = [
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'cohere-ai',
];

/** Fetch pages to answer users in AI search/assistants (cite and link to you). */
export const AI_ANSWER_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'MistralAI-User',
];
