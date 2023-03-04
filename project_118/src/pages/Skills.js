import { StyledEngineProvider } from '@mui/material/styles';
import AlternateTimeline from "../components/AlternateTimeline";

const Skills = () => {
    return <StyledEngineProvider injectFirst>
            <AlternateTimeline/>
        </StyledEngineProvider>;
  };
  
  export default Skills;