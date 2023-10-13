import React from 'react'
import Form from '../Form'

const LoginPage = () => {

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (

    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
      {/* Left Side (Image) - Hidden on Small Screens */}
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <img 
          src="/svg/login-image.svg" 
          alt="Welcome" 
          className="w-full h-full object-cover object-center" />
      </div>

      {/* Right Side (Sign-in Form) */}
      <Form
        title="Hello, get started!"
        buttonText="Sign In"
        showPasswordConfirm={false}
        isLogin={true}
        onSubmit={handleLoginSubmit}/>

    </div>
  )
}

export default LoginPage