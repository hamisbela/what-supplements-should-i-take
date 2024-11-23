export interface Supplement {
  id: string;
  name: string;
  brand: string;
  price: number;
  type: 'Protein' | 'Pre-Workout' | 'BCAA' | 'Creatine' | 'Weight-Loss' | 'Recovery' | 'Health';
  features: string[];
  bestFor: string[];
  dosage: string;
  servings: number;
  form: 'Powder' | 'Capsule' | 'Tablet' | 'Liquid' | 'Gummy';
  dietary: string[];
  imageUrl: string;
  amazonUrl: string;
  description: string;
}

export const supplementData: Supplement[] = [
  {
    id: 'optimum-whey',
    name: 'Gold Standard Whey',
    brand: 'Optimum Nutrition',
    price: 32,
    type: 'Protein',
    features: ['24g Protein', 'Fast Absorption', '5.5g BCAAs', 'Easy Mixing'],
    bestFor: ['muscle-gain', 'recovery', 'post-workout'],
    dosage: '1 scoop (30g)',
    servings: 30,
    form: 'Powder',
    dietary: ['Gluten-Free', 'Low-Carb'],
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80',
    amazonUrl: 'https://amazon.com',
    description: 'Industry-leading whey protein for muscle recovery and growth.'
  },
  {
    id: 'cellucor-c4',
    name: 'C4 Original',
    brand: 'Cellucor',
    price: 29,
    type: 'Pre-Workout',
    features: ['Caffeine', 'Beta-Alanine', 'Creatine Nitrate', 'CarnoSyn'],
    bestFor: ['energy', 'focus', 'performance'],
    dosage: '1 scoop (6g)',
    servings: 30,
    form: 'Powder',
    dietary: ['Sugar-Free', 'Gluten-Free'],
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80',
    amazonUrl: 'https://amazon.com',
    description: 'Popular pre-workout for enhanced energy and performance.'
  },
  {
    id: 'muscletech-creatine',
    name: 'Platinum Creatine',
    brand: 'MuscleTech',
    price: 20,
    type: 'Creatine',
    features: ['100% Pure', 'Micronized', 'Fast Absorption'],
    bestFor: ['strength', 'muscle-gain', 'performance'],
    dosage: '1 teaspoon (5g)',
    servings: 80,
    form: 'Powder',
    dietary: ['Vegan', 'Gluten-Free', 'Unflavored'],
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80',
    amazonUrl: 'https://amazon.com',
    description: 'Pure micronized creatine for strength and muscle gains.'
  },
  {
    id: 'ghost-bcaa',
    name: 'BCAA',
    brand: 'Ghost',
    price: 35,
    type: 'BCAA',
    features: ['7g BCAAs', '2:1:1 Ratio', 'Hydration Blend'],
    bestFor: ['recovery', 'endurance', 'muscle-retention'],
    dosage: '1 scoop (12g)',
    servings: 30,
    form: 'Powder',
    dietary: ['Vegan', 'Sugar-Free', 'Natural Flavors'],
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80',
    amazonUrl: 'https://amazon.com',
    description: 'Premium BCAAs for improved recovery and endurance.'
  },
  {
    id: 'jym-post',
    name: 'Post JYM',
    brand: 'JYM Supplement Science',
    price: 40,
    type: 'Recovery',
    features: ['BCAAs', 'Glutamine', 'Creatine HCL', 'Beta-Alanine'],
    bestFor: ['recovery', 'muscle-growth', 'post-workout'],
    dosage: '1 scoop (23g)',
    servings: 30,
    form: 'Powder',
    dietary: ['Gluten-Free', 'Informed-Choice Certified'],
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80',
    amazonUrl: 'https://amazon.com',
    description: 'Complete post-workout recovery formula.'
  }
];

export const budgetRanges = {
  budget: { min: 0, max: 25, label: 'Budget-Friendly' },
  midRange: { min: 26, max: 45, label: 'Mid-Range' },
  premium: { min: 46, max: 70, label: 'Premium' },
  luxury: { min: 71, max: Infinity, label: 'Luxury' }
};

export const recommendSupplement = (
  budget: keyof typeof budgetRanges,
  needs: string[],
  preferences: string[]
): Supplement[] => {
  const budgetRange = budgetRanges[budget];
  
  const filtered = supplementData
    .filter(supplement => {
      // Budget check
      if (supplement.price < budgetRange.min || supplement.price > budgetRange.max) return false;
      
      // Needs and preferences
      const hasMatchingUse = supplement.bestFor.some(use => 
        [...needs, ...preferences].includes(use)
      );
      
      return hasMatchingUse;
    })
    .sort((a, b) => {
      // Sort by matching features count
      const aMatches = a.bestFor.filter(use => 
        [...needs, ...preferences].includes(use)
      ).length;
      const bMatches = b.bestFor.filter(use => 
        [...needs, ...preferences].includes(use)
      ).length;
      
      return bMatches - aMatches;
    });

  // Always return exactly 3 supplements
  if (filtered.length >= 3) {
    return filtered.slice(0, 3);
  }
  
  // If we have fewer matches, add more supplements from the same budget range
  const remaining = supplementData
    .filter(supplement => 
      supplement.price >= budgetRange.min && 
      supplement.price <= budgetRange.max &&
      !filtered.includes(supplement)
    )
    .sort((a, b) => b.price - a.price);

  return [...filtered, ...remaining].slice(0, 3);
};