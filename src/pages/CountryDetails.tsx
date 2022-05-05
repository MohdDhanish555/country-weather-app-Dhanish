
import Button from '@mui/material/Button';
import Header from "../components/Header"

const CountryDetails = ({data , onClick } : any) => (
  <div>
    <Header />
    <ul>
  {
    data.map(({cca2 , population , latlng , flags , capital } : any) => (
      <li key={cca2} style={{listStyle : "none"}}>
       <p>Population : {population}</p>
       <p>Latitude : {latlng[0]}</p>
       <p>Longitude : {latlng[1]}</p>
       <img src={flags.png} alt="" />
       <div>
       <Button onClick={() => onClick(capital)}>{capital}</Button>
       </div>
      </li>
    ))}
</ul>

</div>
)

export default CountryDetails; 