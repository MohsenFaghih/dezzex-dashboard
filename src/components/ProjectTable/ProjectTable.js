import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataContext } from '../../contexts/DataContext'
import {ProjectTableRoot} from './styles'

const ProjectTable = () => {

    const context = useContext(DataContext)
    const projectData = context.projectData
    const projectTableTitles = context.projectTableTitles

    return (
        <ProjectTableRoot>
            <Table responsive borderless={true}>
                <thead>
                    <tr>
                        {projectTableTitles.map(title=><th>{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {projectData.map(item=>(
                        <tr key={item.id}>
                            <td>
                                <img src={`${process.env.PUBLIC_URL}/assets/team/logo/${item.logo}.png`} /> {item.name}
                            </td>
                            <td>{item.created}</td>
                            <td>{item.reporter}</td>
                            <td>{item.due}</td>
                            <td><div className={item.status=='OPEN'?'blue':'orange'}>{item.status}</div></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ProjectTableRoot>
    )
}

export default ProjectTable