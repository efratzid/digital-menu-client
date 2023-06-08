import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Dishitem({ dish }) {
  return (
    <div style={{padding:"10px"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={dish.imageUrl} title="image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dish.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ₪{dish.price}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default Dishitem;
