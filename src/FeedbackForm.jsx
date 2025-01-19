import { Close } from "@mui/icons-material";
import { Button, IconButton, Fade, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FeedbackForm({open, close}) {
    const [message, setMessage] = useState("Sorry, this isn't done being implemented yet!");

    function onClose() {
        setMessage('');
        close();
    }

    return (
        <Fade in={open}>
            <Paper
                role="dialog"
                square
                variant="outlined"
                sx={{
                    width: '250px',
                    maxHeight: '250px',
                    position: 'fixed',
                    bottom: 32,
                    // left: 250,
                    right: 118,
                    // m: 0,
                    p: 2,
                    borderRadius: '10px',
                    // borderWidth: 0,
                    borderTopWidth: 1,
                }}
            >
                <IconButton onClick={onClose} sx={{float: 'right'}}><Close /></IconButton>
                <Typography>Tell me your thoughts! All feedback is anonymous.</Typography>
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{my: '12px'}}
                />
                <Button variant="contained">Send</Button>
            </Paper>
        </Fade>
        
    )
}