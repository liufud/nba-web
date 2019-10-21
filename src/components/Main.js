import React from 'react';
import nba from 'nba';
import DataViewContainer from './DataViewContainer';
import { Profile } from './Profile';
import SearchBar from './SearchBar';
import { DEFAULT_PLAYER_INFO } from '../constants';
// import axios from 'axios';

export class Main extends React.Component {
  state = {
    playerInfo: DEFAULT_PLAYER_INFO,
  };

  loadPlayerInfo = (playerName) => {
    nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
      const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      this.setState({ playerInfo });
    });
  }

  handleSelectPlayer = (playerName) => {
      console.log(playerName);
    this.loadPlayerInfo(playerName);
   }

  componentDidMount() {
    //   axios.get('http://stats.nba.com/stats/commonplayerinfo')
    //     .then((res) => {
    //         debugger;
    //     })
    // const httpInterceptor = axios.interceptors.request.use(function (config) {
    //     return config;
    //   }, function (error) {
    //     console.log(error)
    //     return Promise.reject(error);
    //   });
    this.loadPlayerInfo(this.state.playerInfo.fullName);
    // axios.interceptors.request.eject(httpInterceptor);

  }

  render() {
    return (
      <div className="main">
        <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
        <div className="player">
          <Profile playerInfo={this.state.playerInfo} />
          <DataViewContainer playerId={this.state.playerInfo.playerId} />
        </div>
      </div>
    );
  }
}
