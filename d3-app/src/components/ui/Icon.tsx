type Props = {
    icon: string,
}

export function Icon({ icon }: Props) {
    return (
        <span className='material-symbols-outlined text-neutral-900 dark:text-neutral-50'>{ icon }</span>
    )
}