import React from 'react';
import img from '../../Asset/profilepic.JPG'

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center my-28'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10 rounded-full">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Assalamualaikum My name is Abir Rahaman </h2>
                    <p>student of CSE Department at Daffodil International University. i have completed his SSC & HSC from Dhaka Board. now i am working on web development sector. i am not profesional but he love love to do it with enjoyment.My hobby is i want to travel the the whole world i have already visited many place of Bangladesh, and at the end of my life goal as a human being i want to lead my life very simple as a muslim.</p>
                   <div className="">
                       <a href="https://mail.google.com/mail/u/0/#inbox"> abirahaman.cse@gmail.com</a> <br />
                       <a href="https://mail.google.com/mail/u/1/#inbox">abir15-2520@diu.edu.bd</a>
                   </div>
                </div>

               <div className="mt-10">
               <h1 className='text-2xl text-primary font-bold text-center my-5'> My 3 own Fokira Projects </h1>
                <a className='text-xl font-bold text-center ml-14' href="https://cool-boba-626a6a.netlify.app/"> My Portfolio Website  </a> <br />
                <a className='text-xl font-bold text-center ml-14' href="https://wondrous-brigadeiros-7e1854.netlify.app/">  Blog Website </a> <br />
                <a className='text-xl font-bold text-center ml-14' href="https://tangerine-crisp-412e96.netlify.app/"> Teaching Web site  </a> <br />
               </div>
                
                </div>
        </div>
    );
};

export default MyPortfolio;