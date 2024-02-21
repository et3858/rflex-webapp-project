import { Button as RSuiteButton, ButtonProps } from 'rsuite';

function Button(props: ButtonProps) {
    const { children, ...others } = props;

    return <RSuiteButton {...others}>{children}</RSuiteButton>
}

export default Button;
