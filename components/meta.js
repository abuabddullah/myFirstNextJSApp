import Head from 'next/head';
import React from 'react';

const Meta = ({ title, keyword, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keyword" content={keyword} />
        </Head>
    );
};


Meta.defaultProps = {
    title: 'Next.js App by ASIF',
    keyword: 'Next.js, React, ASIF',
    description: 'Next.js App by ASIF'
}



export default Meta;