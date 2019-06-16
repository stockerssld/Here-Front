import React from 'react'

import Grid from './Grid'

 

       
export default function Chat(match) {
    return (
        <div>
           {/* {console.log((match))} */}
        <Grid {...match} />                
        </div>
    )
}
