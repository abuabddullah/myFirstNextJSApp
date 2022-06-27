import React from 'react';
import Link from 'next/link';
import Meta from '../components/meta';
import axios from 'axios';

const AllPosts = ({ data }) => {
    // console.warn(data);
    return (
        <>
            <Meta title="All Posts" keyword="Next.js, React, ASIF" description="Next.js App by ASIF" />
            <main className="main">
                <h1 className="title">
                    All Posts by getServerSideProps
                </h1>

                <p className="description">
                    Get started by editing{' '}
                    <code className="code">pages/index.js</code>
                </p>

                <div className="grid">
                    {
                        data && data.map(post => {
                            const { id, title, body } = post;
                            return (
                                <Link href="/postsFolder/[id]" as={`/postsFolder/${id}`} key={id}>
                                    <a className="card">
                                        <h2>{title.slice(0,12)};</h2>
                                        <p>{body.slice(0,50)}...</p>
                                    </a>
                                </Link>
                            )
                        })
                    }

                </div>
            </main>
        </>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const data = await res.json();
    return { props: { data } };
}

export default AllPosts;