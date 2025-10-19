export interface User {
  id: string;
  email: string;
  name: string;
  birthDate: Date;
  birthTime?: string;
  birthLocation?: string;
  timezone?: string;
  subscriptionTier: 'free' | 'basic' | 'pro';
  points: number;
  level: number;
  streak: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Horoscope {
  id: string;
  userId: string;
  date: Date;
  sign: string;
  content: string;
  mood: string;
  luckyNumbers: number[];
  luckyColors: string[];
  compatibility: string;
  createdAt: Date;
}

export interface AngelNumber {
  id: string;
  number: number;
  meaning: string;
  message: string;
  category: 'love' | 'career' | 'spiritual' | 'general';
  createdAt: Date;
}

export interface DestinyNumber {
  id: string;
  userId: string;
  number: number;
  meaning: string;
  traits: string[];
  challenges: string[];
  opportunities: string[];
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  category: string;
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date;
}

export interface Reading {
  id: string;
  userId: string;
  type: 'horoscope' | 'angel_number' | 'destiny_number' | 'compatibility';
  content: string;
  data: Record<string, any>;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  tier: 'basic' | 'pro';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  stripeSubscriptionId?: string;
}

export interface GamificationData {
  userId: string;
  totalPoints: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  badgesEarned: string[];
  lastActiveDate: Date;
}


