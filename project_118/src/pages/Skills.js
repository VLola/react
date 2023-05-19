import React, { Component } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import AlternateTimeline from "../components/AlternateTimeline";

const steps = [
    {
      label: 'C++',
      description: `27 projects`,
      technologies: ['WinAPI'],
      url: 'https://github.com/VLola/c-plus-plus',
    },
    {
      label: 'C# .Net console',
      description: '15 projects',
      technologies: ['AWS'],
      url: 'https://github.com/VLola/c-sharp',
    },
    {
      label: 'C# .Net WinForms',
      description: '14 projects',
      technologies: ['MVC', 'MS SQL', 'Telegram'],
      url: 'https://github.com/VLola/c-sharp-winforms',
    },
    {
      label: 'C# .Net WPF',
      description: '34 projects',
      technologies: ['MVVM', 'Entity Framework', 'EntityFrameworkCore', 'Azure.Storage', 'Binance.Net', 'ScottPlot'],
      url: 'https://github.com/VLola/c-sharp-wpf',
    },
    {
      label: 'C# ASP.NET Core',
      description: '10 projects',
      technologies: ['Entity Framework Core'],
      url: 'https://github.com/VLola/c-sharp-asp',
    },
    {
      label: 'CSS',
      description: '37 projects',
      technologies: [`SASS`, 'Bootstrap'],
      url: 'https://github.com/VLola/html',
    },
    {
      label: 'JavaScript',
      description: '22 projects',
      technologies: ['jQuery', 'Ajax'],
      url: 'https://github.com/VLola/html',
    },
    {
      label: 'React',
      description: '6 projects',
      technologies: ['Bootstrap', 'Victory', 'Material UI'],
      url: 'https://github.com/VLola/react',
    },
    {
      label: 'Java',
      description: '5 projects',
      technologies: ['MS SQL', 'MySQL', 'Hibernate', 'Spring', 'Spring Web'],
      url: 'https://github.com/VLola/java',
    },
    {
      label: 'Android',
      description: '3 projects',
      technologies: [],
      url: 'https://github.com/VLola/android',
    },
    {
      label: 'PHP',
      description: '9 projects',
      technologies: ['MS SQL'],
      url: 'https://github.com/VLola/php',
    },
    {
      label: 'SQL',
      description: '30+ projects',
      technologies: ['MySQL', 'MS SQL'],
      url: '',
    },
  ];


class Skills extends Component {
    
  render() {
      return <StyledEngineProvider injectFirst>
                 <AlternateTimeline steps={steps}/>
             </StyledEngineProvider>;
  }


}
export default Skills;