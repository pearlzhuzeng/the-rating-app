export interface IRecipe {
  param: string
  title: string
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
