import React from "react";
import {Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Typography,} from "@mui/material";

const MessageHistoryDialog = ({ open, onClose, messages }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>Histórico de Mensagens Enviadas</DialogTitle>
    <DialogContent dividers>
      <List>
        {messages.length === 0 ? (
          <ListItem>
            <ListItemText primary="Nenhuma mensagem encontrada." />
          </ListItem>
        ) : (
          messages.map((msg) => (
            <ListItem key={msg.id}>
              <ListItemText
                primary={msg.content}
                secondary={
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      fontSize: "0.65rem",
                      lineHeight: 1.2,
                      color: "#616161",
                    }}
                  >
                    {msg.createdAt
                      ? new Date(msg.createdAt).toLocaleString()
                      : ""}
                  </Typography>
                }
              />
            </ListItem>
          ))
        )}
      </List>
    </DialogContent>
  </Dialog>
);

export default MessageHistoryDialog;
