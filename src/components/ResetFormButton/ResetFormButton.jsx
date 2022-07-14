import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { Context } from "../../Context/Contex";

const ResetFormButton = () => {
  const { resetForm } = useContext(Context);
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "none",
        border: "1px solid #E4E4E4",
        ":hover": { border: "1px solid #000" },
      }}
      type="reset"
      onClick={resetForm}
    >
      <Typography color="#000" variant="body2">
        Descartar
      </Typography>
    </Button>
  );
};

export default ResetFormButton;
