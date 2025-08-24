import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
            <p className='block mx-auto '> <FadeLoader color='blue' /></p>
        </div>
    );
};

export default Loading;