import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Reviews = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

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
        <div className='bg-black my-20 lg:px-20 text-center'>
            <h1 className='text-7xl font-raleway font-extrabold text-center text-white mb-5'>what some clients say</h1>

            <Carousel
                responsive={responsive}
                draggable={true}
                swipeable={true}
                containerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                itemClass='px-5'
            >
                {
                    comments.map((review) => {
                        return <div
                            key={review?.id}
                            className="bg-white shadow-md rounded-md p-6 w-full max-w-sm h-full">
                            <div className="flex flex-col items-center">
                                <img src={review?.image} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <h3 className="text-lg font-medium">{review?.name}</h3>
                                    <p className="text-gray-500 text-sm">{review?.date}</p>
                                </div>
                                <p>{review.short_description}</p>
                            </div>
                        </div>
                    })
                }
            </Carousel>;
        </div >
    );
};

export default Reviews;