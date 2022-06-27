import { useRouter } from 'next/router';
import React from 'react';
import Meta from '../../components/meta';

const SinglePostDetails = ({ data }) => {
    // const router = useRouter();
    // const { id } = router.query;
    const { id, title, body } = data || {};
    return (
        <>
            <Meta />
            <h1>by getServerSideProps</h1>
            <h1>Here the post : {id}</h1>
            <article>
                <h2>{title};</h2>
                <p>{body}</p>
            </article>
        </>
    );
};



export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();
    return { props: { data } };
}

export default SinglePostDetails;