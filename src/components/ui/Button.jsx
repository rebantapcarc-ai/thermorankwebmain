import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    to,
    onClick,
    className = '',
    type = 'button'
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

    const variants = {
        primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-sm focus:ring-brand-500",
        secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm focus:ring-brand-500",
        outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-500",
        accent: "bg-accent-600 hover:bg-accent-700 text-white shadow-sm focus:ring-accent-500",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
