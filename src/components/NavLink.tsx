import React from 'react';

interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({children, ...rest}) => {
    return (
        <a
            {...rest}
            className="hover:cursor-pointer hover:bg-gradient-to-b from-0% hover:from-sunset-orange-300 hover:via-orange-500 hover:to-sunset-rose-700 hover:bg-clip-text hover:text-transparent font-semibold transition-all duration-300 ease-linear bg-[length:200%_200%] hover:bg-[length:100%_100%] hover:bg-position-0 bg-no-repeat bg-gradient-to-t from-white via-stone-200 to-zinc-50 bg-clip-text text-transparent navlink-shadow">
            {children}
        </a>

    );
};

export default NavLink;