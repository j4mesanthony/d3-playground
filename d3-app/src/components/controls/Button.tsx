type Props = {
    label: string,
    disabled: boolean,
    onClick: () => void,
}

export function Button({ label = 'Button', disabled = false, onClick = () => {} }: Props) {
    const handleClick = () => !disabled && onClick();

    const baseClasses = 'bg-cyan-500 text-neutral-50 rounded-full min-w-[90px] justify-center w-fit items-center flex p-2 pl-4 pr-4',
          conditionalClasses = `${!disabled && 'hover:bg-cyan-400' } ${ disabled && 'bg-neutral-400 text-neutral-300 hover:cursor-default'}`,
          classes = `${baseClasses} ${conditionalClasses}`

    return (
        <button 
            onClick={ handleClick }
            className={ classes }>{ label }</button>
    )
}