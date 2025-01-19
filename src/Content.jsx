import { useContext, useState } from "react";
import Home from "./Home/Home";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { AppContext } from "./AppContext";
import Projects from "./Projects/Projects";
import { Build, Chat, Code, InfoOutlined } from "@mui/icons-material";
import { styled, useTheme } from '@mui/material/styles';
import Explanation from "./Home/Explanation";
import FeedbackForm from "./FeedbackForm";

import featureFlags from "./feature-flags.json";
import DevNotes from "./DevNotes";
import About from "./About/About";

export default function Content() {
    const [devToolsState, setDevToolsState] = useState({source: false, tech: false, feedback: false});

    const {page} = useContext(AppContext);

    function calcPosition() {
        let y = 32;
        if (devToolsState.tech) y += 300;
        if (devToolsState.source) y += 300;
        return y;
    }

    return (
        <Box
            sx={{
                width: `calc(100%${devToolsState.tech ? " - 300px" : ""}${devToolsState.source ? " - 300px" : ""})`
            }}
        >
            {page === "home" && <Home />}
            {page === "projects" && <Projects />}
            {page === "explanation" && <Explanation />}
            {page === "about" && <About />}
            <SpeedDial
                ariaLabel="Website tech insight"
                sx={{ position: 'absolute', bottom: 32, right: calcPosition() }}
                icon={<InfoOutlined />}
            >
                {featureFlags.sourceCode && <SpeedDialAction
                    key="source"
                    icon={<Code />}
                    tooltipTitle="Source Code"
                />}
                <SpeedDialAction
                    key="tech"
                    icon={<Build />}
                    tooltipTitle="Technologies"
                    onClick={() => setDevToolsState({...devToolsState, tech: true})}
                />
                {featureFlags.feedback && <SpeedDialAction
                    key="feedback"
                    icon={<Chat />}
                    tooltipTitle="Feedback"
                    onClick={() => setDevToolsState({...devToolsState, feedback: true})}
                />}
            </SpeedDial>
            <DevNotes open={devToolsState.tech} close={() => setDevToolsState({...devToolsState, tech: false})} />
            <FeedbackForm open={devToolsState.feedback} close={() => setDevToolsState({...devToolsState, feedback: false})} />
        </Box>
    )
}