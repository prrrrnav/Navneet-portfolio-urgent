import React from 'react';
import a from '../public/a.jpeg';
// import b from '../public/b.jpeg';
import c from '../public/c.jpeg';


const Instagram = () => (
    <section className="p-8 bg-slate-300 h-1/2 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Instagram</h2>
        <a href="https://www.instagram.com/king.navneet.singh/" target="_blank" >Follow me on Instagram for more updates on my journey.</a>
        <div className='flex flex-row justify-around py-10'>
            <img src={a} alt="Image 1" className="rounded-xl w-1/3 h-66" />
            {/* <img src={b} alt="Image 2" className="rounded-2xl w-1/3 h-66" /> */}
            <img src={c} alt="Image 3" className="rounded-xl w-1/3 h-66" />
        </div>
    </section>
);

export default Instagram;
