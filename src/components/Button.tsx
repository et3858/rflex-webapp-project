import { FC, ReactNode } from 'react';
import { Button as RSuiteButton } from 'rsuite';

import 'rsuite/Button/styles/index.css';

interface IProps extends React.PropsWithChildren {
    [key: string]: any
}

function Button(props: IProps) {
    const { children, ...others } = props;

    return <RSuiteButton {...others}>{children}</RSuiteButton>
}


export default Button;
