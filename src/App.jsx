import React from 'react'
import Image from "./Components/ImageComponents/Image"
import Video from './Components/VideoPageComponents/Video'
import ConditionalRendering from './Components/ConditionalRenderingComponents/ConditionalRendering'
import Navbar from './Components/NavbarComponents/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AudioPractice from './Components/AudioComponents/AudioPractice'
import Keys from './Components/KeyComponents/Keys'
import Forms from './Components/FormComponents.jsx/Forms'
import { UserProvider } from './Components/ContextComponents/UserContext'
import UserBlogComponent from './Components/ContextComponents/UserBlogComponent'
import StateUsage from './Components/StateComponents/StateUsage'
import GiftCardProcess from './Components/GiftCardComponents/GiftCardProcess'
import Fetch from './Components/FetchComponents/Fetch'
import Calculator from './Components/CalculatorComponents/Calculator'
import CustomHooks from './Components/CustomHookComponents/CustomHooks'
import ComponentComposition from './Components/ComponentCompositionComponents/ComponentComposition'
import LiveOrders from './Components/ReactChildrenAPI\'s/LiveOrders'
import RadioGroupComponent from './Components/RadioGroupComponents/RadioGroupComponent'
import LoginComponent from './Components/SpreadOperatorComponents/LoginComponent'
import MouseTracker from './Components/MouseTrackerComponents/MouseTracker'
import DataFetcherComponent from './Components/DataFetcherComponents/DataFetcherComponent'
import MouseTracerWithRenderComponent from './Components/DataFetcherComponents/MouseTracerWithRenderComponent'
import MapFunction from './Components/MapFunction'
import RoutesHomePage from './Components/RouteComponents/RoutesHomePage'
import HomePage from './Components/HomePageComponents/HomePage'
import UseReducerComponent from './Components/UseReducerComponents/UseReducerComponent'

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
            <Routes>  
              <Route element={<Video/>} path='/video' />
              <Route element={<Image/>} path='/image' />
              <Route element={<HomePage/>} path='/' />
              <Route element={<ConditionalRendering/>} path='/conditionalrendering' />
              <Route element={<RoutesHomePage/>} path='/routes' />
              <Route element={<AudioPractice/>} path='/audio'></Route>
              <Route element={<MapFunction desserts = {desserts}/>} path='/map'></Route>
              <Route element={<Keys/>} path='/keys'></Route>
              <Route element={<Forms/>} path='/forms'></Route>
              <Route element={<MouseTracker/>} path='/mouseTracker'></Route>
              <Route element={<MouseTracerWithRenderComponent/>} path='/mouseTrackerWithRender'></Route>
              <Route element={<StateUsage/>} path='/state'></Route>
              <Route element={<LoginComponent/>} path='/loginComponent'></Route>
              <Route element={<RadioGroupComponent/>} path='/RadioGroup'></Route>
              <Route element={<GiftCardProcess/>} path='/gift'></Route>
              <Route element={<Fetch/>} path='/fetch'></Route>
              <Route element={<LiveOrders/>} path='/liveOrders'></Route>
              <Route element={<DataFetcherComponent/>} path='/dataFetcher'></Route>
              <Route element={<ComponentComposition/>} path='/componentComposition'></Route>
              <Route element={<CustomHooks/>} path='/customHook'></Route>
              <Route element={<UseReducerComponent/>} path='/useReducer'></Route>
              <Route element={<UserProvider> <UserBlogComponent/> </UserProvider>} path='/context'></Route>
              <Route element={<Calculator/>} path='/calculator'></Route>
            </Routes>
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