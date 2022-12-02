import star from "../assets/Images/star.png";
import clock from "../assets/Images/clock.png";

const Recipes = ({ recipes }) => {
  return (
    <div className="cards">
      {recipes.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} alt={`Recipe ${recipe.id}`} />
            <h3 className="recipeName">{recipe.name}</h3>
            <div className="desc">
              <p className="recipeRating">
                <img src={star} alt="rate" />
                {recipe.rating}
              </p>
              <p dir="rtl" className="recipeTime">
                <img src={clock} alt="clock" />
                {`${recipe.time} دقیقه`}
              </p>
            </div>
            <div className="recipeKeywords">
              {recipe.keywords.map((keyw) => {
                return <p key={keyw}>{`${keyw}#`}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Recipes;
