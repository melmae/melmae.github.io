import { Avatar, Grid2, IconButton, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn, School, Work } from "@mui/icons-material";
import { calculateExperience } from "../utils";
import profilePic from "../assets/profile-pic.jpg";

export default function About() {
    return (
        <Stack direction={{md: 'column', lg: 'row'}} spacing={3} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Grid2 container spacing={2} sx={{p: '12px', width: '300px', border: 'solid', borderRadius: '10px'}}>
                <Grid2 size={12} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <Typography variant="h5">Melissa Schmidt</Typography>
                </Grid2>
                <Grid2 size={12} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <Avatar alt="Melissa Schmidt" src={profilePic} sx={{width: '120px', height: '120px'}}/>
                </Grid2>
                <Grid2 size={2} offset={4} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/mschmidt00/", '_blank').focus()}><LinkedIn /></IconButton>
                </Grid2>
                <Grid2 size={2} sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <IconButton onClick={() => window.open("https://github.com/melmae", '_blank').focus()}><GitHub /></IconButton>
                </Grid2>
            </Grid2>
            <Stack spacing={3} sx={{width: '100%', maxWidth: '800px'}}>
                <Typography>
                    {`I've been working as a Software Engineer for ${calculateExperience()} years, but it was a while before that when I started playing around with HTML and CSS.
                    Now, most of my experience is with React and C# (.NET), but in the past I also used Java, React Native, and C.`}
                </Typography>
                <Typography>
                    {`I'm passionate about UX (User Experience) and I'm always trying to learn more about web development in order to create intuitive and usable pieces of software.
                    Plus, I just love to learn. That's how this website came about!`}
                </Typography>
                <Typography>
                    {`When I'm not writing code, I can be found reading, hanging out with my cat, or watching baseball.`}
                </Typography>
                <Typography>
                    {`Want to talk tech? Feel free to get in touch!`}
                </Typography>
            </Stack>
        </Stack>
    )
}