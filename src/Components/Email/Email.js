import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Email = () => {

    const [state, handleSubmit] = useForm("mjvznjyw");
    if (state.succeeded) {
        return <p className='text-2xl font-bold text-green-500 my-9'>Thanks for Messaging!</p>;
    }

    return (

         <div>  
            
            <h1 className='text-4xl font-bold mb-6 mt-6 text-purple-500'>Contact With Me</h1>

        <div className='grid lg:grid-cols-2 justify-center'>

         <div>
            <img src="https://i.ibb.co/hg55tG7/email-send-removebg-preview.png" alt="" srcset="" />
         </div>

        <div className='my-6'>


            <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='text-2xl font-normal'>
                    Name
                </label><br />
                <input
                    className="input input-bordered w-full mb-3"
                    id="name"
                    type="text"
                    name="name"
                /><br />
                <label htmlFor="email" className='text-2xl font-normal'>
                    Email Address
                </label><br />
                <input
                    className="input input-bordered w-full mb-3"
                    id="email"
                    type="email"
                    name="email"
                /><br />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="email" className='text-2xl font-normal'>
                    Message
                </label><br />
                <textarea
                    className="textarea textarea-bordered mb-3 w-full"
                    id="message"
                    name="message"
                /><br />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                    Send Email
                </button>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Email;