import React from 'react';
import "./SurveyPage2.scss";
import tagIcon from "../../assests/icons/tag.svg";
import leftChevron from "../../assests/icons/left-chevron.svg";
import rightChevron from "../../assests/icons/right-chevron.svg";

export default function SurveyPage2(props) {
    console.log(props);
    return (
        <main className="survey">
            <form onSubmit={(e) => this.submitSurvey(e)}>
                <div>
                    <h2 className="survey__section-title">Are you currently insured?</h2>
                    <label className="survey__radio">
                        <p>Yes</p>
                        <input type="radio" name="radio-insured" />
                    </label>
                    <label className="survey__radio">
                        <p>No</p>
                        <input type="radio" name="radio-insured" />
                    </label>
                </div>
                <div>
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
                        <button type="click" className="survey__button" onClick={() => props.history.push("/survey/1")}>
                            <img src={leftChevron} alt="" />
                            BACK
                        </button>
                        <div className="survey__page-indicator">
                            <span className="circle"></span>
                            <span className="circle circle__active"></span>
                            <span className="circle"></span>
                        </div>
                        <button type="click" className="survey__button" onClick={() => props.history.push("/survey/3")}>
                            NEXT
                            <img src={rightChevron} alt="" />
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}