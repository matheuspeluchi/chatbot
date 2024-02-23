"use client";
import "regenerator-runtime";

import { MicSharp } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Message } from "ai";
import { useChat } from "ai/react";
import { FormEvent, useCallback, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ChatMessage from "../chatMessage";
import ScroolArea from "../scroolArea";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const {
    transcript = "",
    listening = false,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(event);
    },
    [handleInputChange]
  );

  const handleSubmitchat = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      handleSubmit(e);
      resetTranscript();
    },
    [handleSubmit, resetTranscript]
  );

  const handleVoiceInput = () => {
    SpeechRecognition.startListening({ language: "pt-BR" });
    handleChange({
      target: { value: transcript },
    } as React.ChangeEvent<HTMLInputElement>);
    resetTranscript();
  };

  useEffect(() => {
    handleChange({
      target: { value: transcript },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [handleChange, transcript]);

  return (
    <>
      <Box className="justify-center h-4/6 mt-5 align-center justify-center">
        <Container fixed>
          <ScroolArea>
            {messages.map((message: Message) => {
              return <ChatMessage key={message.id} message={message} />;
            })}
          </ScroolArea>
        </Container>
      </Box>
      <Divider variant="middle" flexItem className="bg-[#114B93]" />
      <Box className="h-2/6" alignItems="center" justifyItems="center">
        <form onSubmit={handleSubmitchat} className="w-full h-full ">
          <Stack
            direction={{ xs: "column", md: "row", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            className="w-full h-full"
          >
            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              placeholder="Digite sua duvida ou grave um audio."
              className="mt-5"
              color="primary"
              sx={{ width: "80%" }}
              onKeyUp={handleKeyPress}
              value={input}
              onChange={handleChange}
              focused
              error={!browserSupportsSpeechRecognition}
              helperText={
                !browserSupportsSpeechRecognition
                  ? "Este navegador não suporta reconhecimento de fala"
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="Record"
                    color={listening ? "error" : "inherit"}
                    onClick={handleVoiceInput}
                  >
                    <MicSharp />
                  </IconButton>
                ),
              }}
            />

            <Button
              variant="contained"
              color="primary"
              className="bg-[#114B93]"
              sx={{ height: "36px" }}
              type="submit"
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
