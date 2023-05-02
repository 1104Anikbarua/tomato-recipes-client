import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const chefDetails = useLoaderData();
    const [clicked, setClicked] = useState(false);
    // console.log(chefDetails)
    const { picture, name, desc, experience, recipes, likes, recipeDetail } = chefDetails;
    // console.log(recipeDetail)
    const handleFavouriteItem = () => {
        console.log('clicked')
    }
    return (
        <div className='mt-40 mb-20 px-20'>
            <div className='flex flex-col lg:flex-row items-start justify-evenly'>
                <div className='w-full'>
                    <img className='w-full max-w-lg' src={picture} alt="" />
                </div>
                <div className='w-full'>
                    <h4 className='font-raleway font-extrabold text-xl'>Chef Name:{name}</h4>
                    <p className='font-raleway font-medium text-xl'>{desc}</p>
                    <p className='font-raleway font-medium text-xl'><span className='font-extrabold'>Experience</span>:{experience} years</p>
                    <p className='font-raleway font-medium text-xl'><span className='font-extrabold'>Recipies</span>: {recipes}</p>
                    <p className='font-raleway font-medium text-xl'><span className='font-extrabold'>Likes</span>: {likes}</p>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-center'>
                                <th className='font-raleway font-semibold text-xl'>NO</th>
                                <th className='font-raleway font-semibold text-xl'>Recipe Name</th>
                                <th className='font-raleway font-semibold text-xl'>Ingredients</th>
                                <th className='font-raleway font-semibold text-xl'>Cooking Method</th>
                                <th className='font-raleway font-semibold text-xl'>Rating</th>
                                <th className='font-raleway font-semibold text-xl'>Favourite</th>
                            </tr>
                        </thead>
                        {
                            recipeDetail.map((detail, index) => <tbody
                                key={index}
                            >
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold font-raleway">{detail?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            detail?.ingredients?.map((ingredient, index) => <span
                                                key={index}
                                                className="badge badge-ghost badge-sm">{ingredient}</span>)
                                        }
                                    </td>
                                    <td className='font-raleway'>{detail.method}</td>
                                    <td className='text-center'>
                                        {detail.rating}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleFavouriteItem()}

                                            disabled={clicked ? true : false}

                                            className="bg-black w-40 rounded-md h-10 mt-5 text-white font-bold cursor-pointer">Favourite</button>
                                    </td>
                                </tr>
                            </tbody>
                            )

                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;