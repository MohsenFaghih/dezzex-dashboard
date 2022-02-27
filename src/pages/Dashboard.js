import React, {useContext} from 'react';
import { Navigate } from "react-router-dom";
import { DataContext } from '../contexts/DataContext';
import DashboardLayout  from '../layouts/DashboardLayout';
import {Navbar, SideMenu, Todo, TeamCard, ProjectTable, BarChart, LineChart, PieChart, Calendar} from '../components'
import { Container } from 'react-bootstrap';

const Dashboard = () => {
    const context = useContext(DataContext)
    const navbarLiks = context.navbarLiks;
    const chartsData = context.labels;
    const isUserLoggedIn = context.userSetCookies

    return (
        <>
            {Object.keys(isUserLoggedIn).length ? 
            <>
                <Navbar lists={navbarLiks}/>
                <DashboardLayout>
                    {{
                        SideMenu:<SideMenu />,
                        Todo: <Todo />,
                        TeamCard: <TeamCard />,
                        ProjectTable:<ProjectTable />,
                        BarChart: <BarChart chartsData={chartsData.bar} />,
                        LineChart: <LineChart chartsData={chartsData.line} />,
                        PieChart: <PieChart chartsData={chartsData.pie} />,
                        Calendar: <Calendar />
                    }}
                </DashboardLayout>
            </>
            :
                <Navigate to='/' />
            }
        </>
    )
}

export default Dashboard