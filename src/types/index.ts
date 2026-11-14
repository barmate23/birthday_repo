export interface StoryMemory {
  id: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  imageUrl: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  tag?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'him' | 'her';
  text: string;
  time: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  quote?: string;
}
