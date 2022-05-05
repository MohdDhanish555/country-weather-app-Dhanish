import Header from "../components/Header"

const CapitalDetails = ({data }  :any) => (
    <div>
        <Header />
            <h3> {data?.current?.temperature} </h3>
            <p>{data?.current?.wind_speed}</p>
            <img src={data?.current?.weather_icons[0]} alt="" />
            <p>{data?.location?.timezone_id}</p>
    </div>
)

export default CapitalDetails;