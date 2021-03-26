import React from 'react';
import MatchesCompareItem from "../MatchesCompareItem/MatchesCompareItem";
import "./MatchesCompare.scss";

export default function MatchesCompare() {
    const temp = [
        {
            name: 'Manulife',
            image: '',
            match: '83%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', 'Maternity', 'Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'Kaiser Health',
            image: '',
            match: '83%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', 'Maternity', 'Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'Humana',
            image: '',
            match: '83%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', 'Maternity', 'Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'CVS',
            image: '',
            match: '83%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', 'Maternity', 'Checkups'],
            notCovered: 'Travel'
        },{
            name: 'WellCase',
            image: '',
            match: '83%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', 'Maternity', 'Checkups'],
            notCovered: 'Travel'
        }
    ];

    return (
        <div className="matches-compare">
            {
                temp.map(company => 
                    <MatchesCompareItem
                        key={company.name}
                        name={company.name}
                        image={company.image}
                        match={company.match}
                        plan={company.plan}
                        premium={company.premium}
                        deductible={company.deductible}
                        coverage={company.coverage}
                        notCovered={company.notCovered}
                />)
            }
        </div>
    )
}
