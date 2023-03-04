import VerticalLinearStepper from "../components/VerticalLinearStepper";
import { StyledEngineProvider } from '@mui/material/styles';

const Projects = () => {
    return <div className="d-flex flex-column justify-content-center align-items-center h-75">
        <StyledEngineProvider injectFirst>
            <VerticalLinearStepper/>
        </StyledEngineProvider>
    </div>;
  };
  
  export default Projects;