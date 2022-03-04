import React , {createContext, useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import TodoJsonData from '../Data/TodoList.json'
import CardData from '../Data/CardData.json'
import ProjectData from '../Data/ProjectTableData.json'
import CalendarData from '../Data/CalendarData.json'

export const DataContext = createContext();

const ContextDataProvider = (props) => {

// Login form data
    const loginFormData = {
        inputs:{username: 'username (admin)', password: 'password (admin)'},
        buttonText: 'Login',
        errorMsg: 'username or password is not correct, please try again.'
    }

// Check, Set and Remove user cookies 
    const [cookies, setCookie, removeCookie] = useCookies(['loginData']);
    function setCookieData(name, values, path='/', skipTime=3600000){
        if(name && values){
            let expireDate = new Date()
            expireDate.setTime(expireDate.getTime() + (skipTime));
            setCookie(name, values, {path: path, expires: expireDate});
            return true
        }else{
            return false
        }
    }
    const checkUser = (userDetails) => {
        if(userDetails.user==='admin' && userDetails.password==='admin'){
            const userCookies = setCookieData(userDetails.name, {username: userDetails.user, role: 'Product Manager'})
            if(userCookies) return true;
            return false
        }
        return false
    }

// navbarLiks to show
    const navbarLiks = ['dashboard', 'all projects', 'members', 'stats', 'help']

// fetch todo's data from json file like API
    const [todoDataList, setTodoDataList] = useState([])
    useEffect(()=>{
        setTodoDataList(TodoJsonData)
    }, [])

// Get date
    const d = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[d.getDay()]
    const fullDate = `${d.getDate()} ${d.toLocaleString('default', { month: 'long' })} ${d.getFullYear()}`

// Fake data for charts
    const BarLabels = []
    const LineLabels = []
    const PieLabels = [
        {name: 'Cambr', value: 6},
        {name: 'Target', value: 10},
        {name: 'Gramma', value: 8},
        {name: 'Collabee', value: 12}
    ]
    function labelCreator(){
        for(let i = 5; i < 31; i++){
            BarLabels.push({day: i, value: Math.floor(Math.random() * 100)})
        }
        for(let i = 1; i < 7; i++){
            LineLabels.push({day: i, value: Math.floor(Math.random() * 500)})
        }
    }
    labelCreator()

// Project table titles
    const projectTableTitles = ["RECENT PROJECTS","CREATED","REPORTER","DUE","STATS"]

// Export data object
    const context={
        loginFormData:loginFormData,
        userSetCookies: cookies, 
        checkUser: checkUser,
        navbarLiks: navbarLiks,
        todoDataList: todoDataList,
        today: today,
        fullDate: fullDate,
        cardData: CardData,
        projectTableTitles:projectTableTitles,
        projectData:ProjectData,
        labels: {bar: BarLabels, line: LineLabels, pie: PieLabels},
        calendarData:CalendarData

    }
    
    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextDataProvider;