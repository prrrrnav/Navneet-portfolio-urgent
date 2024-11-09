import React from 'react';


const Contact = () => (
    <section className="p-8 bg-gradient-to-r from-gray-800 to-black text-white overflow-hidden flex flex-col items-center ">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Connect with me on social media or shoot me an email!</p>
        <div className='flex flex-row space-x-5 text-gray-600 pt-5'>
            <a href="https://m.facebook.com/story.php/?story_fbid=795406898177115&id=2049223398625857" target="_blank" >Fb</a>
            <a href="https://www.instagram.com/yourinstagramprofile" target="_blank" >Instagram</a>
            <a href="https://kingnavneetsingh.blogspot.com/" target="_blank" >Blog</a>
            <a href="https://www.youtube.com/channel/UCXkdaziEd2AXt19WmqvdpQg" target="_blank" >YouTube</a>
            <a href="https://www.threads.net/@king.navneet.singh" target="_blank" >Threads</a>

        </div>
    </section>
);

export default Contact;
