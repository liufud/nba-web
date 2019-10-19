import React from 'react';
import DataViewContainer from './DataViewContainer';
import { Profile } from './Profile';
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            // teamAbbreviation: 'GSW'
        }
    }
    componentDidMount() {
        window.nba = nba;
        nba.stats.playerInfo({ PlayerID: 201939 })
            .then((response) => {
                console.log(response);
                const playerInfo = Object.assign(response.commonPlayerInfo[0], response.playerHeadlineStats[0]);
                this.setState({playerInfo});
            });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
            </div>
        );
    };
}