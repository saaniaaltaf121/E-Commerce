import React from 'react';

function Loader() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-700 rounded-full animate-spin"></div>
        </div>
    );
}

export default Loader;

