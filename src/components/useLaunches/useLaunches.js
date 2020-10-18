import {useState, useEffect} from 'react';
import GetData from '../../services/GetData';

const getData = new GetData();

const useLaunches = () => {

    const [data, setData] = useState([]);

    useState(() => {
        getData.getLaunches()
            .then(launches => setData(launches))
    }, []);
    const getLaunch = id => data.find(item => item.id === id);
    
    return { data, getLaunch }
}
export default useLaunches;