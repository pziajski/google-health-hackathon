import React from 'react';
import "./SurveyPage3.scss";
import tagIcon from "../../assets/svg/tag.svg";
import leftChevron from "../../assets/svg/left-chevron.svg";
import rightChevron from "../../assets/svg/right-chevron.svg";

export default function SurveyPage3(props) {
    return (
        <div className="survey-3">
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
                    <button type="click" className="survey__button" onClick={() => props.history.push("/survey/2")}>
                        <img src={leftChevron} alt="" />
                            BACK
                        </button>
                    <div className="survey__page-indicator">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle circle__active"></span>
                    </div>
                    <button type="click" className="survey__button" onClick={() => props.history.push("/survey/4")}>
                        NEXT
                            <img src={rightChevron} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
