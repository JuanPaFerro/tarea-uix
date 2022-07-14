import React, { useContext } from "react";
import { Box, OutlinedInput, Typography } from "@mui/material";
import { Context } from "../../Context/Contex";

const InputContainer = ({ label, placeholder, name, validationObject }) => {
  const { register } = useContext(Context);
  return (
    <Box marginY={3}>
      <Typography variant="subtitle2">{label}</Typography>
      <OutlinedInput
        defaultValue=""
        placeholder={placeholder}
        {...register(name, { ...validationObject })}
        sx={{
          width: "100%",
          height: "45px",
          marginTop: "10px",
          borderColor: "#e4e4e4",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
};

export default InputContainer;