import { useContext } from "react";
import { AppBar, Button, IconButton, Stack, Switch, ToggleButton, ToggleButtonGroup, Toolbar, useColorScheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { AppContext } from "./AppContext";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Header() {
    const {colorScheme, setColorScheme, setPage} = useContext(AppContext);


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
                <ToggleButtonGroup
                    value={colorScheme}
                    exclusive
                    onChange={(e, newValue) => {setColorScheme(newValue) }}
                    sx={{
                        "& .MuiToggleButtonGroup-grouped": {
                            color: "#f2f0efff",
                            borderColor: "#f2f0ef80",
                            "&.Mui-selected": {
                                color: "secondary.main",
                                "&:hover": {
                                    color: "secondary.main",
                                },
                            },
                            "&:hover": {
                                color: "#f2f0ef",
                                backgroundColor: "#f2f0ef20",
                            }
                        },

                    }}
                >
                    <ToggleButton value="light">
                        <LightMode />
                    </ToggleButton>
                    <ToggleButton value="dark">
                        <DarkMode />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Toolbar>
        </AppBar>
    )
}