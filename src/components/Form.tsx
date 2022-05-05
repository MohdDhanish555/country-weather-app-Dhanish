import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { validate } from '../assets/validate';
import "../assets/css/Form.css"

const Form = ({onSubmit , onChange , value }: any) => (
  
    <form onSubmit={onSubmit} action="/pages/CountryDetails" className='form-container'>
       
         <TextField
          required
          id="filled-required"
          label="Country Name"
          variant="filled"
          onChange={onChange}
          value={value}
        />
        <Button type="submit" variant="contained" disabled = {!validate(value)}>Get Info</Button>           
    </form>
)

export default Form;