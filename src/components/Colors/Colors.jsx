import React, { useContext } from "react";
import { Box } from "@mui/material";
import { CirclePicker } from "react-color";
import CustomColorSketchPicker from "../CustomColorSketchPicker/CustomColorSketchPicker";
import styled from "styled-components";
import { Context } from "../../Context/Contex";

const CustomCirclePicker = styled(CirclePicker)`
  width: unset !important;
  flex-wrap: nowrap !important;
  gap: 0.1rem;
`;

const Colors = () => {
  const {setSpaceColor, matchesSM } = useContext(Context);
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={3}
      paddingRight={1}
      height="75px"
      sx={{ overflowX: matchesSM && "auto" }}
    >
      <CustomCirclePicker
        colors={[
          "#39B0FF",
          "#04B58B",
          "#3E9C4B",
          "#B6BC00",
          "#E59100",
          "#E55C00",
          "#EE1F50",
          "#D6198A",
          "#B321F1",
        ]}
        onChange={(color) =>setSpaceColor(color.hex)}
        circleSize={45}
      />
      <CustomColorSketchPicker />
    </Box>
  );
};

export default Colors;
