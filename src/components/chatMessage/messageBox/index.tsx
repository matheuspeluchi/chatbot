import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import MessageDate from "../messageDate";

export default function MessageBox({ ...props }) {
  return (
    <Card className="bg-[#F1F7FF]">
      <CardContent className="flex flex-col">
        <MessageDate />
        <span>{props.message}</span>
      </CardContent>
    </Card>
  );
}
