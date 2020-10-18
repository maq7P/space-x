import React, {useState, useEffect} from 'react';
import './details.css';
import {useHistory} from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';

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
                    <Youtube className="details-youtube" videoId={launch.links.youtube_id}/>
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name}/>
                        </div>
                        <div className="details-content">
                        <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
}
export default Details;