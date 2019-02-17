import React, { useState } from 'react'
import { Link, RouteComponentProps } from '@reach/router'

import styled, { css } from '../typed/styled-components'

import { IRecipe, IRecipeSortingCriteria } from '../types'

type Props = RouteComponentProps & {
  recipes: IRecipe[]
}

type SortingCriterion = keyof IRecipeSortingCriteria
const SORTING_CRITERIA: Map<SortingCriterion, string> = new Map([
  ['averageOverallScore' as SortingCriterion, 'Overall'],
  ['averageTasteScore' as SortingCriterion, 'Taste'],
  ['averageAppearanceScore' as SortingCriterion, 'Appearance'],
  ['averageCostScore' as SortingCriterion, 'Cost'],
  ['averageEaseScore' as SortingCriterion, 'Ease'],
  ['averageTimeScore' as SortingCriterion, 'Time'],
])

export default function AllRecipes({ recipes }: Props) {
  const [sortingCriterion, setSortingCriterion] = useState<SortingCriterion>(
    'averageOverallScore'
  )

  return (
    <Main>
      <h1>Recipes</h1>

      <p>
        Sort by scores:
        {Array.from(SORTING_CRITERIA.entries(), ([criterion, label]) => (
          <SortingCriterion
            active={sortingCriterion === criterion}
            onClick={() => setSortingCriterion(criterion)}
          >
            {label}
          </SortingCriterion>
        ))}
      </p>

      <RecipesContainer>
        {recipes
          .sort(
            (a: IRecipe, b: IRecipe) =>
              b[sortingCriterion] - a[sortingCriterion]
          )
          .map(recipe => (
            <RecipeItem key={recipe.param}>
              <RecipeBox to={`/recipes/${recipe.param}`}>
                <GeneralInfo>
                  <div>
                    <Title>{recipe.title}</Title>
                    <ReviewsLink>
                      {recipe.numberOfReviews <= 1
                        ? `${recipe.numberOfReviews} review`
                        : `${recipe.numberOfReviews} reviews`}
                    </ReviewsLink>
                  </div>
                  <Score>
                    {recipe[sortingCriterion].toFixed(2)}
                    <br />
                    <span>
                      avg. {SORTING_CRITERIA.get(sortingCriterion)} score
                    </span>
                  </Score>
                </GeneralInfo>

                <Snippet>{truncation(recipe.detail)}…</Snippet>
              </RecipeBox>
            </RecipeItem>
          ))}
      </RecipesContainer>
    </Main>
  )
}

function truncation(content: string) {
  return content.length < 131 ? content : content.substr(0, 130)
}

const Main = styled.main`
  background-color: ${p => p.theme.primaryColor};
`

const SortingCriterion = styled.button<{ active: boolean }>`
  display: inline-block;
  margin-right: 0.4em;
  margin-bottom: 0.3em;
  padding: 0.2em 0.5em 0.3em 0.6em;
  font-size: 0.9em

  &:first-child {
    margin-left: 0.5em;
  }

  ${p =>
    p.active &&
    css`
      background-color: #136d88;
      color: white;
      transition: all 0.1s;
    `}
`

const RecipesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 2em;
  padding-left: 0;
`
const RecipeItem = styled.li`
  list-style: none;
  background-color: #fffffe;
  border-radius: 5px;
  padding: 20px;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.1s ease 0.1s;
  }
`

const RecipeBox = styled(Link)`
  text-decoration: none;
`

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  text-transform: capitalize;
  font-family: 'Merriweather', serif;
  margin: 0;
  font-size: 1.1em;
`

const ReviewsLink = styled.div`
  font-size: 0.8em;
  margin-top: 0.2em;
`

const Snippet = styled.p`
  color: black;
`

const Score = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 0;
  line-height: 0.8em;
  color: #d89229;

  span {
    font-size: 0.5em;
    text-transform: lowercase;
    line-height: 0;
  }
`
