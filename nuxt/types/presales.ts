interface CircusPerformance {
  collectionId: string;
  collectionName: string;
  created: string;
  date: string;
  updated: string;
  id: string;
  specialPerformance: boolean;
}

interface CircusPresale {
  name: string;
  email: string;
  regularCards: number;
  discountCards: number;
  performance: null | CircusPerformance;
}

export type { CircusPerformance, CircusPresale };
