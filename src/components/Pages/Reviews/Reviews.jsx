import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import user1 from '../../../assets/user/user1.png'
import user2 from '../../../assets/user/user2.png'
import user3 from '../../../assets/user/user3.png'
const Reviews = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='bg-slate-500 lg:px-20'>
            <h1 className='text-7xl font-raleway font-extrabold text-center text-white mb-5'>what some clients say</h1>

            <Carousel
                responsive={responsive}
                draggable={true}
                swipeable={true}
                containerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                itemClass='px-5'
            >

                <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm h-[320px]">
                    <div className="flex flex-col items-center">
                        <img src={user1} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-medium">Hitesh paul</h3>
                            <p className="text-gray-500 text-sm">May 3, 2023</p>
                        </div>
                        <p> A whole generation of great Indian chefs who made their names abroad came from India hotel kitchens: Cyrus Todiwala and Gaggan Anand from the Taj, Atul Kochhar and Vineet Bhatia from the Oberoi group, Vikas Khanna from the Leela. And even the new generation has hotel roots: Chintan Pandya, currently the hottest Indian chef in the West, started out with the Oberoi chain.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm h-[320px]">
                    <div className="flex flex-col items-center">
                        <img src={user2} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-medium">Raghob Paul</h3>
                            <p className="text-gray-500 text-sm">May 3, 2023</p>
                        </div>
                        <p> Chef Vanika understands that what matters is on the inside. Her specialty lies in her ability to remain true to the produce and her restaurant, Sequel, is characterised by just that. She's a true-blue champion of sustainability in food and that's what we love about her.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm h-[320px]">
                    <div className="flex flex-col items-center">
                        <img src={user3} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-medium">Joy malik</h3>
                            <p className="text-gray-500 text-sm">May 3, 2023</p>
                        </div>
                        <p> A whole generation of great Indian chefs who made their names abroad came from India hotel kitchens: Cyrus Todiwala and Gaggan Anand from the Taj, Atul Kochhar and Vineet Bhatia from the Oberoi group, Vikas Khanna from the Leela. And even the new generation has hotel roots: Chintan Pandya, currently the hottest Indian chef in the West, started out with the Oberoi chain.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md p-6">
                    <div className="flex flex-col items-center w-full max-w-sm h-[320px]">
                        <img src="https://i.ibb.co/zhLr5zM/doctor-1-1.png" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-medium">John Doe</h3>
                            <p className="text-gray-500 text-sm">May 3, 2023</p>
                        </div>
                        <p> A whole generation of great Indian chefs who made their names abroad came from India hotel kitchens: Cyrus Todiwala and Gaggan Anand from the Taj, Atul Kochhar and Vineet Bhatia from the Oberoi group, Vikas Khanna from the Leela. And even the new generation has hotel roots: Chintan Pandya, currently the hottest Indian chef in the West, started out with the Oberoi chain.</p>
                    </div>
                </div>
            </Carousel>;
        </div >
    );
};

export default Reviews;