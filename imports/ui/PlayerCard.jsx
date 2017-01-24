import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Games } from '../api/games.js';
import RaisedButton from 'material-ui/RaisedButton';

Meteor.subscribe('games');

export default class PlayerCard extends React.Component {
  constructor(){
    super()
    this.state={
      cardShown:false,
    }
  }

  showCard() {
    this.setState({cardShown: true})
  }

  renderCard(){
    if (!this.state.cardShown) return null;
    const imageSource=`../../images/${this.props.card}.png`;
    return (
      <div style={{display:'flex', margin:'auto'}}>
        <img style={{margin:'auto'}} src={imageSource}/>
      </div>
    )
  }

  render () {
    return (
      <div>
        <RaisedButton
          onTouchTap={() => this.showCard()}
          style={{margin: 'auto', display: 'flex', width: '25%', height: 60}}
          label="Show Card"
          primary={true}
        />
        {this.renderCard()}
      </div>
    )
  }
}
