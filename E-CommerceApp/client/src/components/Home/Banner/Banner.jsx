
import BannerImg from '../../../assets/banner-img.png';
import "./Banner.scss";


const Banner = () => {

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nisi velit assumenda quo molestias tenetur ad debitis,
                        voluptatibus eum molestiae.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className='banner-img' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
