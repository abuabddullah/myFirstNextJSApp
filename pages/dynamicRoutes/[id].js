import { useRouter } from 'next/router';
import React from 'react';

const DynamicRoute = () => {
    const router = useRouter();
    console.log('router',router);
    const { id } = router.query;
    return (
        <div>
            <h1>welcome to the details page of : {id}</h1>
        </div>
    );
};

export default DynamicRoute;