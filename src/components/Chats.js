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

const Chats = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = collection(firestore, "messages");
    const queryData = query(messagesRef, orderBy("sendingTime"), limit(25));
    const unsubscribe = onSnapshot(queryData, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setMessages([...messages, doc.data().text]);
        // messages.push(doc.data().text);
      });
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
      <div>
        {/* {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)} */}
        {console.log("messages", messages.length)}
        {messages.map((msg) => (
          <div>{messages}</div>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </div>
  );
};

export default Chats;
