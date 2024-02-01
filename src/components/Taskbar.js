import React, { useState } from 'react';
import { TaskBar, List } from '@react95/core';
import { FolderFile, FileText } from '@react95/icons';
import Folder from './Folder';
import AboutMe from './AboutMe';

function Taskbar({ closeAboutMe, closeProjects, openAboutMe, openProjects, toggleAboutMe, toggleProjects, projectsOpened, aboutMeOpened}) {
    return (
      <>
        {projectsOpened && <Folder icon={<FolderFile variant="16x16_4" />} title="Projects" closeProjects={closeProjects} openProjects={openProjects} width="500" height="250" />}
        {aboutMeOpened && <AboutMe icon={<FileText variant="32x32_4"/>} title="About Me" closeAboutMe={closeAboutMe} openAboutMe={openAboutMe} width="300" height="200" defaultPosition={{x: 50, y: 50}} />}
        <TaskBar list={
          <List>
            <List.Item icon={<FileText variant="32x32_4" />} onClick={() => toggleAboutMe(true)}>
              About Me
            </List.Item>
            <List.Item icon={<FolderFile variant="32x32_4" />} onClick={() => toggleProjects(true)}>
              Projects
            </List.Item>
          </List>} />
    </>
    );
}

export default Taskbar;
