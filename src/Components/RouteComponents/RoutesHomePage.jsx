  
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

export default function RoutesHomePage(){
  var subRoutesFromData = []
  
  for(var i = 0; i < navDatas.length; i++){
    if(navDatas[i].subRoutes){
      for(var j = 0; j < navDatas[i].subRoutes.length; j++){
        subRoutesFromData.push(navDatas[i].subRoutes[j])
      }
    }
  }

  return (
    <div className='w-full lg:w-4/6 h-full'>
      <BasicTable subRoutes={subRoutesFromData}/>
    </div>
    // <div className='w-full h-full'>
    //   <ul className="text-4xl">
    //       { navDatas.map((data) => (
    //         data.subRoutes 
    //         ? 
    //         <div key={data.text} to={data.link} className='flex gap-6 justify-center flex-wrap'>
    //               {
    //                 data.subRoutes.map((route) => {
    //                   return(
    //                     <Link key={route.title} to={route.to} className='p-4 hover:bg-slate-300'>{route.title}</Link>
    //                   )
    //                 })
    //               }
    //         </div>
    //         :
    //         <Link key={data.text} to={data.link} >
    //               {data.text}
    //         </Link>
    //       ))}
    //   </ul>
    // </div>
    )
};

function createData(
  name,
  purpose
) {
  return { name, purpose };
}

const rows = [
  createData('Map', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

const BasicTable = ({subRoutes}) => {
  return (
    <TableContainer component={Paper}>
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
                  <FontAwesomeIcon icon={faArrowRight} className='p-4 bg-blue-200 rounded-xl' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
