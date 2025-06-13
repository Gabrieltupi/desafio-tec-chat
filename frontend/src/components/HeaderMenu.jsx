import React, { useState } from "react";
import {IconButton, Menu, MenuItem,} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageHistoryDialog from "./MessageHistoryDialog";

export default function HeaderMenu({ fetchMessages }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openHistory, setOpenHistory] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleViewHistory = async () => {
    handleMenuClose();
    const msgs = await fetchMessages();
    setMessages(msgs);
    setOpenHistory(true);
  };

  const handleCloseHistory = () => setOpenHistory(false);

  return (
    <>
      <IconButton
        aria-label="mais opções"
        aria-controls={open ? "header-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMenuOpen}
        color="inherit"
        edge="end"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleViewHistory}>
          Ver histórico de mensagens enviadas
        </MenuItem>
      </Menu>

      <MessageHistoryDialog
        open={openHistory}
        onClose={handleCloseHistory}
        messages={messages}
      />
    </>
  );
}
