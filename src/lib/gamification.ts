// Gamification system for user engagement
export interface PointsSystem {
  dailyLogin: number;
  readingCompleted: number;
  articleRead: number;
  communityPost: number;
  socialShare: number;
  streakBonus: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  category: string;
}

export class GamificationService {
  private pointsSystem: PointsSystem = {
    dailyLogin: 10,
    readingCompleted: 25,
    articleRead: 15,
    communityPost: 20,
    socialShare: 30,
    streakBonus: 5
  };

  private badges: Badge[] = [
    {
      id: 'first_steps',
      name: 'First Steps',
      description: 'Complete your first reading',
      icon: '🌟',
      pointsRequired: 25,
      category: 'beginner'
    },
    {
      id: 'daily_oracle',
      name: 'Daily Oracle',
      description: 'Check your horoscope for 7 consecutive days',
      icon: '🔮',
      pointsRequired: 100,
      category: 'consistency'
    },
    {
      id: 'spiritual_seeker',
      name: 'Spiritual Seeker',
      description: 'Read 10 educational articles',
      icon: '📚',
      pointsRequired: 150,
      category: 'learning'
    },
    {
      id: 'community_guide',
      name: 'Community Guide',
      description: 'Make 5 helpful posts in the community',
      icon: '👥',
      pointsRequired: 200,
      category: 'community'
    },
    {
      id: 'cosmic_master',
      name: 'Cosmic Master',
      description: 'Reach 1000 total points',
      icon: '⭐',
      pointsRequired: 1000,
      category: 'achievement'
    }
  ];

  calculatePoints(action: keyof PointsSystem, streak: number = 0): number {
    const basePoints = this.pointsSystem[action];
    const streakBonus = streak > 0 ? this.pointsSystem.streakBonus * streak : 0;
    return basePoints + streakBonus;
  }

  checkBadgeEligibility(userPoints: number, userActions: Record<string, number>): Badge[] {
    return this.badges.filter(badge => {
      if (userPoints >= badge.pointsRequired) {
        return true;
      }
      
      // Check specific action-based badges
      switch (badge.id) {
        case 'daily_oracle':
          return userActions.dailyReadings >= 7;
        case 'spiritual_seeker':
          return userActions.articlesRead >= 10;
        case 'community_guide':
          return userActions.communityPosts >= 5;
        default:
          return false;
      }
    });
  }

  calculateLevel(totalPoints: number): number {
    // Level calculation: every 100 points = 1 level
    return Math.floor(totalPoints / 100) + 1;
  }

  getLevelBenefits(level: number): string[] {
    const benefits: Record<number, string[]> = {
      1: ['Basic horoscopes', 'Daily affirmations'],
      2: ['Angel number interpretations', 'Basic numerology'],
      3: ['Destiny number analysis', 'Lucky number generator'],
      4: ['Dream interpretation', 'Moon phase guidance'],
      5: ['Advanced compatibility reports', 'Personalized rituals'],
      10: ['Priority support', 'Exclusive content'],
      20: ['Beta feature access', 'Community moderator privileges']
    };

    return benefits[level] || ['Standard features'];
  }

  generateDailyChallenge(): string {
    const challenges = [
      'Share your daily horoscope with a friend',
      'Write in your spiritual journal',
      'Try a new meditation technique',
      'Learn about your moon sign',
      'Practice gratitude for 5 minutes',
      'Explore your birth chart',
      'Connect with the community',
      'Set an intention for the day'
    ];

    return challenges[Math.floor(Math.random() * challenges.length)];
  }
}


