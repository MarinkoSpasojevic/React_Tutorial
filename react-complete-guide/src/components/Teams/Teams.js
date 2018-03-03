import React from 'react';
import Team from './Team/Team';

const teams = (props) => {
    return(
        props.teamList.map(team => {
            return <Team key={team.id} name={team.name} city={team.city} />
        })
    );
}

export default teams;