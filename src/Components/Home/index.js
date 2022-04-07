import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Teams from '../Teams'
import { showAlertOkey } from '../../Services/alertService';

const Home = () => {
    const nameTwo = useSelector(state => state.teams.nameTeamTwo);
    const nameOne = useSelector(state => state.teams.nameTeamOne);
    const allPlayers = useSelector(state => state.teams.allPlayers);
    

    useEffect(() => {
        if (allPlayers.length == 10 && nameOne != 'Equipo 1' && nameTwo != 'Equipo 2') {
          showAlertOkey({title : 'Equipos formados y completos!'})
        }
      }, [allPlayers, nameOne, nameTwo])

    return (
        <>
            <Teams />
        </>)

}
 
export default Home;