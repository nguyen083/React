import VideoHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video loop autoPlay muted>
                <source
                    src={VideoHomePage}
                    type="video/mp4" 
                    />
            </video>
        </div>
    );

}
export default HomePage;