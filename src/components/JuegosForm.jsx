import React from 'react'
import { Card, CardHeader,CardContent,TextField,CardActions,Button, Select, MenuItem } from '@mui/material'

function JuegosForm() {
        const companias = [{ label: "Sony", value: "sony" },
             { label: "Microsoft", value:"microsoft" },
             { label: "Nintendo",  value: "nintendo" }];
    return(
        <Card raised>
            <CardHeader title="Registrar juegos" >  </CardHeader>
            <CardContent>
                <div className='mt-3'>
                    <TextField label="Nombre" fullWidth id='nombre-juego'></TextField>
                </div>
                <div className="mt-3">
                    <TextField multiline label="Descripcion" fullWidth id='desc-juego'></TextField>
                </div>
                <div className="mt-3">
                    <Select id='compania-juego'  label="Compañia">
                        {companias.map((c)=> <MenuItem value={c.value}>{c.label}</MenuItem>
                    )}
                    </Select>
                </div>
            </CardContent>
            <CardActions>
                <Button fullWidth variant='outlined' color="secondary" >Registrar Juegos</Button>
            </CardActions>
        </Card>
    )
}

export default JuegosForm