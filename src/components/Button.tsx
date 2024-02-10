import { PropsWithChildren } from 'react';
import { Button as RSuiteButton } from 'rsuite';

interface IProps extends PropsWithChildren {
    [key: string]: any
}

function Button(props: IProps) {
    const { children, ...others } = props;

    return <RSuiteButton {...others}>{children}</RSuiteButton>
}

export default Button;
