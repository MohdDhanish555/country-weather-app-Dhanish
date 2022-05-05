import Header from "../components/Header"
import "../assets/css/Details.css"

const CapitalDetails = ({data }  :any) => (
    <div>
        <Header />
        <h1 className="capital-name">{data?.location?.name}</h1>
        <div className="capital-details-container">
            <div className="card2">
                <h2> Temperature </h2>
                <p>{data?.current?.temperature}</p>
            </div>
            <div className="card3">
                <h2>Wind Speed</h2>
                <p>{data?.current?.wind_speed}</p>
            </div>
            <div className="card4">
                <h2>Weather Icon</h2>
                <img src={data?.current?.weather_icons[0]} alt="" />
            </div>
            <div className="card5">
                <h2>Timezone</h2>
                <p>{data?.location?.timezone_id}</p>
            </div>
        </div>
    </div>
)

export default CapitalDetails;