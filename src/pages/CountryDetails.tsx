import "../assets/css/Details.css"
import Button from '@mui/material/Button';
import Header from "../components/Header"
import { CountryDetailsType } from "../types/types";

const CountryDetails = ({data , onClick } : CountryDetailsType) => (
  <div>
    <Header />
      {
        data.map(({name ,cca2 , population , latlng , flags , capital } : any) => (
          <div className='country-details-container'  key={cca2}>
            <div className="card1">
              <h1>{name.common}</h1>
              <img src={flags.png} alt="flag" width="250px"/>
              <Button variant="contained" onClick={() => onClick(capital)}>{capital}</Button>
            </div>
            <div className="card2">
              <h2>Population</h2>
              <p>{population}</p>
            </div>
            <div className="card3">
              <h2>Latitude</h2>
              <p> {latlng[0]}</p>
            </div>
            <div className="card4">
              <h2>Longitude</h2>
              <p >{latlng[1]}</p>
            </div>
          </div>
      ))}

</div>
)

export default CountryDetails; 