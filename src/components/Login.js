import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../Firebase";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import KothonLogo from "../assets/Logo.png";

const login = () => {
  return (
    <Container>
      <Box
        sx={ {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        } }
      >
        <Box sx={ { maxWidth: "300px" } } className="gutterBottom">

          <img alt="Kothon Logo" src={ KothonLogo } className="imgFluid mb3" />
        </Box>
        <Button
          onClick={ () => signInWithRedirect(auth, provider) }
          variant="contained"
          color="error"
          startIcon={ <GoogleIcon /> }
        >
          Sign In With Google
        </Button>
      </Box>
    </Container>
  );
};
export default login;
