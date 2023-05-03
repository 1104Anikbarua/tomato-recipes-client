import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { SlLike } from 'react-icons/sl'
import { FcLike } from 'react-icons/fc'

const ChefRecipe = () => {
    const chefDetails = useLoaderData();
    const [blockB, setBlockB] = useState([])
    // console.log(chefDetails)
    const { picture, name, desc, experience, recipes, likes, recipeDetail } = chefDetails;
    // console.log(recipeDetail.map((recipe) => console.log(recipe)))
    const handleFavouriteItem = (id) => {
        // console.log('clicked', id);
        const blockItem = recipeDetail.find((search) => search?.id === id);
        // console.log(blockItem)
        toast.info(`${blockItem?.name} is my favourite Recipe`)
        if (blockB.some((item) => item.id === id)) {

            setBlockB(blockB?.filter((item) => item?.id !== id));
        } else {

            setBlockB([...blockB, blockItem]);
        }
    };
    // console.log(recipeDetail)
    return (
        <div className='mt-40 mb-20 px-5 lg:px-20'>
            <div className='flex flex-col lg:flex-row items-start justify-evenly'>
                <div className='w-full'>
                    <img className='w-full max-w-lg' src={picture} alt="" />
                </div>
                <div className='w-full'>
                    <h4 className='font-raleway font-extrabold text-xl'>Chef Name:{name}</h4>
                    <p className='font-raleway font-medium text-xl'>{desc}</p>
                    <p className='font-raleway font-medium text-xl'><span className='font-extrabold'>Experience</span>:{experience} years</p>
                    <p className='font-raleway font-medium text-xl'><span className='font-extrabold'>Recipies</span>: {recipes}</p>
                    <p className='font-raleway font-medium text-xl flex items-center'>

                        <span className='font-extrabold'>
                            <SlLike className='text-blue-800 mr-3'></SlLike>
                        </span> {likes}</p>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full my-5">
                    <p className='font-raleway font-medium text-xl my-5'>Recipies {name} cooks</p>
                    <table className="table w-full">
                        <thead>
                            <tr className='text-center'>
                                <th className='font-raleway font-semibold text-xl'>NO</th>
                                <th className='font-raleway font-semibold text-xl'>Image</th>
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
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-40 h-40">
                                                    <img src={detail?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
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
                                    <td className='text-center' title={detail?.rating}>

                                        <Rating
                                            style={{ width: 150 }}
                                            value={Math.round(detail?.rating) || 0}
                                            readOnly

                                        >
                                        </Rating>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleFavouriteItem(detail.id)}

                                            disabled={blockB.some((item) => item?.id === detail?.id)}

                                            className="bg-black w-40 rounded-md h-10 mt-5 text-white font-bold cursor-pointer
                                            disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center
                                            ">Favourite
                                            <FcLike className='text-xl ml-2'></FcLike>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            )

                        }
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ChefRecipe;