import React, { Component } from 'react';
import rightArrow from '../../assests/icons/right-chevron.svg';
import './Matches.scss';

class MatchesCompare extends Component {
    render() {
        const { image, match, name, plan, premium, deductible, coverage, notCovered } = this.props;
        return (
            <div className='matches-compare'>
                <div className='matches-compare__inner'>
                    <div className='matches-compare__outer' style={{width: match}}>

                    </div>
                </div>
                <h3 className='matches-compare__match'>{match} Match</h3>
                <div className='matches-compare__container'>
                    <img className="matches-compare__logo" src={image} alt='plan-icon' />
                    <div className='matches-compare__box'>
                        <h1 className='matches-compare__name'>{name}</h1>
                        <h3 className='matches-compare__label label'>{plan} match</h3>
                    </div>
                    <img className='matches-compare__arrow' src={rightArrow} alt='right-arrow' />
                </div>
                <div className='matches-compare__text'>
                    <p>Monthly Premium: ${premium}</p>
                    <p>Deductible: ${deductible}</p>
                    <p>Coverage: {coverage.toString()}</p>
                    <p>Not Covered: {notCovered}</p>
                </div>

            </div>
        );
    }
}

export default MatchesCompare;