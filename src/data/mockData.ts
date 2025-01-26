// src/data/mockData.ts
import { Mood, Circle, MoodPost } from '../types';

export const MOODS: Mood[] = [
 { id: 1, emoji: '😊', label: 'Happy' },
 { id: 2, emoji: '🥲', label: 'Sad' },
 { id: 3, emoji: '😎', label: 'Cool' },
 { id: 4, emoji: '😡', label: 'Angry' },
 { id: 5, emoji: '🥳', label: 'Party' },
];

export const CIRCLES: Circle[] = [
 { id: 1, name: 'Family' },
 { id: 2, name: 'Close Friends' },
 { id: 3, name: 'Coworkers' },
];

export const MOCK_FEED: MoodPost[] = [
 { id: 1, user: 'Sarah', mood: '😊', circle: 'Family', time: '5m ago' },
 { id: 2, user: 'John', mood: '😎', circle: 'Close Friends', time: '15m ago' },
 { id: 3, user: 'Maya', mood: '🥳', circle: 'Coworkers', time: '30m ago' },
];