import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

var FavoritesList = (props) => {
  return (
    <div>
      <h3 class="ui header">Favorites List</h3>
      <div class="ui grid">
        {props.favoriteList.map((recipe) =>
          <ul>
            <RecipeEntry recipe={recipe}
            onRecipeClick = {props.onRecipeClick}
            />
          </ul>
        )}
      </div>
    </div>
  );
}

export default FavoritesList;