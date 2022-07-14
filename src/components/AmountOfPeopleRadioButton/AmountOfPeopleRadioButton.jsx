import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Context } from "../../Context/Contex";
import useConvertHexToRgba from "../../hooks/useConvertHexToRgba";

const AmountOfPeopleRadioButton = ({ id, value, checked, onChange }) => {
  const { register, spaceColor } = useContext(Context);
  const styles = {
    textTransform: "none",
    border: `1px solid ${checked ? spaceColor : "#e4e4e4"}`,
    boxShadow: `${
      checked
        ? `0px 0px 2px 2px ${useConvertHexToRgba(spaceColor, "0.3")}`
        : "none"
    }`,

    fontWeight: "regular",
    color: checked ? spaceColor : "#000",
    height: "46px",
    ":hover": {
      border: `1px solid ${spaceColor}`,
      backgroundColor: spaceColor + "09",
    },
  };
  return (
    <>
      <input
        style={{ display: "none" }}
        {...register("spaceAmountOfPeople", { required: true })}
        id={id}
        type="radio"
        value={value}
        checked={checked}
      />
      <label htmlFor={id}>
        <Button variant="outlined" component="span" sx={styles}>
          {value}
        </Button>
      </label>
    </>
  );
};

export default AmountOfPeopleRadioButton;
