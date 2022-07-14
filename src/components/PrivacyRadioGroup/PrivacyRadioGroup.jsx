import React, { useContext } from "react";
import { Box, RadioGroup, Typography } from "@mui/material";
import PrivacyRadioCard from "../PrivacyRadioCard/PrivacyRadioCard";
import { Context } from "../../Context/Contex";

const PrivacyRadioGroup = () => {
  const { spacePrivacy, matchesSM } = useContext(Context);
  const data = [
    {
      name: "Privado",
      value: "private",
      description:
        "El contenido será visible sólo para tí y los miembros de tu Organización.",
    },
    {
      name: "Público",
      value: "public",
      description:
        "Cualquiera con el vínculo podrá ver la actividad de tu Organización",
    },
  ];
  return (
    <Box marginY={3}>
      <Typography variant="body2">Privacidad del espacio</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="private"
        name="spacePrivacy"
      >
        <Box display="flex" margin={1} flexWrap={matchesSM && "wrap"} gap={1}>
          {data.map((option) => (
            <PrivacyRadioCard
              key={option.name}
              value={option.value}
              title={option.name}
              description={option.description}
              isChecked={option.value === spacePrivacy}
            />
          ))}
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default PrivacyRadioGroup;
