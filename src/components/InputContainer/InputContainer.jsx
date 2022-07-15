import React, { useContext } from "react";
import { Box, OutlinedInput, Typography, InputAdornment } from "@mui/material";
import { Context } from "../../Context/Contex";

const InputContainer = ({ fieldName, placeholder, name, validationObject }) => {
  const { register, errors } = useContext(Context);
  return (
    <Box marginY={3}>
      <Typography variant="subtitle2">{fieldName}</Typography>
      <OutlinedInput
        defaultValue=""
        placeholder={placeholder}
        {...register(name)}
        sx={{
          width: "100%",
          height: "45px",
          marginTop: "10px",
          borderColor: "#e4e4e4",
          borderRadius: "5px",
        }}
        endAdornment={
          name === "spaceURL" && (
            <InputAdornment position="end">.dofleini.com</InputAdornment>
          )
        }
      />
      <Box
        sx={{
          backgroundColor: "#ff000099",
          borderRadius: "5px",
          marginTop: "5px",
          display: errors[name]?.message ? "flex" : "none",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <Typography variant="body2" fontWeight="medium" color="white">
          {errors[name]?.message}
        </Typography>
      </Box>
    </Box>
  );
};

export default InputContainer;
