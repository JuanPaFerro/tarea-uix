import React from "react";
import { Box, Icon, Typography } from "@mui/material";
const Information = ({ text }) => {
  return (
    <Box display="flex" color="#00000080" marginY="16px" gap="8px">
      <Icon>error_outlined</Icon>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="body2">{text[0]}</Typography>
        <Typography variant="body2">{text[1]}</Typography>
      </Box>
    </Box>
  );
};

export default Information;
