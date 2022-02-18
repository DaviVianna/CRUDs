import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';




const showHide = () => {


    const [senha, setSenha]               = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return(

        <>
            <FormControl>
                <TextField
                    disabled
                    value={senha}
                    onChange={ e => setSenha(e.target.value)}
                    variant="filled"
                />
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={e => setShowPassword(!showPassword)}
                      
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
            </FormControl>

        </>

    );
}


export default showHide;
        