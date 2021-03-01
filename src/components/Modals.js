import React from 'react';

const Modal = () => {
    
    return (
        <div>
        <div class="bg-white rounded-lg w-1/2 text-center border">
        <div class="w-full border-t-8 border-pink-600 rounded-lg text-center py-8">
            <h3 class="text-gray-700">Are you sure you want to delete this task?</h3>
        </div>
        <div class="pb-4 flex justify-around">
          <button class="w-1/3 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
          <button class="w-1/3 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete task</a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg w-1/2 text-center border">
        <div class="w-full border-t-8 border-blue-600 rounded-lg text-center py-8">
            <h3 class="text-gray-700">Please enter a task!</h3>
        </div>
        <div class="pb-4 flex justify-around">
          <button class="w-1/3 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
          <button class="w-1/3 px-4 py-3 text-center text-pink-100 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-white font-bold text-sm">Okay</a>
        </div>
      </div>
      </div>
    )
}

export default Modal;