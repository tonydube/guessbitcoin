import { useEffect, useState } from "react";
import { get_notes } from "../endpoints/api";
import { Box, Typography, List, ListItem } from "@mui/material";

type Note = {
  description: string;
};

const Menu = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await get_notes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 600,
        padding: 3,
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
    </Box>
  );
};

export default Menu;
