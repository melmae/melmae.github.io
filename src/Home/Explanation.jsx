import { Card, CardContent, Stack, Typography } from "@mui/material"

import featureFlags from "../feature-flags.json";

export default function Explanation() {
    return (
        <Stack spacing={3} sx={{m: '100px'}}>
            <Typography variant="h6">I call this website my playground, because it truly is a place where I can play around and experiment with new technologies.</Typography>
            <Typography variant="h6">While simple on the outside, the inner workings of this website are composed of a variety of languages and technologies that I wanted to learn more about. For anyone with the curiosity to look, there are also easter eggs mixed in to a few pages.</Typography>
            <Typography variant="h6">Since this website is also a showcase of what I know, I've added some tools to provide a deeper look into how I built each part of this website.</Typography>
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
        </Stack>
    )
}