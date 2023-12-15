type Props = {
    label: string,
}

export function Button({ label }: Props) {
    return (
        <button className='bg-cyan-500 text-neutral-50 hover:bg-cyan-400 rounded-full min-w-[90px] justify-center w-fit items-center flex p-2 pl-4 pr-4'>{ label }</button>
    )
}