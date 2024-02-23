import { Typography } from "@mui/material";
import { format } from "date-fns";
import { styles } from "./styles";

export default function MessageDate() {
  return (
    <Typography component="span" sx={styles}>
      {format(new Date(), "dd/MM/yyyy - HH:mm")}
    </Typography>
  );
}
