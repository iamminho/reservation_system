import { useContext } from 'react';

//useContext
import {GetInformation} from '../pages/Reservation';

//mui
import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000-0000-0000"
      // definitions={{
      //   '#': /[0-9]/,
      // }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {

  const { getPhoneNumber, getReservationDay } = useContext(GetInformation);  
  
  const [values, setValues] = React.useState({
    textmask: '',    
  });
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    getPhoneNumber(values.textmask);
  };

  return (
    <Box
      sx={{'& > :not(style)': {m: 1,},}}>  

      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">phone number</InputLabel>
        <Input          
          onChange={handleChange}
          value={values.textmask}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </Box>
  );
}