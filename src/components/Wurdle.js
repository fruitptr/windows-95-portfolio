import React from 'react'
import { Modal } from '@react95/core'
import { List, Frame } from '@react95/core'

const Wurdle = ({closeWurdle, item, icon}) => {
    const projectName = item.name
    const projectDescription = item.description
    const projectWebsite = item.website
    const projectGithubLink = item.githubLink

  return (
    <Modal icon={icon}
    title={item.name}
    closeModal={closeWurdle}
    buttons={[{ value: "Close", onClick: closeWurdle }]}
    menu={[{name: 'File', list: 
                <List>
                    <List.Item onClick={closeWurdle}>Exit</List.Item>
                </List>
              }, 
              {
                name: 'Edit', list: 
                <List>
                    <List.Item>Copy</List.Item>
                </List>
            }]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
            >
            <div key={item.id}>
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
                <a href={projectWebsite} target="_blank" rel="noopener noreferrer">Website</a>
                <br/>
                <a href={projectGithubLink} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            </Frame>

    </Modal>
  )
}

export default Wurdle