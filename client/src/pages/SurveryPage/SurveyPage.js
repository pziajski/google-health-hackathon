import React, { Component } from 'react';

export default class SurveyPage extends Component {
    submitSurvey = (e) => {}

    render() {
        return (
            <section className="survey">
                <form onSubmit={(e) => this.submitSurvey(e)}>
                    <label>
                        <h2>Are you currently insured?</h2>
                        <div className="survey__radio-option">
                            <label>Yes</label>
                            <input type="radio" name="isInsured" />
                        </div>
                        <div className="survey__radio-option">
                            <label>No</label>
                            <input type="radio" name="notInsured" />
                        </div>
                    </label>
                    <label>
                        <h2>What coverage are you looking for?</h2>
                        <input className="survey__coverage" type="checkbox" name="vision" value="Vision Care" />
                        <input className="survey__coverage" type="checkbox" name="dental" value="Dental"/>
                        <input className="survey__coverage" type="checkbox" name="presriptions" value="Prescriptions" />
                        <input className="survey__coverage" type="checkbox" name="routine" value="Routine Examinations" />
                        <input className="survey__coverage" type="checkbox" name="additional" value="Additional Coverage (not listed above)" />
                        <input className="survey__coverage" type="checkbox" />
                    </label>
                </form>
            </section>
        )
    }
}