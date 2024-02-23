import { Typography } from "@mui/material";
import { format } from "date-fns";
import { styles } from "./styles";

export default function MessageText(message: string) {
  return (
    <Typography component="p" sx={styles}>
      {message}
    </Typography>
  );
}
