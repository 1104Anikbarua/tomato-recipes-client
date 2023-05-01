import React from 'react';
import facebook from '../../../assets/icon/facebook.png'
import google from '../../../assets/icon/googlee.png'
import twitter from '../../../assets/icon/twitter.png'
import instagram from '../../../assets/icon/instagram.png'
import recentpost1 from '../../../assets/logo/thumb1.png'
const Footer = () => {
    return (
        <footer class="bg-black text-white py-8 px-20">
            <div class="max-w-screen-xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div class="p-4">
                        <h3 className='font-raleway font-bold text-xl mb-5'>About us</h3>
                        <ul class="text-sm">
                            <p>Terms & Policy</p>
                        </ul>
                    </div>
                    <div class="p-4">
                        <h3 className='font-raleway font-bold text-xl mb-5'>Recent Post</h3>
                        <div className='flex items-start gap-5 mb-5'>
                            <img className='w-20 h-20 rounded-md' src={recentpost1} alt="" />
                            <div>
                                <p>Hand picked ingredients for our best customers</p>
                                <p>20-4-2023</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-5 mb-5'>
                            <img className='w-20 h-20 rounded-md' src={recentpost1} alt="" />
                            <div>
                                <p>Hand picked ingredients for our best customers</p>
                                <p>20-4-2023</p>
                            </div>
                        </div>

                    </div>
                    <div class="p-4">
                        <h3 class="font-raleway text-lg font-medium mb-2">Contact Us</h3>
                        <ul class="text-sm flex items-start">
                            <li className='mr-5'>
                                <img className='w-10 h-10' src={facebook} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img className='w-10 h-10' src={twitter} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img className='w-10 h-10' src={instagram} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img className='w-10 h-10' src={google} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;