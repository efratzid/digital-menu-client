import axios from "axios";
import * as React from "react";
import TabCategory from "./tabCategory";
import Dishes from "./dishes";

function Category() {
  const [categories, setCategories] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

  function getCategories() {
    axios.get(`https://digitalmenu1.agreeablesea-cecdd17c.northeurope.azurecontainerapps.io/categories`).then((response) => {
      setCategories(response.data);
      setSelected(response.data.length > 0 ? response.data[0].id : false);
    });
  }

  React.useEffect(() => {
    getCategories();
  }, []);

  function showDishes() {
    if (selected !== false) {
      return <Dishes categoryId={selected} />;
    }
  }

  return (
    <div dir="rtl">
      <TabCategory
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />
      {showDishes()}
    </div>
  );
}

export default Category;
