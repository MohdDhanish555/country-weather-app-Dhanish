import React , { useState , useEffect } from 'react';
import './App.css';
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails'
import CapitalDetails from './pages/CapitalDetails'
import { Routes, Route , useNavigate} from "react-router-dom";
import { country_API , capital_API } from './assets/constants'


function App() {
  const [searchText , setSearchText] = useState("")
  
  const [countryURL , setCountryURL] = useState(country_API)
  const [countryData , setCountryData] = useState([])

  const [capitalURL , setCapitalURL] = useState(capital_API)
  const [capitalData , setCapitalData] = useState({})

  useEffect(() => {
    setCountryURL(country_API + searchText)
  },[searchText])

  useEffect(() => {
    fetch(capitalURL)
    .then(response => response.json())
    .then(response => setCapitalData(response)); 
  },[capitalURL])

  //FOR NAVIGATION

  const navigate = useNavigate();

  // FETCHING & HANDLING COUNTRY DETAILS 

  function handleChange( event : any) {
    setSearchText( event.target.value )
  }

  function handleErrors(response : any) {
    if (!response.ok) {
        throw alert("Please Enter a valid Country name")
    }
    return response.json();
}

  function fetchCountryData() {
    fetch(countryURL)
    .then(handleErrors)
    .then(response => setCountryData(response))
    .catch(() => navigate("/")); 
  }

  function handleSubmit(event : any) {
    event.preventDefault();
    fetchCountryData();
    navigate("/CountryDetails")
  }

  // FETCHING CAPITAL DETAILS

  function handleClick(capital : any ) {
    setCapitalURL(capital_API + capital)
    navigate("/CapitalDetails")
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home onChange={handleChange} value={searchText} onSubmit={handleSubmit}/> } />
        <Route path="/CountryDetails" element={ <CountryDetails data={countryData} onClick={handleClick}/> } />
        <Route path="/CapitalDetails" element={ <CapitalDetails data={capitalData} /> } />
      </Routes>
    </div>
  );
}

export default App;
