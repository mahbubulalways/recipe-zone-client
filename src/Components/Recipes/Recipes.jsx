import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import {  toast } from 'react-toastify';
import '@smastrom/react-rating/style.css'
import LazyLoad from 'react-lazy-load';

const Recipes = ({eachRecipe}) => {
    const {name, ingredients,cookingMethod,rating,recipeUrl}=eachRecipe
    const [disable,setDisable]=useState(false)
    const [seeMore,setSeeMore]=useState(true)
    const handleToast=()=>{
        toast("The recipe is your favorite");
        setDisable(true)
    }
    return (
        <div>
            <div className="card  h-max bg-base-100 shadow-xl">
  <div className="card-body">
  <LazyLoad offset={300}>
  <img className='w-60 h-60 rounded-full mx-auto' src={recipeUrl} alt="" />
    </LazyLoad>
    <h2 className="card-title">{name}</h2>
    <p className=' font-semibold'>Ingredients :</p>
    {ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)}
    <p  className=' font-semibold'>Cooking method :</p>
    <div>
        {seeMore ?  <p>{cookingMethod.slice(0,70)}..... <button onClick={()=>setSeeMore(false)} className='text-blue-500'>see more</button></p> : <p>{cookingMethod}</p>}
    </div>
   
    <div className='flex items-center mt-2'>
    <p><Rating style={{ maxWidth: 150 }} value={rating} readOnly/></p>
    <p>{rating}</p>
    </div>
    <div>
      <button onClick={handleToast} className="bg-red-600 px-3 py-1 rounded-2xl text-white" disabled={disable}>Favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipes;