import React from 'react';
import facebook from '../../../assets/icon/facebook.png'
import google from '../../../assets/icon/googlee.png'
import twitter from '../../../assets/icon/twitter.png'
import instagram from '../../../assets/icon/instagram.png'
import pinterest from '../../../assets/icon/pinterest.png'
import recentpost1 from '../../../assets/logo/thumb1.png'
import { Link } from 'react-router-dom';
import { AiOutlineSwapRight } from 'react-icons/ai';
import phone from '../../../assets/icon/smartphone.png'
import message from '../../../assets/icon/text.png'
import location from '../../../assets/icon/placeholder.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-black text-white py-8 px-5 lg:px-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-4">
                        <h3 className='font-raleway font-bold text-xl mb-5'>About us</h3>
                        <ul className="text-sm">
                            <p className='text-base font-medium'>
                                Tomato Indian chef website offers great Indian Food in Hotels of its kind in a Five Star Hotel. The cuisine is great, both vegetarian and Non-vegetarian Indian Food.
                            </p>
                            <Link className='text-base font-medium flex items-end hover:text-orange-600'
                                to={'about'}>Read More

                                <AiOutlineSwapRight className='font-semibold text-xl'></AiOutlineSwapRight>
                            </Link>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className='font-raleway font-bold text-xl mb-5'>Recent Post</h3>
                        <div className='flex flex-col lg:flex-row items-start gap-5 mb-5'>
                            <img className='w-20 h-20 rounded-md' src={recentpost1} alt="" />
                            <div>
                                <p>Hand picked ingredients for our best customers</p>
                                <p>20-4-2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-start gap-5 mb-5'>
                            <img className='w-20 h-20 rounded-md' src={recentpost1} alt="" />
                            <div>
                                <p>Hand picked ingredients for our best customers</p>
                                <p>20-4-2023</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-4">
                        <h3 className="font-raleway text-lg font-bold mb-5">Contact Us</h3>
                        <div className='flex flex-col gap-5'>
                            <ul className="text-sm flex items-start justify-center lg:justify-start">
                                <li className='mr-5'>
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                        data-aos-delay="100"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={facebook} alt="" />
                                </li>
                                <li className='mr-5'>
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                        data-aos-delay="300"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={twitter} alt="" />
                                </li>
                                <li className='mr-5'>
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                        data-aos-delay="500"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={instagram} alt="" />
                                </li>
                                <li className='mr-5'>
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                        data-aos-delay="700"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={google} alt="" />
                                </li>
                                <li className='mr-5'>
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                        data-aos-delay="900"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={pinterest} alt="" />
                                </li>

                            </ul>
                            <ul className='flex flex-col gap-5'>
                                <li className='flex items-center
                                justify-center'>
                                    <Link title='Click Here to see the location in map' to={'map'}>
                                        <img
                                            data-aos="fade-down"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="1000"
                                            data-aos-delay="1000"

                                            className='w-8 lg:w-10 h-8 lg:h-10' src={location} alt="" />
                                    </Link>
                                    <p

                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1100"
                                        data-aos-delay="900"

                                        className='ml-2'>Aareymilk Colony 400065	Maharashtra	Mumbai</p>
                                </li>
                                <li className='flex items-center'>
                                    <img
                                        data-aos="fade-down"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1300"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={phone} alt="" />
                                    <p

                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1100"

                                        className='ml-2'>00 800 4588 1825</p>
                                </li>
                                <li className='flex items-center'>
                                    <img
                                        data-aos="fade-down"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1500"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={message} alt="" />
                                    <p
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1300"

                                        className='ml-2'>support@gmail.com</p>
                                </li>
                            </ul>
                            <p
                                className='text-xl font-bold text-center text-black'>&copy; Tomato
                            </p>
                        </div>
                    </div>
                </div>
                <p
                    className='text-xl font-bold text-center'>&copy; Tomato {year}</p>
            </div>

        </footer>


    );
};

export default Footer;