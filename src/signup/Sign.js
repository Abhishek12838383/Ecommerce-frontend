import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Sign = () => {
  const[name,setname] = useState('');
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');

const handleform =(e)=>{
  e.preventDefault();
  axios.post('https://ecommerce-backendd-sgou.onrender.com/signup',({name,email,password}))
  .then(result=>{console.log(result)
toast.success("Signup successful ✅")}
)
  .catch(error=>{(console.log(error))
toast.error(error.response?.data?.message || "Signup failed ❌")
  });
  setname('');
  setemail('');
  setpassword('');
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
    <form className="space-y-5" onSubmit={handleform}>
     
      <div>
        <label htmlFor="name" class="block text-sm font-medium text-gray-700">Full Name</label>
        <input
        value={name}
        onChange={(e)=>setname(e.target.value)}
          type="text"
          id="name"
          placeholder="Enter your name"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      
      <div>
        <label htmlFor="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
         value={email}
        onChange={(e)=>setemail(e.target.value)}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
         value={password}
        onChange={(e)=>setpassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter your password"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

    
     
      
   
      <button href='/login'
        type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Create Account
      </button>
      
     
      <p class="text-sm text-gray-500 text-center">
        Already have an account?
        <a href="/login" class="text-green-500 hover:underline">Login</a>
      </p>
    </form>
  </div>
</div>

  )
}

export default Sign