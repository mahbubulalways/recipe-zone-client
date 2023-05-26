import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const Chef = ({chef}) => {
    const {img,name,experience, recipes,likes,id}=chef
    return (
        <div>
            <div className="card w-full  shadow-2xl p-5">
            <LazyLoad offset={300}>
  <figure><img className='rounded-full w-60 h-60' src={img}/></figure>
      
    </LazyLoad>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Experience : {experience}</p>
    <p>Numbers of recipes : {recipes}</p>
    <p>Likes : {likes}</p>
    <div className="mt-5 ">
      <Link to={`/chef-recipes/${id}`}><button className="bg-gradient-to-r from-gray-800 to-gray-600  text-white px-3 py-3 rounded-xl">View Recipes</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Chef;