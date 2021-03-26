import './OnboardingPage.scss';
import doctorImage from '../../assets/svg/undraw_medicine_b1ol 1.svg';
import MatchesTop from '../../component/matches/MatchesTop'
import MatchesCompare from '../../component/matches/MatchesCompare'

function OnbordingPage1(props) {
    return (
        <main className='onboard'>
            <img className='onboard__image' src={doctorImage} alt='doctors' />
            <h1 className='onboard__header'>Insurance for everyone</h1>
            <h2 className='label onboard__label'>Find the best insurance plan for you</h2>
            <button className='onboard__button'>GET STARTED</button>
            <MatchesTop name={'Manulife'} image={''} match={'83%'} />
            <MatchesCompare
                name={'Manulife'}
                image={''}
                match={'83%'}
                plan={'Individual Plan'}
                premium={500}
                deductible={50}
                coverage={['ER Visits', 'Maternity', 'Checkups']}
                notCovered={'Travel'}
            />
            <div className='onboard__box'>
                <span className="circle circle__active"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>

        </main>
    );
}

export default OnbordingPage1;