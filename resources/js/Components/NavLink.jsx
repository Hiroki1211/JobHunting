import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-white focus:border-indigo-700 '
                    : 'border-transparent text-white hover:text-gray-300 hover:border-white focus:text-gray-300 focus:border-white ') +
                className
            }
        >
            {children}
        </Link>
    );
}
