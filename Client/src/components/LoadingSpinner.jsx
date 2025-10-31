import React from 'react';

const LoadingSpinner = () => {
return (
<div
className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-blue-500"
role="status"
>
<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
Loading...
</span>
</div>
);
};

export default LoadingSpinner;
