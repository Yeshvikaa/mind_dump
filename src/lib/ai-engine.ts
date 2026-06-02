export const analyzeThought = async (text: string) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const cleanText = text.trim();
  if (!cleanText) return null;

  const result = {
    tasks: [] as string[],
    ideas: [] as string[],
    worries: [] as string[],
    goals: [] as string[],
    reminders: [] as string[],
  };

  // Human-style keyword groups
  const keywords = {
    tasks: [
      'need to',
      'have to',
      'must',
      'finish',
      'complete',
      'submit',
      'call',
      'send',
      'fix',
      'buy',
      'prepare',
      'work on',
      'meeting'
    ],

    ideas: [
      'idea',
      'what if',
      'maybe',
      'could',
      'imagine',
      'thought',
      'build',
      'create',
      'design',
      'app',
      'project'
    ],

    worries: [
      'worried',
      'stress',
      'stressed',
      'overwhelmed',
      'fear',
      'anxious',
      'scared',
      'problem',
      'issue',
      'nervous',
      'not sure',
      'concern'
    ],

    goals: [
      'want to',
      'dream',
      'goal',
      'future',
      'one day',
      'become',
      'achieve',
      'learn',
      'grow',
      'improve'
    ],

    reminders: [
      "don't forget",
      'remember',
      'remind me',
      'tomorrow',
      'next week',
      'schedule',
      'at',
      'on'
    ]
  };

  const lowerText = cleanText.toLowerCase();

  // Helper function
  const extractMatches = (list: string[]) =>
    list.some((keyword) => lowerText.includes(keyword));

  // TASKS
  if (extractMatches(keywords.tasks)) {
    result.tasks.push(cleanText);
  }

  // IDEAS
  if (extractMatches(keywords.ideas)) {
    result.ideas.push(cleanText);
  }

  // WORRIES
  if (extractMatches(keywords.worries)) {
    result.worries.push(cleanText);
  }

  // GOALS
  if (extractMatches(keywords.goals)) {
    result.goals.push(cleanText);
  }

  // REMINDERS
  if (extractMatches(keywords.reminders)) {
    result.reminders.push(cleanText);
  }

  // Smart fallback
  if (
    !result.tasks.length &&
    !result.ideas.length &&
    !result.worries.length &&
    !result.goals.length &&
    !result.reminders.length
  ) {
    if (
      lowerText.includes('need') ||
      lowerText.includes('should') ||
      lowerText.includes('have to')
    ) {
      result.tasks.push(cleanText);
    } else {
      result.ideas.push(cleanText);
    }
  }

  return result;
};
