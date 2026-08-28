import React from 'react'
import { Card, CardHeader,CardContent,TextField,CardActions,Button } from '@mui/material'

function JuegosForm() {
    return(
        <Card raised>
            <CardHeader title="Registrar juegos" >  </CardHeader>
            <CardContent>
                <div className='mt-3'>
                    sssdsdsdsdsdsdsdsds
                    <TextField label="Nombre" fullWidth id='nombre-juego'></TextField>
                </div>
                <div className="mt-3">
                    <TextField multiline label="Descripcion" fullWidth id='desc-juego'></TextField>
                </div>
            </CardContent>
            <CardActions>
                <Button fullWidth variant='outlined' color="secondary" >Registrar Juegos</Button>
            </CardActions>
        </Card>
    )
}

export default JuegosForm