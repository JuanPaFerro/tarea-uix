import React, { useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMediaQuery, useTheme } from "@mui/material";
export const Context = createContext();

const customFormSchema = yup.object().shape({
  spaceName: yup
    .string()
    .required("Por favor introduzca el nombre de su espacio"),
  spaceURL: yup.string().required("Por favor introduzca la URL de su espacio."),
  spacePrivacy: yup
    .string()
    .required("Debe seleccionar una opcion de antes de guardar."),
  spaceAmountOfPeople: yup
    .string()
    .required("Debe seleccionar una opcion antes de guardar."),
});

export const Provider = ({ children }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [spaceColor, setSpaceColor] = useState("#39B0FF");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customFormSchema),
    defaultValues: {
      spaceName: "",
      spaceURL: "",
      spacePrivacy: "private",
      spaceAmountOfPeople: "11-25",
      spaceLogo: "",
    },
  });
  const spaceName = watch("spaceName");
  const spaceURL = watch("spaceURL");
  const spaceLogo = watch("spaceLogo");
  const spacePrivacy = watch("spacePrivacy");
  const spaceAmountOfPeople = watch("spaceAmountOfPeople");

  const onSubmit = (data) => {
    const newData = { ...data, spaceColor: spaceColor };
    console.table(newData);
    resetForm();
  };
  const resetForm = () => {
    reset(
      {
        spaceName: "",
        spaceURL: "",
        spacePrivacy: "private",
        spaceAmountOfPeople: "11-25",
        spaceLogo: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
    setSpaceColor("#39b0ff");
  };
  const value = {
    matchesSM,
    spaceName,
    spaceURL,
    spacePrivacy,
    spaceAmountOfPeople,
    spaceLogo,
    spaceColor,
    errors,
    onSubmit,
    register,
    resetForm,
    handleSubmit,
    setSpaceColor,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
