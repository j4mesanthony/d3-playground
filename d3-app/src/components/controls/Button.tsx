import { Icon } from "../ui/Icon";

type Props = {
    label: string,
    disabled: boolean,
    onClick: () => void,
    icon: string,
    btnClasses?: string
}

export function Button({ label = 'Button', disabled = false, icon, onClick, btnClasses }: Props) {
    const handleClick = () => !disabled && onClick();

    const baseClasses = `bg-cyan-500 text-neutral-50 rounded-full justify-center w-fit items-center flex p-2 pl-4 pr-4`,
          disabledClasses = `${ disabled ? 'bg-neutral-400 text-neutral-300 hover:cursor-default' : 'hover:bg-cyan-400'}`,
          conditionalClasses = `${!icon && 'min-w-[90px]'}`,
          classes = `${baseClasses} ${disabledClasses} ${conditionalClasses} ${btnClasses}`

    return (
        <button onClick={ handleClick } className={ classes }>{ icon ? <Icon icon={ icon } /> : label }</button>
    )
}