import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
    return (
        <div className='flex-nav'>
            <Link href="/"><a>Home</a></Link>
            <Link href="/allPosts"><a>All Posts</a></Link>
            <Link href="/allUsers"><a>All Users</a></Link>
        </div>
    );
};

export default NavigationBar;