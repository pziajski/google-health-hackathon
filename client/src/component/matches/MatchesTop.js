import React, { Component } from 'react';
import rightArrow from '../../assests/icons/right-chevron.svg';
import './Matches.scss';

class MatchesTop extends Component {
  render() {
    const { name, match, image } = this.props;
    return (
      <div className="matches-top">
        <img className="matches-top__logo" src={image} alt='plan-icon' />
        <div className="matches-top__container">
          <div className="matches-top__box">
            <h1 className='matches-top__name'>{name}</h1>
            <img src={rightArrow} alt='right-arrow' />
          </div>
          <h3 className='matches-top__label label'>{match} match</h3>
        </div>

      </div>
    );
  }
}

export default MatchesTop;