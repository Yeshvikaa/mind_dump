export const analyzeThought = async (text: string) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const cleanText = text.trim();
  if (!cleanText) return null;

  // Split by sentences (roughly)
  const sentences = cleanText.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 3);

  const result = {
    tasks: [] as string[],
    ideas: [] as string[],
    worries: [] as string[],
    goals: [] as string[],
    reminders: [] as string[],
  };

  // Keywords for classification
  const keywords = {
    tasks: ['do', 'buy', 'call', 'send', 'fix', 'finish', 'complete', 'email', 'start', 'meeting'],
    ideas: ['maybe', 'could', 'how about', 'idea', 'project', 'thought', 'imagine', 'creative', 'app'],
    worries: ['worried', 'stress', 'fear', 'anxious', 'problem', 'scared', 'issue', 'not sure', 'nervous'],
    goals: ['want to', 'achieve', 'become', 'learn', 'grow', 'future', 'dream', 'target', 'habit'],
    reminders: ['don\'t forget', 'remember', 'at', 'on', 'tomorrow', 'next week', 'reminder', 'schedule'],
  };

  sentences.forEach((sentence) => {
    const lower = sentence.toLowerCase();
    
    // Ignore simple greetings or very short filler
    if (['hi', 'hello', 'hey', 'thanks', 'ok', 'yes', 'no'].includes(lower)) return;

    if (keywords.tasks.some(k => lower.includes(k))) {
      result.tasks.push(sentence);
    } else if (keywords.reminders.some(k => lower.includes(k))) {
      result.reminders.push(sentence);
    } else if (keywords.worries.some(k => lower.includes(k))) {
      result.worries.push(sentence);
    } else if (keywords.goals.some(k => lower.includes(k))) {
      result.goals.push(sentence);
    } else if (keywords.ideas.some(k => lower.includes(k))) {
      result.ideas.push(sentence);
    } else {
      // Default to tasks if it sounds like an action, otherwise idea
      if (lower.startsWith('i need to') || lower.startsWith('must')) {
        result.tasks.push(sentence);
      } else {
        result.ideas.push(sentence);
      }
    }
  });

  return result;
};
