import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Meta from '../components/meta';

const allUsers = ({data}) => {
    return (
        <><Meta title="All Users" keyword="Next.js, React, ASIF" description="Next.js App by ASIF" />
            <main className="main">
                <h1 className="title">
                    All Users by getStaticProps
                </h1>

                <p className="description">
                    Get started by editing{' '}
                    <code className="code">pages/index.js</code>
                </p>

                <div className="grid">
                    {
                        data && data.map(user => {
                            const { id, name, email } = user;
                            return (
                                <Link href="/usersFolder/[id]" as={`/usersFolder/${id}`} key={id}>
                                    <a className="card">
                                        <h2>{name};</h2>
                                        <p>{email}...</p>
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

export const getStaticProps = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        props: { data }
    };
}

export default allUsers;