import React from 'react'
import Form from '../Form'

const RegisterPage = () => {

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
        <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
            <img 
            src="/svg/login-image.svg" 
            alt="Welcome" 
            className="w-full h-full object-cover object-center" />
        </div>

        <Form
            title="Create your account"
            buttonText="Register"
            showPasswordConfirm={true}
            isLogin={false}
            onSubmit={handleRegisterSubmit}/>

    </div>
  )
}

export default RegisterPage