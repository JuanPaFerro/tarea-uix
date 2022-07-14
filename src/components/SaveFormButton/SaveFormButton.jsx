import React, { useContext } from "react";
import { Button, darken, Typography } from "@mui/material";
import { Context } from "../../Context/Contex";

const SaveFormButton = () => {
  const {spaceColor } = useContext(Context);
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        textTransform: "none",
        backgroundColor:spaceColor,
        ":hover": {
          backgroundColor: darken(spaceColor, 0.1),
        },
      }}
    >
      <Typography variant="body2" fontWeight="light">
        Guardar cambios
      </Typography>
    </Button>
  );
};

export default SaveFormButton;
