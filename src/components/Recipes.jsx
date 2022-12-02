const Recipes = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <img src={recipe.image} alt={`Recipe ${recipe.id}`} />
            <h2>{recipe.name}</h2>
            <div>
              <p>{recipe.rating}</p>
              <p>{recipe.time}</p>
              <div>
                {recipe.keywords.map((keyw) => {
                  return <p>{`${keyw}#`}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Recipes;
