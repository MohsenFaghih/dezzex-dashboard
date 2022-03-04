import React from 'react';
import {StyledSideMenu} from './styles';
import {Navbar as NavBrand, Nav} from 'react-bootstrap';
import {ReactComponent as Home} from '../../assets/img/sideMenu/home.svg'
import {ReactComponent as Election} from '../../assets/img/sideMenu/election.svg'
import {ReactComponent as Subtraction} from '../../assets/img/sideMenu/subtraction.svg'
import {ReactComponent as Path} from '../../assets/img/sideMenu/path.svg'
import {ReactComponent as Settings} from '../../assets/img/sideMenu/settings.svg'

const SideMenu = () => {
    const menu = [<Home />,<Election />,<Subtraction />,<Path />,<Settings />]
    return (
        <StyledSideMenu>
            <Nav className={`me-auto`}>
                {menu.map((item, i)=>(
                    <Nav.Link key={i} href='#'>{item}</Nav.Link>
                ))}
            </Nav>
        </StyledSideMenu>
    )
}

export default SideMenu