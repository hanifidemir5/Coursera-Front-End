  
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
          <div className='flex flex-col gap-8 justify-center mt-40'>
            {
              subRoutesFromData.map((routeData) => {
                return(
                  <div className='w-[90%] max-w-[300px] h-[220px] items-center justify-between flex flex-col rounded-b-3xl self-center bg-white'>
                      <h1 className='bg-gray-500 text-white text-center w-full text-2xl h-10'>{routeData.title}</h1>
                    <div className='h-full flex flex-col align-middle justify-center'>
                      <p className='mx-8'>{routeData.about}</p>
                    </div>
                    <div className='h-8 flex flex-col w-full text-center justify-center'>
                      <Link to={routeData.to}  className='cursor-pointer align-middle rounded-b-3xl italic bg-red-600'>{routeData.to} <FontAwesomeIcon icon={faSquareArrowUpRight} values={subRoutesFromData[0].to} className='text-black'/></Link>
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
              <TableCell  style={{width:"50px"}}>Visit</TableCell>
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
