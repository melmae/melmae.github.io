import { Construction } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function Projects() {
    return (
        <Stack spacing={3} sx={{m: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Construction sx={{fontSize: '48px'}} />
            <Typography>Yeah, I know there's nothing here yet. But I'm working on it!</Typography>
        </Stack>
    )
}