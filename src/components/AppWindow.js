import Taskbar from './Taskbar';
import Desktop from './Desktop';
import React, {useState} from 'react'

const AppWindow = () => {
    const [projectsOpened, toggleProjects] = useState(false);
    const [aboutMeOpened, toggleAboutMe] = useState(false);
    const openProjects = () => {
        toggleProjects(true);
    };
    const closeProjects = () => {
        toggleProjects(false);
    };
    const openAboutMe = () => {
        toggleAboutMe(true);
    };
    const closeAboutMe = () => {
        toggleAboutMe(false);
    };
  return (
    <>
        <Desktop closeAboutMe={closeAboutMe} closeProjects={closeProjects} openAboutMe={openAboutMe} openProjects={openProjects} toggleAboutMe={toggleAboutMe} toggleProjects={toggleProjects} projectsOpened={projectsOpened} aboutMeOpened={aboutMeOpened}/>
        <Taskbar closeAboutMe={closeAboutMe} closeProjects={closeProjects} openAboutMe={openAboutMe} openProjects={openProjects} toggleAboutMe={toggleAboutMe} toggleProjects={toggleProjects} projectsOpened={projectsOpened} aboutMeOpened={aboutMeOpened}/>
    </>
  )
}

export default AppWindow