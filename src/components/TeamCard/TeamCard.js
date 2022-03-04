import React, { useContext } from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { DataContext } from '../../contexts/DataContext'
import {StyledCard, StyledMemberImage} from './styles'
import CardBackgroundImage from '../../assets/img/card-background.png'

const restOfMember = (length, showedMember) => (length - showedMember)
const setColor = project => (project>50?'#3A7295':'#885A40')

// Card element
const Card = ({id, project, color, length, logo, members}) => (
    <StyledCard key={id} background={CardBackgroundImage} color={color} textColor={setColor(project)}>
        <div className='teamLogo'><img src={`${process.env.PUBLIC_URL}/assets/team/logo/${logo}.png`} /></div>
        <div>
            <div>
                <p>Team Members</p>
                <div className='teamMembers'>
                    {/* Show members avatar */}
                    {members.map(member=>(
                        <StyledMemberImage key={member} backgroundImage={`${process.env.PUBLIC_URL}/assets/team/member/${member}.png`} />
                    ))}
                    <StyledMemberImage key='restOfMembers' textColor={setColor(project)}>+{restOfMember(length, members.length)}</StyledMemberImage>
                </div>
            </div>
            <div>
                <div className='completion'>
                    <span>Project Completion</span>
                    <span>{project}%</span>
                </div>
                <ProgressBar now={project} style={{height: '6px'}} variant={project>50?'info':'warning'} />
            </div>
        </div>
    </StyledCard>
)

const TeamCard = () => {

// Get team project card data from context
    const cardData = useContext(DataContext).cardData

    return (
        <Container fluid className='h-100 p-0'>
            <Row className='h-100'>
                {cardData.map(i=>(
                    <Col key={i.id} md={6} sm={12} xs={12} className='teamCardCol  mb-4'>
                        <Card 
                            id={i.id}
                            project={i.project_complete} 
                            color={i.team_color} 
                            length={i.team_length} 
                            logo={i.team_logo} 
                            members={i.team_member} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TeamCard