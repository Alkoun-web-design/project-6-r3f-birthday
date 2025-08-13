import '../styles/App.css';
// import {ReactComponent as SpaceImage} from '../images/space3.svg';
// import earthImage from '../images/earth0.webp';
// import astronautImage from '../images/spaceman-min.webp';


export default function Center ({currentPage}) {

    return (
        <div id="center">
            <div id="newHome">
                <audio id="music" controls>
                    <source src="assets/aud/06. Love Rain Down.mp3" type="audio/mpeg"/>
                </audio>
                <svg id="heart" data-name="Layer 1" viewBox="0 0 122.88 107.39" xmlns="http://www.w3.org/2000/svg">
                    <path id="heart-path" 
                        d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" 
                        style={{fill: "rgba(255, 255, 255, 0.5)"}}/>
                </svg>
            </div>
            
            <div id="background-area">
                
                {/* <img alt="Space-Background" className="space" src={spaceImage}/> */}
                <div className="space">
                    
                    {/* <SpaceImage/> */}
                </div>
                {/* <img alt="Earth" className="earth" src={earthImage}/>
                <img alt="Floating Astronaut" className="man" src={astronautImage}/>
                Photo by <a href="https://unsplash.com/@davidmonje?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Monje</a> on <a href="https://unsplash.com/photos/3THn0EN_Ydo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                <img alt="Milkyway-Background" className="mw-bg" src="assets/img/space3.svg"/> */}
            </div>
            {currentPage}
        </div>
    );
}