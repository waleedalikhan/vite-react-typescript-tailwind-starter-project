import React from 'react';

type Props = {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <>
            <h1 className="text-5xl">{title}</h1>
        </>
    )
}

export default Header;