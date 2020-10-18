import React, {useState, useEffect} from 'react';
import './details.css';
import {useHistory} from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches';

const Details = (path) => {
    
    const [launch, setLaunch] = useState(null)

    const { getLaunch } = useLaunches()

    useEffect(() => {
        setLaunch(getLaunch(path.match.params.id))
    })

    console.log(launch);

    let history = useHistory();

    if (!launch)return <div>Загрузка...</div>
    return(
        <>
        <Main title={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name}/>
                        </div>
                        <div className="details-content">
                        <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    {/* <div>
                        <iframe className="details-youtube" width="560" height="315" src="https://www.youtube.com/embed/dLQ2tZEH6G0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div> */}
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
}
export default Details;