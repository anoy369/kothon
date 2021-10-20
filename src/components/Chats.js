import { useEffect, useState } from "react";
import Nav from "./Nav";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, firestore } from "../Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const chatBoxColor = blue[50];

  useEffect(() => {
    const messagesRef = collection(firestore, "messages");
    const queryData = query(messagesRef, orderBy("sendingTime"), limit(25));
    const unsubscribe = onSnapshot(queryData, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data().text);
      });
      setMessages([...messages]);
      // console.log("All TEXT: ", messages.join(", "));
    });
  }, []);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { userId, photoUrl } = auth.currentUser;
    console.log("uid");
    await addDoc(collection(firestore, "messages"), {
      text: formValue,
      sendingTime: Timestamp.fromDate(new Date()),
    });

    setFormValue("");
  };

  return (
    <div className="chatPage">
      <Nav />
      <Box sx={{ p: 1 }}>
        <div>
          {messages.map((msg) => (
            <>
              <Box
                sx={{
                  bgcolor: chatBoxColor,
                  p: 1,
                  mb: 1,
                  display: "inline-flex",
                  borderRadius: 1,
                }}
              >
                {msg}
              </Box>
              <br />
            </>
          ))}
        </div>

        <form onSubmit={sendMessage}>
          <Box sx={{ display: "flex" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              sx={{
                flexGrow: 1,
                pt: 0,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px 0px 0px 4px",
                },
              }}
              inputProps={{
                sx: { py: 1 },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!formValue}
              sx={{ borderRadius: "0px 4px 4px 0px" }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Chats;
