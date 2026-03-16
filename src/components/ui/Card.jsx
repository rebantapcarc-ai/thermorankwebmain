import React from 'react';

const Card = ({ children, className = '', highlight = false }) => {
    return (
        <div className={`bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border ${highlight ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-white/20'} p-6 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
