import { useContext } from "react";
import {Button, Grid2, Typography} from "@mui/material";
import { AppContext } from "../AppContext";
import { calculateExperience } from "../utils";
import imgUrl from '../assets/bw_person.png'

export default function Home() {
    const {page, setPage} = useContext(AppContext);

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Typography variant="h4" sx={{lineHeight: '48px'}}>Hi, my name is Melissa and this is my <span style={{textDecoration: "line-through"}}>website</span> playground!</Typography>
            </Grid2>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Typography variant="h6">{`I have ${calculateExperience()} years of experience as a Software Engineer and a mission to never stop learning. 
            This is meant to be a place for me to experiment with new technologies in the form of mini projects instead of tutorials.`}</Typography>
            </Grid2>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Button onClick={() => setPage("explanation")} variant="outlined" sx={{alignSelf: 'baseline'}}>Learn more</Button>
            </Grid2>
        </Grid2>
    )
}