import React, { useContext, useState } from "react";
import { Box, RadioGroup } from "@mui/material";
import AmountOfPeopleRadioButton from "../AmountOfPeopleRadioButton/AmountOfPeopleRadioButton";
import { Context } from "../../Context/Contex";

const AmountOfPeopleRadioGroup = ({ name }) => {
  const { matchesSM, spaceAmountOfPeople } = useContext(Context);

  const options = [
    { id: "spaceAmountOfPeople-1", value: "Sólo yo" },
    { id: "spaceAmountOfPeople-2", value: "2-10" },
    { id: "spaceAmountOfPeople-3", value: "11-25" },
    { id: "spaceAmountOfPeople-4", value: "26-50" },
    { id: "spaceAmountOfPeople-5", value: "51-100" },
    { id: "spaceAmountOfPeople-6", value: "500+" },
  ];
  return (
    <RadioGroup defaultValue="11-25" sx={{ marginY: "10px" }}>
      <Box display="flex" gap={1} flexWrap={`${matchesSM && "wrap"}`}>
        {options.map((option) => (
          <AmountOfPeopleRadioButton
            id={option.id}
            key={option.id}
            value={option.value}
            checked={spaceAmountOfPeople === option.value}
          />
        ))}
      </Box>
    </RadioGroup>
  );
};

export default AmountOfPeopleRadioGroup;
