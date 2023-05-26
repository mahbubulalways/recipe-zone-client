import React from 'react';
import chefImg from '../../../images/chefImg.avif'
import photo1 from '../../../images/image1.jpg'
import photo2 from '../../../images/image2.webp'
import photo3 from '../../../images/image3.jpg'
import photo4 from '../../../images/image4.jpg'
import { Link} from 'react-router-dom';
const ExtraSection = () => {
    return (
        <div className='w-[90%] mx-auto  my-20'>
            <div className='grid lg:grid-cols-2 gap-10 grid-cols-1  '>
            <div className=''>
                <h1 className='text-3xl font-serif font-thin text-yellow-700'>Our Story</h1>
             <h1 className='text-4xl lg:text-5xl font-serif mt-10'>Traditional & Modern <span className='text-yellow-700'>Service Since 1970</span></h1>
             <p className='mt-10 text-gray-600'> As a family of four walks into the restaurant, the hostess smiles and welcomes them. She then asks the family if they prefer a booth or a table. The father, Chris, says they would like a table, and the hostess says she has one ready for them. As she walks the family to their table, she asks them if they're dining out for a special occasion, and the mom, Janet, replies that it's her husband's birthday. The hostess wishes the husband a happy birthday and offers the family a discounted appetizer with their meals before seating them.</p>

             <button className='bg-yellow-600 text-white px-5 py-3 text-lg rounded-3xl mt-5 hover:bg-yellow-700'>See our Story</button>
            </div>
            <img className='w-full rounded-lg' src={chefImg} alt="" />
            </div>

           <div className='mt-16 lg:mt-28'>
           <h1 className='text-4xl lg:text-5xl font-serif text-center'>Check Our All Flavours <span className='text-yellow-700'>Summer Promo</span></h1>
           <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto mt-10 gap-2'>

          <div className='border-2 rounded-lg bg-black'>
            <img className='rounded-lg' src={photo1} alt="" />
            <div className='py-10 px-5  text-white'>
                <p className='text-3xl font-serif text-yellow-500'>Get 50% Off</p>
            <h1 className='text-4xl  font-serif mt-5'>A rare taste you can't find anywhere</h1>
            <p className='mt-5'>As a family of four walks into the restaurant, the hostess smiles and welcomes them. She then asks the family if they prefer a booth or a table. The father, Chris, says they would like a table, and the hostess says she has one ready for them. As she walks the family to their table, she asks them if they're dining out for a special occasion, and the mom, Janet, replies that it's her husband's birthday.</p>
           <Link to='order'> <button className=' text-sm lg:text-xl text-yellow-500 border-2 border-yellow-500 px-5 py-2 mt-5 rounded-lg'>Order Now</button></Link>
            </div>
            </div>
           <div>
           <div className='bg-[#f1ede9] h-max rounded-lg '>
            <h1 className='text-4xl font-serif text-center pt-16'>Where every flavor tells a story</h1>
            <div className='flex justify-between mt-10 p-5'>
                <img className='w-1/3 rounded-md' src={photo2} alt="" />
                <img className='w-1/3 rounded-md' src={photo3} alt="" />
            </div>
            <div className='bg-black rounded-bl-lg rounded-br-lg'>
               <img className='w-1/3 rounded-lg mx-auto relative bottom-28 md:bottom-44' src={photo4} alt="" />
               
              <div className='ps-5 relative bottom-20'>
                <h1 className='text-white text-3xl font-serif'>We create cherished memories</h1>
              <button className=' text-sm lg:text-xl text-yellow-500 border-2 border-yellow-500 px-5 py-2 mt-5 rounded-lg '>Learn More</button>
              </div>
            </div>
            </div>
           </div>
           
           </div>
           </div>
        </div>
    );
};

export default ExtraSection;