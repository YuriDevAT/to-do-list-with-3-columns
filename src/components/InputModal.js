import React from 'react';

const InputModal = () => {

    return (  
      <div className="bg-white rounded-lg w-1/2 text-center border">
        <div className="w-full border-t-8 border-blue-600 rounded-lg text-center py-8">
            <h3 className="text-gray-700">Please enter a task!</h3>
        </div>
        <div className="pb-4 flex justify-around">
          <button className="w-1/3 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</button>
          <button className="w-1/3 px-4 py-3 text-center text-pink-100 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-white font-bold text-sm">Okay</button>
        </div>
      </div>
    )
}

export default InputModal;