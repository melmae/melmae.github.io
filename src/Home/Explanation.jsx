import {Button, Card, CardContent, Grid2, Stack, Typography} from "@mui/material"

import featureFlags from "../feature-flags.json";
import {calculateExperience} from "../utils.js";

export default function Explanation() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Typography variant="h6">I call this website my playground, because it truly is a place where I can play around and experiment with new technologies.</Typography>
            </Grid2>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Typography variant="h6">While simple on the outside, the inner workings of this website are composed of a variety of languages and technologies that I wanted to learn more about. For anyone with the curiosity to look, there are also easter eggs mixed in to a few pages.</Typography>
            </Grid2>
            <Grid2 size={{xs: 10, md: 8}} offset={{sx: 1, md: 2}}>
                <Typography variant="h6">Since this website is also a showcase of what I know, I've added some tools to provide a deeper look into how I built each part of this website.</Typography>
            </Grid2>
            <Grid2>
                {/* <Stack
                direction="row"
                spacing={4}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& .MuiPaper-root': {
                        width: '20%'
                    }
                }}
            >
                <Card>
                    <CardContent>
                        <Typography variant="h5">Technologies</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Source Code</Typography>
                    </CardContent>
                </Card>
                {featureFlags.feedback && <Card>
                    <CardContent>
                        <Typography variant="h5">Feedback</Typography>
                    </CardContent>
                </Card>}
            </Stack> */}
            </Grid2>
        </Grid2>
    )
}