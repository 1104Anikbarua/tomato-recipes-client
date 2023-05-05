import React, { useRef } from 'react';
import Pdf from 'react-to-pdf'
import { HiDocumentDownload } from 'react-icons/hi'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Blog = () => {
    const pdfRef = useRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <div className='mt-40 mb-20 px-5 lg:px-20'>
            <PageTitle titles={'Blog'}></PageTitle>
            <Pdf targetRef={pdfRef} filename="blog.pdf">
                {({ toPdf }) => <button
                    onClick={toPdf} options={options}
                    className='bg-black w-40 rounded-md h-10 text-white font-bold text-sm flex items-center justify-center'>Download
                    <HiDocumentDownload className='text-xl'></HiDocumentDownload>
                </button>
                }</Pdf>
            <div ref={pdfRef}>
                <h1 className='text-3xl font-raleway font-bold'>Tell us the differences between uncontrolled and controlled components?</h1>

                <p className='text-xl'>Uncontrolled components state is controlled by dom where controlled component is controlled by react.
                    Uncontrolled components are often used in situations where one don't need to do much validation or manipulation of the data that the user enters
                    Controlled components are often used in situations where one need to do more validation or manipulation of the data that the user enters in a form.
                </p>
                <h1 className='text-3xl font-raleway font-bold'>How to validate React props using PropTypes?</h1>

                <p className='text-xl'>
                    we have to define proptypes object and in this object we have to declare the types of the props.later when we use this props so that we can validate the types of props.
                    React provides a utility called PropTypes that allows us to specify the type and shape of the props that are being passed to a component.when we use those props props so that we can make sure that these props are of the correct type and structure based on the PropTypes definition.
                </p>
                <h1 className='text-3xl font-raleway font-bold'>Tell us the difference between nodejs and express js?</h1>

                <p className='text-xl'>
                    Node.js is a platform for building the input output applications which are asynchronous server-side event-driven and made using JavaScript runtime.Using Node js we can get data from server.
                    Express.js is a framework based on Node.js which is used for building web-application using Node.js approaches and principles of Node event-driven architecture.
                </p>

                <h1 className='text-3xl font-raleway font-bold'>What is custom hook?</h1>
                <p className='text-xl'>custom hook ia a function that is used for share logic between two javascript functions.Custom hook names starts with use and that may call other hooks.</p>
            </div>
        </div>
    );
};

export default Blog;