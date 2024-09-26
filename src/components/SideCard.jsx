import React from 'react';

const SideCard = () => {
  return (
    <div className="flex flex-row bg-slate-400 rounded-lg p-4 mb-4 hover:bg-slate-700">
      <div className="w-2/5">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Mountain" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-3/5 flex flex-col justify-between ml-4">
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-bold mb-2">Heading</h1>
          <p className="text-white overflow-hidden text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sapiente!</p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
