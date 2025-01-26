export interface Mood {
    id: number;
    emoji: string;
    label: string;
  }
  
  export interface Circle {
    id: number;
    name: string;
  }
  
  export interface MoodPost {
    id: number;
    user: string;
    mood: string;
    circle: string;
    time: string;
  }