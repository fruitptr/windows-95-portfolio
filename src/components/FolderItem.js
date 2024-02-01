import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Progman29, FlyingWindows100 } from '@react95/icons'
import DataContext from '../contexts/dataContext'
import Wurdle from './Wurdle'

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`

const FolderItem = ({id, iconName, icon, item}) => {
	const [wurdleOpened, setWurdleOpened] = useState(false);
	const openWurdle = () => {
		setWurdleOpened(true);
	}
	const closeWurdle = () => {
		setWurdleOpened(false);
	}
	const data = useContext(DataContext);
	const project = data.getProject(id);
	const iconsDict = {
		"Progman29": <Progman29 variant="32x32_4" onClick={() => openWurdle()}/>,
		"FlyingWindows100": <FlyingWindows100 variant="32x32_4"/>,
	}

  return (
    <StyledItem>
		{
			wurdleOpened && (
				<Wurdle closeWurdle={closeWurdle} item={item} icon={iconsDict[icon]}/>
			)
		}
		{iconsDict[icon]}
		<StyledSpan>{iconName}</StyledSpan>
	</StyledItem>
  )
}

export default FolderItem