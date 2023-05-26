import React from 'react';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";
const ref = React.createRef();
const Blog = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
          <div className="App">
      
      <div ref={ref}>
      <div className="mt-5 ">
        <h1 className='text-xl font-semibold'>1.Tell us the differences between uncontrolled and controlled components.</h1>
        <table className= "border-collapse border border-slate-500 mt-5 ">
        <thead>
          <tr>
            <th className= "border border-slate-500 ">Controlled component</th>
            <th className= "border border-slate-500 ">Uncontrolled component
</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className= "border border-slate-500 p-2">The parent component has held over the form data.</td>
            <td className= "border border-slate-500  p-2">The DOM itself holds control over the data.</td>
            
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">It does not maintain its internal state</td>
            <td className= "border border-slate-500  p-2">It maintains its internal state.
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">It allows validation control.	</td>
            <td className= "border border-slate-500  p-2">It does not allow validation control.
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">It stores the current value in the form of props.	</td>
            <td className= "border border-slate-500  p-2">It stores the current value using react ref.
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">It has better control over the form data.</td>
            <td className= "border border-slate-500  p-2">It has limited control over the form data.
           </td>
          </tr>
          
        </tbody>
      </table>

        </div>
        <div className='mt-5'>
        <h1 className='text-xl font-semibold'>2.How to validate React props using PropTypes ?</h1>
        <p>In React, you can use the PropTypes library to validate the props passed to a component. The PropTypes library allows you to define the expected types and other constraints for each prop, ensuring that the correct data is passed to the component. Here's how you can validate React props using PropTypes:</p>
        <div className=''>
        <p className='font-semibold'>Install prop-types package:</p>
        <p>npm install prop-types</p>
        <p>import PropTypes from 'prop-types';</p>

          <div className='mt-5'>
          <li> PropTypes.any: The prop can be of any data type  </li>
           <li> PropTypes.bool: The prop should be a Boolean  </li>
           <li> PropTypes.number: The prop should be a number  </li>
           <li> PropTypes.string: The prop should be a string  </li>
           <li> PropTypes.func: The prop should be a function  </li>
           <li> PropTypes.array: The prop should be an array  </li>
           <li> PropTypes.object: The prop should be an object  </li>
           <li> PropTypes.symbol: The prop should be a symbol  </li>
          </div>
          </div>
        </div>
        <div className="mt-5 ">
        <h1 className='text-xl font-semibold'>3.Tell us the difference between nodejs and express js.</h1>
        <table className= "border-collapse border border-slate-500 mt-5 ">
        <thead>
          <tr>
            <th className= "border border-slate-500 ">Node js </th>
            <th className= "border border-slate-500 ">Express js</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className= "border border-slate-500 p-2">Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript</td>
            <td className= "border border-slate-500  p-2">Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</td>
        </tr>
    </tbody>
      </table>

        </div>
        <div className='rounded-md  my-5'>
        <h1 className='text-xl font-semibold'>4.What is a custom hook, and why will you create a custom hook ?</h1>
        <p>A custom hook is a JavaScript function that allows you to reuse logic across multiple React components. It's a way to abstract and encapsulate common functionality so that it can be easily shared and reused throughout your application.</p>
        <p className='mt-5'>Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability.</p>
        
        <h1 className='font-semibold text-lg py-3'>1.Reusability</h1>
        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

        <h1 className='font-semibold text-lg py-3'>2.Readability</h1>
        <p>Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.</p>
        <h1 className='font-semibold text-lg py-3'>3.Testability</h1>
        <p>Generally, the test containers and the presentational components are tested separately in React. This is not a trouble when it comes to unit tests. But, if a container contains several HOCs, it becomes difficult as you will have to test the containers and the components together to do the integration tests.</p>
        </div>
      </div>
    </div>
    <Pdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-red-600 text-white px-3 py-1 rounded-2xl mb-10'>Generate Pdf</button>}
      </Pdf>
    </div>
    );
};

export default Blog;