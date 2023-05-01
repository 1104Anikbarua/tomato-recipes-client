import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

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
    console.log(chefs, loading)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                chefs?.map((chef) => <div
                    key={chef.id}>
                    <img src={chef.picture} alt="" />
                </div>

                )}
        </div >
    );
};

export default Chef;
