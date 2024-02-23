import { Box } from "@mui/material";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
};
export default function ScroolArea(props: Props) {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const scrollableElement: any = scrollableRef.current;
    if (scrollableElement) {
      // Rolando para o final quando o conteúdo for atualizado
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  }, [props.children]);

  return (
    <Box id="scroolArea" sx={{ height: "550px", overflow: "hidden" }}>
      <Box
        ref={scrollableRef}
        sx={{
          overflowY: "auto",
          paddingRight: "15px",
          position: "relative",
          height: "inherit",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
