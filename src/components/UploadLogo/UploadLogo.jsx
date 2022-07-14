import React, { useState, useContext } from "react";
import { Avatar, Box, Button, Icon, Typography } from "@mui/material";
import Information from "../Information/Information";
import { Context } from "../../Context/Contex";
const UploadLogo = () => {
  const { register, spaceLogo } = useContext(Context);

  return (
    <>
      <Typography variant="body2" fontWeight="regular" marginY={2}>
        Logo del espacio
      </Typography>
      <Box>
        <Box display="flex" gap="13px" alignItems="center">
          <Avatar
            alt="B"
            src={spaceLogo && URL.createObjectURL(spaceLogo[0])}
            sx={{
              width: "67px",
              height: "67px",
              fontWeight: "bold",
              background: "#343C4A",
              fontSize: "37px",
            }}
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            {...register("spaceLogo")}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              component="span"
              sx={{
                color: "#00000080",
                textTransform: "none",
                border: "1px solid #e4e4e4",
                borderRadius: "5px",
                gap: "8px",
              }}
            >
              <Icon>unarchive</Icon> Subir Logo
            </Button>
          </label>
        </Box>
        <Information
          text={[
            "Este logo identificará tu espacio entre el resto. ",
            "Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente.",
          ]}
        />
      </Box>
    </>
  );
};

export default UploadLogo;
