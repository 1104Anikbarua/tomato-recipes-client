import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
const Reviews = () => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://batch-7-assignment-10-server-1104anikbarua.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setComments(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className='bg-black my-20 lg:px-20 text-center'>
            <h1
                data-aos="zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
                data-aos-delay="100"


                className='text-7xl font-raleway font-extrabold text-center text-white mb-5'>what some clients say</h1>

            <Carousel
                responsive={responsive}
                draggable={true}
                swipeable={true}
                containerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                itemClass='px-5 py-5'
            >
                {
                    comments.map((review) => {
                        return <div
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="2000"
                            data-aos-delay="100"

                            key={review?.id}
                            className="bg-white shadow-md rounded-md p-6 w-full max-w-sm h-full">
                            <div className="flex flex-col items-center">
                                <img

                                    data-aos="zoom-in"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="3000"
                                    data-aos-delay="300"



                                    src={review?.image} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <h3
                                        data-aos="zoom-in"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="3000"
                                        data-aos-delay="700"

                                        className="text-lg font-medium">{review?.name}</h3>
                                    <p
                                        data-aos="zoom-in"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="3000"
                                        data-aos-delay="1100"

                                        className="text-gray-600 text-sm">{review?.date}</p>
                                </div>

                                <p
                                    data-aos="zoom-in"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="3000"
                                    data-aos-delay="1500"

                                    className="text-gray-600 text-sm">{review.short_description}</p>
                            </div>
                        </div>
                    })
                }
            </Carousel>
        </div >
    );
};

export default Reviews;