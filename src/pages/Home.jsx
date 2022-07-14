import React, { useContext } from "react";
import { Container } from "@mui/material";
import Admin from "../components/Admin/Admin";
import Preview from "../components/Preview/Preview";
import { Context } from "../Context/Contex";

const Home = () => {
  const { matchesSM } = useContext(Context);
  return (
    <Container maxWidth="lg" sx={{ display: "flex", paddingY: "80px" }}>
      <Admin />
      <Preview display={matchesSM && "none"} />
    </Container>
  );
};

export default Home;
