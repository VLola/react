import { StyledEngineProvider } from '@mui/material/styles';
import AlternateTimeline from "../components/AlternateTimeline";

const steps = [
    {
      label: 'C++',
      description: `27 projects`,
      technologies: [],
    },
    {
      label: 'C# .Net console',
      description: '15 projects',
      technologies: ['AWS'],
    },
    {
      label: 'C# .Net WinForms',
      description: '14 projects',
      technologies: ['MVC', 'MS SQL', 'Telegram'],
    },
    {
      label: 'C# .Net WPF',
      description: '34 projects',
      technologies: ['MVVM', 'MS SQL', 'Entity Framework', 'EntityFrameworkCore', 'Azure.Storage', 'Binance.Net', 'ScottPlot'],
    },
    {
      label: 'C# ASP.NET Core',
      description: '10 projects',
      technologies: ['MS SQL', 'Entity Framework Core'],
    },
    {
      label: 'HTML',
      description: '37 projects',
      technologies: [`CSS`, `SASS`, 'Bootstrap'],
    },
    {
      label: 'JavaScript',
      description: '22 projects',
      technologies: ['jQuery'],
    },
    {
      label: 'React',
      description: '6 projects',
      technologies: ['Bootstrap', 'Victory', 'Material UI'],
    },
    {
      label: 'Java',
      description: '5 projects',
      technologies: ['MS SQL', 'Hibernate', 'Spring'],
    },
    {
      label: 'PHP',
      description: '9 projects',
      technologies: ['MS SQL'],
    },
    {
      label: 'SQL',
      description: '30+ projects',
      technologies: ['MySQL', 'MS SQL'],
    },
  ];

const Skills = () => {
    return <StyledEngineProvider injectFirst>
                <AlternateTimeline steps={steps}/>
            </StyledEngineProvider>;
  };
  
  export default Skills;