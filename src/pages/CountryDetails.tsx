
import Button from '@mui/material/Button';


const CountryDetails = ({data , onClick } : any) => (
  <div>
    <ul>
  {
    data.map(({cca2 , population , latlng , flags , capital } : any) => (
      <li key={cca2} style={{listStyle : "none"}}>
       <p>Population : {population}</p>
       <p>Lat/Long : {latlng}</p>
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