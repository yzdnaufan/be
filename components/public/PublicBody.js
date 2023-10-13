import React from 'react'

const PublicBody = () => {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src="/welcome-image-2.webp"
            alt="Image"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Our Platform
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            quam nec urna facilisis venenatis.
          </p>
        </div>
      </div>
  )
}

export default PublicBody