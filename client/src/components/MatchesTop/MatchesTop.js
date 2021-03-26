import React from 'react';
import MatchesTopItem from "../MatchesTopItem/MatchesTopItem";
import "./MatchesTop.scss";

export default function MatchesTop(props) {
    const temp = [
        {
            id: "1",
            name: "Manulife",
            image: "",
            match: "85%"
        },
        {
            id: "2",
            name: "Kaiser Health",
            image: "",
            match: "83%"
        },
        {
            id: "3",
            name: "Humana",
            image: "",
            match: "75%"
        },
        {
            id: "4",
            name: "CVS",
            image: "",
            match: "72%"
        },
        {
            id: "5",
            name: "WellCare",
            image: "",
            match: "70%"
        },
    ];

    return (
        <div className="matches-top">
            {
                temp.map(company => {
                    return <MatchesTopItem key={company.id} name={company.name} image={company.image} match={company.match} />
                })
            }
        </div>
    )
}
