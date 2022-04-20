import { useContext } from 'react';
//useContext
import {GetInformation} from '../pages/Reservation';
//mui
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Stack from '@mui/material/Stack';
import { PickersDay } from '@mui/x-date-pickers';

//datepicker pickersday를 조작해서 색상을 바꾸자 

const DatePick = () => {

    const [value, setValue] = React.useState(new Date());

    const { getPhoneNumber, getReservationDay } = useContext(GetInformation);

    // const handleChange = (e, newValue) => {
    //   setValue(newValue);      
    //   getReservationDay(value);
    // }
        
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDatePicker
              label="For mobile"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                getReservationDay(value);
              }}                                             
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
    );
}
export default DatePick;