  import * as React from "react";
  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import Box from "@mui/material/Box";
  
  function TabCategory({categories, selected, setSelected}) {
    function handleChange(event, newValue) {
      setSelected(newValue);
    }
  
    React.useEffect(() => {
    }, []);
  
    return (
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={selected}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary"
        >
          {categories.map((category) => {
            return (
              <Tab key={category.id} value={category.id} label={category.name} />
            );
          })}
        </Tabs>
      </Box>
    );
  }
  
  export default TabCategory;
  