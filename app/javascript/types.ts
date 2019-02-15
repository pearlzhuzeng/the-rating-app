export interface IRecipeSortingCriteria {
  averageOverallScore: number
  averageTasteScore: number
  averageAppearanceScore: number
  averageEaseScore: number
  averageTimeScore: number
  averageCostScore: number
}

export interface IRecipe extends IRecipeSortingCriteria {
  param: string
  title: string
  detail: string
  numberOfReviews: number
}

export interface IReview {
  param: string
  name: string
  taste: Rating
  appearance: Rating
  ease: Rating
  time: Rating
  cost: Rating
  comment: string
}

export enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}
