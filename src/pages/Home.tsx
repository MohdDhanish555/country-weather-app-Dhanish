import Form from '../components/Form'
import Header from '../components/Header';
import {FormType} from '../types/types'

const Home = ({onSubmit , onChange , value }: FormType) => (
    <div>
        <Header />
        <Form onChange={onChange} value={value} onSubmit={onSubmit}/>
    </div>
)

export default Home;