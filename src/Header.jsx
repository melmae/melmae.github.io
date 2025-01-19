import { useContext } from "react";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { AppContext } from "./AppContext";

export default function Header() {
    const {page, setPage} = useContext(AppContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" onClick={() => setPage('home')}><HomeIcon /></IconButton>
                <Stack 
                    direction="row" 
                    spacing={3}
                    sx={{
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button size="large" color="inherit" onClick={() => setPage('projects')}>Projects</Button>
                    <Button size="large" color="inherit" onClick={() => setPage('about')}>About Me</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}