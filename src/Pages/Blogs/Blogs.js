import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start'>
            <div className={' w-9/12 mx-auto'}>
                <h4 className='my-4 text-3xl'>Blogs</h4>

                <div className='mb-5'>
                    <h5 className='my-3'>1. What are the different ways to manage a state in a React application?</h5>
                    <p><b>Answer:</b>The Four Kinds of React State to Manage
                    </p>
                    <ol>
                        <li>Local state.</li>
                        <li>  Global state.</li>
                        <li> Server state.</li>
                        <li> URL state.</li>
                    </ol>
                </div>
                <div className='mb-5'>
                    <h5 className='my-3'>2. How does prototypical inheritance work?
                    </h5>
                    <p><b>Answer:</b> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className='mb-5'>
                    <h5 className='my-3'>3. 13.3 What is a unit test? Why should we write unit tests?

                    </h5>
                    <p><b>Answer:</b> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
                <div className='mb-5'>
                    <h5 className='my-3'>4.React vs. Angular vs. Vue?
                    </h5>
                    <p><b>Answer:</b>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;