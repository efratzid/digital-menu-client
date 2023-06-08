import axios from "axios";
import Dishitem from "./dishItem";
import * as React from "react";


function Dishes({ categoryId }) {
  const [dishes, setDishes] = React.useState([]);

  function getDishesByCategory() {
    axios
      .get(`https://digitalmenu1.agreeablesea-cecdd17c.northeurope.azurecontainerapps.io/dishes?category_id=${categoryId}`)
      .then((response) => {
        setDishes(response.data);
      });
  }

  React.useEffect(() => {
    getDishesByCategory();
  }, [categoryId]);

  return (
    <div class="carditem">
      {dishes.map((dish) => {
        return (
            <Dishitem key={dish.id} dish={dish}/>
        )
      })}
    </div>
  );
}

export default Dishes;
