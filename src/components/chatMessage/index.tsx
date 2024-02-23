import { Avatar, Container } from "@mui/material";
import { Message } from "ai";
import MessageBox from "./messageBox";

interface AIMessage {
  message: Message;
}

export default function ChatMessage(message: AIMessage) {
  const { message: msg } = message;
  const style =
    msg.role === "user"
      ? "mb-8 flex flex-row-reverse content-start w-full"
      : "mb-8 flex flex-row content-end";
  const avatar =
    msg.role === "user" ? "assets/user_avatar.jpg" : "assets/BotAvatar.jpg";
  return (
    <Container className={style}>
      <Avatar alt="Remy Sharp" src={avatar} className="mx-4" />
      <MessageBox id="teste" message={msg.content} />
    </Container>
  );
}
