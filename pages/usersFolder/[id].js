import axios from 'axios';
import React from 'react';
import Meta from '../../components/meta';

const SingleUserDetails = ({ data }) => {
    const { id, name, email } = data || {};
    return (
        <>
            <Meta />
            <h1>Powered by getStaticPaths & getStaticProps</h1>
            <h1>Here the User : {id}</h1>
            <article>
                <h2>{name};</h2>
                <p>{email}</p>
            </article>
        </>
    );
};



export const getStaticProps = async (context) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    return { props: { data } };
}

export const getStaticPaths = async (context) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    // const arrOfOnlyIds = data.map(user => user.id);
    // const paths = arrOfOnlyIds.map(id => ({ params: { id: id.toString() }}));
    const paths = data.map(user => ({ params: { id: user.id.toString() }})); // this is also correct
    return { paths, fallback: false };
}

export default SingleUserDetails;