import { Box, Card, CardActionArea, CardContent, Drawer, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import Masonry from '@mui/lab/Masonry';
import { Close } from "@mui/icons-material";

import { pages } from './pages';

export default function DevNotes({open, close}) {
    const {page} = useContext(AppContext);

    const currentPageInfo = pages.find((p) => p.page === page );

    if (!currentPageInfo) {
        return (
            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                sx={{
                    '& .MuiDrawer-paper': {
                    width: '300px',
                    p: '12px',
                    },
                }}
            >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><IconButton onClick={close}><Close /></IconButton></Box>
                <Typography>Looks like we didn't find any dev notes for this page!</Typography>
            </Drawer>
        )
    }

    return (
        <Drawer
            variant="persistent"
            anchor="right"
            open={open}
            sx={{
                '& .MuiDrawer-paper': {
                  width: '300px',
                  p: '12px',
                },
              }}
        >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><IconButton onClick={close}><Close /></IconButton></Box>
            <Typography sx={{mb: '48px'}}>{currentPageInfo.devNotes}</Typography>
            <Masonry columns={2} spacing={2}>
                {currentPageInfo.technologies.map((tech) => {
                    return (
                        <Card
                            key={tech.name}
                            sx={{textAlign: 'center'}}
                        >
                            <CardActionArea onClick={() => window.open(tech.website, '_blank').focus()}>
                                <CardContent>
                                    {tech.icon}
                                    <Typography>{tech.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                )})}
            </Masonry>
        </Drawer>
    )
}