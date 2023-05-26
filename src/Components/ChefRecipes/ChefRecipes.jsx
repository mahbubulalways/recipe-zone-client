import React, { useEffect, useState } from 'react';
import { useLoaderData,useParams} from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
const ChefRecipes = () => {
    const foodRecipes=useLoaderData()
    const chefId =useParams()
    const [chefRecipe,setChefRecipe]=useState([])
    useEffect(()=>{
    fetch('https://recipe-zone-server-mahbubulalways.vercel.app/chefs')
    .then(res=>res.json())
    .then(data=>setChefRecipe(data))
    },[])
   const selectedRecipe= chefRecipe.find(recipe=>recipe.id===chefId.id)
    return (
        <div className='w-[80%] mx-auto mt-10 '>
            <div className='flex lg:flex-row flex-col border-2 items-center gap-5 rounded-lg p-5'>
          <img className='w-1/2' src={selectedRecipe?.img} alt="" />
          <div className='space-y-2'>
            <h1 className='text-3xl font-semibold'>{selectedRecipe?.name}</h1>
            <p>Experience : {selectedRecipe?.experience}</p>
             <p>Numbers of recipes : {selectedRecipe?.recipes}</p>
            <p>Likes : {selectedRecipe?.likes}</p>
            <p>Biography : {selectedRecipe?.bio}</p>
          </div>
        </div>
        <div className='mt-16'>
        <h1 className='text-4xl text-center font-serif'>Here Is My Recipes</h1>
        <div className='grid gap-5 mt-12 py-8 grid-cols-1 md:grid-cols-3'>
        {foodRecipes.map(eachRecipe=><Recipes
        key={eachRecipe.key}
        eachRecipe={eachRecipe}
        ></Recipes>)}
        </div>
        </div>
        </div>
    );
};

export default ChefRecipes;