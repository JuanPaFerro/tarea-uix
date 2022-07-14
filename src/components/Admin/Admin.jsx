import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import AmountOfPeopleRadioGroup from "../AmountOfPeopleRadioGroup/AmountOfPeopleRadioGroup";
import Information from "../Information/Information";
import UploadLogo from "../UploadLogo/UploadLogo";
import Colors from "../Colors/Colors";
import InputContainer from "../InputContainer/InputContainer";

import { Context } from "../../Context/Contex";
import PrivacyRadioGroup from "../PrivacyRadioGroup/PrivacyRadioGroup";
import SaveFormButton from "../SaveFormButton/SaveFormButton";
import ResetFormButton from "../ResetFormButton/ResetFormButton";

const Admin = () => {
  const { handleSubmit, onSubmit, matchesSM, spacePrivacy } =
    useContext(Context);
  return (
    <Box width={`${matchesSM ? "100%" : "60%"}`}>
      <Typography variant="h6" fontWeight="medium" color="initial">
        Configuración {spacePrivacy}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <UploadLogo />

        <InputContainer
          label="Nombre del espacio"
          name="spaceName"
          placeholder="Ep: Mi espacio de trabajo"
          validationObject={{ required: true, maxLength: 20 }}
        />
        <Box marginY={3}>
          <InputContainer
            label="URL del espacio (dirección web)"
            name="spaceURL"
            placeholder="Ep: mi.dominio"
            validationObject={{
              required: true,
              maxLength: 20,
            }}
          />
          <Information
            text={[
              "Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)",
              " Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.",
            ]}
          />
        </Box>

        <Box marginY={3}>
          <Typography variant="subtitle2">
            ¿Cuántas personas trabajarán contigo, incluyéndote a ti?
          </Typography>
          <AmountOfPeopleRadioGroup name="spaceAmountOfPeople" />
          <Information
            text={[
              "Debes seleccionar cuántas personas trabajarán junto a ti en este espacio.",
              "Puedes escoger la opcion 'Sólo yo' trabajarás sólo, esta configuración  podrá ser cambiada mas tarde en las opciones del espacio.",
            ]}
          />
        </Box>

        <Colors />

        <PrivacyRadioGroup />

        <Box display="flex" gap={2} marginTop={5}>
          <SaveFormButton />
          <ResetFormButton />
        </Box>
      </form>
    </Box>
  );
};

export default Admin;
