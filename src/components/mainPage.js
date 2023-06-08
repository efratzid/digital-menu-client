import { Typography, Button } from "@mui/material";

function MainPage() {
  return (
    <div dir="rtl">
      <h3 className="centered-text">ברוכים הבאים למסעדה</h3>
      <br />
      <Button href="/dishes" variant="" class="button">
        לתפריט
      </Button>
    </div>
  );
}

export default MainPage;
