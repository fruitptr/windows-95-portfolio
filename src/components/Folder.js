import { Modal, List, Frame } from '@react95/core'
import React, { useContext} from 'react'
import styled from 'styled-components'
import DataContext from '../contexts/dataContext'
import FolderItem from './FolderItem'

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;

const Folder = ({icon, title, closeProjects, openProjects, width, height}) => {
  const data = useContext(DataContext);
  const projects = data.getProjects();
  return (
    <Modal 
      icon={icon} 
      title={title} 
      closeModal={closeProjects} 
      width={width} 
      height={height}
      menu={[{name: 'File', list: 
                <List>
                    <List.Item onClick={closeProjects}>Exit</List.Item>
                </List>
              }, 
              {
                name: 'Edit', list: 
                <List>
                    <List.Item>Copy</List.Item>
                </List>
            }]}>
      <Frame  height="100%" boxShadow="in" bg="white">
        <FilesWrapper>
          {
            projects.map((project) => (
                <FolderItem
                    id={project.id}
                    iconName={project.name}
                    icon={project.icon}
                    item={project}
                />
            ))
          }
        </FilesWrapper>
      </Frame>
    </Modal>
  )
}

export default Folder