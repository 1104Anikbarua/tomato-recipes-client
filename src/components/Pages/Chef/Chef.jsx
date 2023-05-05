import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import '@smastrom/react-rating/style.css'


const Chef = () => {
    const [loading, setLoading] = useState(false)
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://batch-7-assignment-10-server-1104anikbarua.vercel.app/info')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoading(false)
            })
    }, [])
    // console.log(chefs, loading)
    const navigate = useNavigate()
    const handleRecipesDetail = (id) => {
        navigate(`recipes/${id}`)
    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5 my-20 px-5 lg:px-20'>
            {
                chefs?.map((chef) => <div

                    key={chef.id} className='w-full mx-auto bg-white shadow-lg rounded-md p-5'>
                    <div>

                        <LazyLoad
                            height="290px"
                            // width='100%'
                            threshold={0.90}>
                            <img className='w-full h-72 rounded' src={chef.picture} alt="chef image" />

                        </LazyLoad>
                        <h4
                            data-aos="zoom-in-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="100"

                            className='font-raleway font-extrabold text-xl'>Chef Name :{chef.name}</h4>
                        <p
                            data-aos="zoom-in-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="300"

                            className='font-raleway font-medium text-xl'>Experience :{chef.experience} years</p>
                        <p
                            data-aos="zoom-in-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="600"

                            className='font-raleway font-medium text-xl'>Recipies {chef.recipes}</p>
                        <p
                            data-aos="zoom-in-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="900"

                            className='font-raleway font-medium text-xl'>Likes {chef.likes}</p>
                        <button
                            data-aos="zoom-in-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="1300"

                            className='bg-black w-40 rounded-md h-10 mt-5 text-white font-bold'
                            onClick={() => handleRecipesDetail(chef.id)}
                        >View Recipes</button>
                    </div>
                </div>

                )}
        </div >
    );
};

export default Chef;
