
import React, { Component} from 'react';
import '../../styles/home.scss';
import '../../styles/fade.css';
import '../../utils/fade.js'; // tried using built in scroll library, didn't work, so implemented myself.
import Typed from 'react-typed';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='header-section'>
                    <p className='p_primary'><strong><Typed 
                        strings={['The party starts in the kitchen']} 
                        typeSpeed={40} 
                        /></strong>
                    </p>
                    <h4 className='h4_primary'>Everything's More Fun with Bubbles</h4>
                    <button><strong>Shop Now</strong></button>
                </div>   
                <div className='cont'>
                    <h4><center>STOCK UP FOR SPRING CELEBRATIONS</center></h4>
                    <img src={img1}></img>
                    <img className='hideme' src={img2}></img>
                    <img className='hideme' src={img3}></img>
                    <img className='hideme' src={img4}></img>
                    <img className='hideme' src={img5}></img>
                    <img className='hideme' src={img6}></img>
                </div>
            </div>
        )
    };
};

export default Home;