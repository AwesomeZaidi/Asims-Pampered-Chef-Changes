
import React, { Component} from 'react';
// import Slider from '../../components/Slider/Slider.jsx';
// import Modal from '../../components/Modal/Modal.jsx';
import '../../styles/home.scss';
import headerbg from '../../assets/images/header-bg.jpg';
class Home extends Component {

    componentDidMount = () => {
    };

    render() {
        return (
            <div className='home'>
                <div className='header-section'>
                    <p className='p_primary'><strong>The party starts in the kitchen</strong></p>
                    <h4 className='h4_primary'>Everything's More Fun with Bubbles</h4>
                    <button><strong>Shop Now</strong></button>
                </div>
            </div>
        )
    };
};

export default Home;