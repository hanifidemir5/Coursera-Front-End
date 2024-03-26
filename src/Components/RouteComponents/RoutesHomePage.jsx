  
import { Link } from 'react-router-dom';
import { navDatas } from '../../Datas/NavbarQueryset.js';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./routes.css"
import { useState } from 'react';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

function useWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() =>  {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize',handleResize)
    
    return () => {
      window.removeEventListener('resize',handleResize)
    };

  },[])
  
  return width;
}

export default function RoutesHomePage(){
  var subRoutesFromData = []
  const [isMobile,setIsMobile]  = React.useState(false)
  var width = useWindowWidth();

  for(var i = 0; i < navDatas.length; i++){
    if(navDatas[i].subRoutes){
      for(var j = 0; j < navDatas[i].subRoutes.length; j++){
        subRoutesFromData.push(navDatas[i].subRoutes[j])
      }
    }
  }


  React.useEffect(() => {
    if(width < 768){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
  },[width])
 

  return (
    <>
      {
        !isMobile &&
        <div className='routes-main-container'>
          <div className='routes-sub-container'>
            <BasicTable subRoutes={subRoutesFromData}/>
          </div>
        </div>
      }
      { 
        isMobile &&
        (
          <div className='routes-mobile-main-container'>
            {
              subRoutesFromData.map((routeData) => {
                return(
                  <div className='routes-route-container'>
                      <h1 className='routes-route-header'>{routeData.title}</h1>
                    <div className='routes-route-pharagraph-container'>
                      <p className='mx-8'>{routeData.about}</p>
                    </div>
                    <div className='routes-route-link-container'>
                      <Link to={routeData.to}  className='routes-route-link'>{routeData.to} <FontAwesomeIcon icon={faSquareArrowUpRight} values={subRoutesFromData[0].to}/></Link>
                    </div>
                  </div>
                  )
              })
            }
          </div>
        )
      }
    </>
    )
};

const BasicTable = ({subRoutes}) => {
  return (
      <TableContainer style={{backgroundColor:"#CCB69B"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{width:"300px"}}>Route Name</TableCell>
              <TableCell  style={{width:"600px"}}>Purpose</TableCell>
              <TableCell  >Visit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subRoutes.map((route) => (
              <TableRow
                key={route.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  <Link to={route.to}>
                    {route.title}
                  </Link>
                </TableCell>
                <TableCell >
                  {route.about}
                </TableCell>
                <TableCell align='left'>
                  <Link to={route.to}>
                    <FontAwesomeIcon icon={faArrowRight} className='route-button' />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
