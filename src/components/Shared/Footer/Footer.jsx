import React from 'react';
import facebook from '../../../assets/icon/facebook.png'
import google from '../../../assets/icon/googlee.png'
import twitter from '../../../assets/icon/twitter.png'
import instagram from '../../../assets/icon/instagram.png'
import pinterest from '../../../assets/icon/pinterest.png'
import recentpost1 from '../../../assets/logo/thumb1.png'
import { Link } from 'react-router-dom';
import { AiOutlineSwapRight } from 'react-icons/ai';
const Footer = () => {
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
                                to={'/'}>Read More

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
                        <ul className="text-sm flex items-start">
                            <li className='mr-5'>
                                <img

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={facebook} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={twitter} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={instagram} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={google} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={pinterest} alt="" />
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;