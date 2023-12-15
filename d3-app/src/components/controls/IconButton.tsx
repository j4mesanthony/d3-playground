import { Button } from "./Button";

type Props = {
    label: string,
    disabled: boolean,
    icon: string,
    onClick: () => void,
}

export function IconButton({ icon, label, disabled = false, onClick }: Props) {
    return (
        <Button label={ label } icon={ icon } disabled={ disabled } onClick={ onClick } btnClasses='items-center flex flex-row items-center gap-1' />
    )
}