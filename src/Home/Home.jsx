import { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import imgUrl from '../assets/bw_person.png'
import { AppContext } from "../AppContext";

export default function Home() {
    const {page, setPage} = useContext(AppContext);

    return (
        <Stack direction="row">
            <Box sx={{m: '100px', mr: '50px',  width: '70%'}}>
                <Stack spacing={3}>
                    <Typography variant="h4" sx={{lineHeight: '48px'}}>Hi, my name is Melissa and this is my <span style={{textDecoration: "line-through"}}>website</span> playground!</Typography>
                    <Typography variant="h6">I have 2+ years of experience as a Software Engineer and a mission to never stop learning. This is meant to be a place for me to experiment with new technologies in the form of mini projects instead of tutorials.</Typography>
                    <Button onClick={() => setPage("explanation")} variant="outlined" sx={{alignSelf: 'baseline'}}>Learn more</Button>
                </Stack>
            </Box>
            <img src={imgUrl} alt="" style={{height: '450px', margin: '50px', marginRight: '100px'}}></img>
        </Stack>
    )
}