import React from 'react';
import thumb from '../../../assets/logo/thumb1.png'
import thumb2 from '../../../assets/logo/thumb2.png'
import thumb3 from '../../../assets/logo/thumb3.png'

const History = () => {
    return (
        <div>
            <div className='grid grid-cols-2 px-20'>
                <div className='grid grid-cols-1 gap-5'>
                    <div className=''>
                        <img className='' src={thumb} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <img src={thumb2} alt="" />
                        </div>
                        <div>
                            <img src={thumb3} alt="" />
                        </div>
                    </div>
                </div>
                <div className='text-rose-500'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, officiis suscipit numquam natus esse sed? Quasi tempore culpa ratione laborum assumenda molestias corporis, architecto maiores recusandae quaerat quae sequi a sed, nobis magni nemo ex numquam tempora inventore sunt hic! Quidem, eligendi eius explicabo nam, ex provident quae quia et incidunt eum voluptatibus? Libero vero autem a, harum quis ipsam at aspernatur dolorum tempora, vitae, soluta sit deleniti tenetur. Minima aliquid quia eveniet atque ad cupiditate reiciendis necessitatibus delectus magnam ratione, assumenda incidunt doloribus odio dolorem. Vel sapiente numquam officia minus reiciendis voluptatum alias! Itaque maiores ducimus tempora deleniti?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo beatae voluptatem est! At praesentium doloremque sunt aliquid, optio quam ipsam beatae aperiam mollitia, accusamus, modi reprehenderit? Natus, non consequuntur?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default History;