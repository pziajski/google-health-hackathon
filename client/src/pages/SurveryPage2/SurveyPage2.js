import React, { Component } from 'react';
import "./SurveyPage2.scss";
import tagIcon from "../../assests/icons/tag.svg";
import leftChevron from "../../assests/icons/left-chevron.svg";
import rightChevron from "../../assests/icons/right-chevron.svg";

export default class SurveyPageTwo extends Component {
    submitSurvey = (e) => { }

    render() {
        return (
            <section className="survey">
                <form onSubmit={(e) => this.submitSurvey(e)}>
                    <h2 className="survey__section-title">Are you currently insured?</h2>
                    <label className="survey__radio">
                        <p>Yes</p>
                        <input type="radio" name="radio-insured" />
                    </label>
                    <label className="survey__radio">
                        <p>No</p>
                        <input type="radio" name="radio-insured" />
                    </label>
                    <h2 className="survey__section-title">What coverage are you looking for?</h2>
                    <label className="survey__checkbox">
                        <input className="survey__coverage" type="checkbox" name="dental" value="Dental" />
                        <p>Dental</p>
                    </label>
                    <label className="survey__checkbox">
                        <input className="survey__coverage" type="checkbox" name="vision" value="Vision Care" />
                        <p>Vision Care</p>
                    </label>
                    <label className="survey__checkbox">
                        <input className="survey__coverage" type="checkbox" name="presriptions" value="Prescriptions" />
                        <p>Prescriptions</p>
                    </label>
                    <label className="survey__checkbox">
                        <input className="survey__coverage" type="checkbox" name="routine" value="Routine Examinations" />
                        <p>Routine Examinations</p>
                    </label>
                    <label className="survey__checkbox">
                        <input className="survey__coverage" type="checkbox" name="additional" value="Additional Coverage (not listed above)" />
                        <p>Additional Coverage (not listed above)</p>
                    </label>
                    <div className="survey__action">
                        <button type="click" className="survey__button">
                            <img src={leftChevron} alt="" />
                            BACK
                        </button>
                        <div className="survey__page-indicator"></div>
                        <button className="survey__button">
                            NEXT
                            <img src={rightChevron} alt="" />
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}