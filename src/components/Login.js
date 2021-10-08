import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../Firebase";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

const login = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 500 }}
        >
          Kothon
        </Typography>
        <Button
          onClick={() => signInWithRedirect(auth, provider)}
          variant="contained"
          color="error"
          startIcon={<GoogleIcon />}
        >
          Sign In With Google
        </Button>
      </Box>
    </Container>
  );
};
export default login;
