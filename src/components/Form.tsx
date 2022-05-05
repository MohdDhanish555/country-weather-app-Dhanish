import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { validate } from '../assets/validate';
import "../assets/css/Form.css"
import { FormType } from '../types/types';

const Form = ({onSubmit , onChange , value }: FormType) => (
  <div className='form-flex'>
    <form onSubmit={onSubmit} action="/pages/CountryDetails" className='form-container'>
       
         <TextField
         className='form-input'
          required
          id="filled-required"
          label="Country Name"
          variant="filled"
          onChange={onChange}
          value={value}
        />
        <Button className="form-button" type="submit" variant="contained" disabled = {!validate(value)}>Get Info</Button>           
    </form>
    </div>
)

export default Form;