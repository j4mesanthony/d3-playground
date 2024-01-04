import { ReactNode } from "react"

type Props = {
    side: ReactNode,
    main: ReactNode,
    rightSide?: boolean,
}

export function SideBarLayout({ side, main, rightSide = false }: Props) {
    return (
        <div className={ `flex flex-row gap-10 ${ rightSide && 'flex-row-reverse'}` }>
            <div className='grow-[1]'>
                { side }
            </div>

            <div className='grow-[4]'>
                { main }
            </div>
        </div>
    )
}