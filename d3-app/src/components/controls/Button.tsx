type Props = {
    label: string,
}

export function Button({ label }: Props) {
    return (
        <button className='bg-cyan-500 text-neutral-50 hover:bg-cyan-400 rounded-md  p-2 pl-4 pr-4'>{ label }</button>
    )
}