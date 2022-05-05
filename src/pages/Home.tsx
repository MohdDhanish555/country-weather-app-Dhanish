import Form from '../components/Form'
import Header from '../components/Header';

const Home = ({onSubmit , onChange , value }: any) => (
    <div>
        <Header />
        <Form onChange={onChange} value={value} onSubmit={onSubmit}/>
    </div>
)

export default Home;