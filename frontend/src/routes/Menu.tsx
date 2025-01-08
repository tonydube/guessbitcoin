import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_notes, logout } from "../endpoints/api";
import { Box, Typography, Button, List, ListItem } from "@mui/material";

type Note = {
  description: string;
};

const Menu = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await get_notes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome back, user!
      </Typography>

      <List>
        {notes.map((note, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{note.description}</Typography>
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ marginTop: 2 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Menu;
