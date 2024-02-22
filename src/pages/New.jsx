import React from 'react'
import "./New.css"
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function New() {
  return (
    <div>
        <div className='h1Css'>
        <h1>Hello this page is for check css.</h1>

        </div>
        <Grid container xs={12}  style={{ marginTop:"10vh", display:'grid',placeItems:'center'}}>
            <Grid xs={6}>
                <Typography variant='h2'>And this is for check mui</Typography>
            </Grid>

        </Grid>
        
    </div>
  )
}

export default New