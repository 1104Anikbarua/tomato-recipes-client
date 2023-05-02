import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const Chef = () => {
    const [loading, setLoading] = useState(false)
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/info')
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5 my-20 px-20'>
            {
                chefs?.map((chef) => <div
                    key={chef.id} className='w-full mx-auto bg-white shadow-lg rounded-md p-5'>
                    <div>
                        <img className='w-full' src={chef.picture} alt="" />
                        <h4 className='font-raleway font-extrabold text-xl'>Chef Name :{chef.name}</h4>
                        <p className='font-raleway font-medium text-xl'>Experience :{chef.experience} years</p>
                        <p className='font-raleway font-medium text-xl'>Recipies {chef.recipes}</p>
                        <p className='font-raleway font-medium text-xl'>Likes {chef.likes}</p>
                        <button
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
