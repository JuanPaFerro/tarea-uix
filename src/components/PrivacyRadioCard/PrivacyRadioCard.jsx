import React, { useContext } from "react";
import { Box, FormControlLabel, Typography, Radio } from "@mui/material";
import { Context } from "../../Context/Contex";
import useConvertHexToRgba from "../../hooks/useConvertHexToRgba";

const PrivacyRadioCard = ({ value, description, title, checked }) => {
  const { spaceColor, register, matchesSM } = useContext(Context);

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          checked={checked}
          {...register("spacePrivacy")}
          sx={{
            color: "#00000080",
            "&.Mui-checked": {
              color: spaceColor,
            },
          }}
        />
      }
      label={
        <Box
          marginY=".4rem"
          paddingRight={1}
          paddingY={1}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Typography variant="body2" color={checked ? spaceColor : "#000"}>
            {title}
          </Typography>
          <Typography variant="body2" color="#00000080">
            {description}
          </Typography>
        </Box>
      }
      sx={{
        width: `${matchesSM ? "100%" : "50%"}`,
        border: `1px solid ${checked ? spaceColor : "#E4E4E4"}`,
        alignItems: "flex-start",
        borderRadius: "5px",
        boxShadow: `${
          checked
            ? `0 0 0 5px ${useConvertHexToRgba(spaceColor, "0.1")}`
            : "unset"
        } `,
      }}
    />
  );
};

export default PrivacyRadioCard;
