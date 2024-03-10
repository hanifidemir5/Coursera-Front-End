import React from 'react'
import Image from "./Components/Image"
import Video from './Components/Video' 
import ConditionalRendering from './Components/ConditionalRendering'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoutesHomePage from './pages/RoutesHomePage'
import FirstRoute from './Components/RouteComponents/FirstRoute'
import SecondRoute from './Components/RouteComponents/SecondRoute'
import ThirdRoute from './Components/RouteComponents/ThirdRoute'
import AudioPractice from './Components/AudioPractice'
import MapFunction from './Components/MapFunction'
import Keys from './Components/Keys'
import Forms from './Components/Forms'
import { UserProvider } from './Components/ContextComponents/UserContext'
import UserBlogComponent from './Components/ContextComponents/UserBlogComponent'
import StateUsage from './Components/StateUsage'
import GiftCardProcess from './Components/GiftCardProcess'
import Fetch from './Components/Fetch'
import Calculator from './Components/CalculatorComponents/Calculator'
import UseReducerComponent from './Components/UseReducerComponent'
import CustomHooks from './Components/CustomHookComponents/CustomHooks'

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];



function App() {
  return (
    <Router>
          <Navbar/>
        <div className='flex align-middle justify-center p-8 mx-24 pt-32'>
            <Routes>  
              <Route element={<Video/>} path='/' />
              <Route element={<Image/>} path='/image' />
              <Route element={<ConditionalRendering/>} path='/conditionalrendering' />
              <Route element={<RoutesHomePage/>} path='/routes' />
              <Route element={<FirstRoute/>} path='/routes/first'></Route>
              <Route element={<SecondRoute/>} path='/routes/second'></Route>
              <Route element={<ThirdRoute/>} path='/routes/third'></Route>
              <Route element={<AudioPractice/>} path='/audio'></Route>
              <Route element={<Calculator/>} path='/calculator'></Route>
              <Route element={<MapFunction desserts = {desserts}/>} path='/map'></Route>
              <Route element={<Keys/>} path='/keys'></Route>
              <Route element={<Forms/>} path='/forms'></Route>
              <Route element={<StateUsage/>} path='/state'></Route>
              <Route element={<GiftCardProcess/>} path='/gift'></Route>
              <Route element={<Fetch/>} path='/fetch'></Route>
              <Route element={<CustomHooks/>} path='/customHook'></Route>
              <Route element={<UseReducerComponent/>} path='/useReducer'></Route>
              <Route element={<UserProvider> <UserBlogComponent/> </UserProvider>} path='/context'></Route>
            </Routes>
        </div>
      </Router>
  )
}

export default App

// function MenuPage(props) { 
//   const [data, setData] = useState([]); 

//   useEffect(() => { 
//     document.title = 'Little Lemon'; 
//   }, []); 

//   useEffect(() => { 
//     fetch(`https://littlelemon/menu/${id}`) 
//       .then(response => response.json()) 
//       .then(json => setData(json)); 
//   }, [props.id]); 

//   // ... 
// } 