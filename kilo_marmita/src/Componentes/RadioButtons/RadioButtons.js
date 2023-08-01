import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tamanho</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value= {props.opt[0][0]} control={<Radio />} label={props.opt[0][1]} />
        <FormControlLabel value= {props.opt[1][0]} control={<Radio />} label={props.opt[1][1]} />
        <FormControlLabel value= {props.opt[2][0]} control={<Radio />} label={props.opt[2][1]} />
      </RadioGroup>
    </FormControl>
  );
}
