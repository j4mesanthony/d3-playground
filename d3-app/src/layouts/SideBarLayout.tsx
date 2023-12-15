import { ReactNode } from "react"

type Props = {
    side: ReactNode,
    main: ReactNode,
    rightSide?: boolean,
}

export function SideBarLayout({ side, main, rightSide = false }: Props) {
    return (
        <div className={ `flex flex-row ${ rightSide && 'flex-row-reverse'}` }>
            <div className='grow-[1]'>
                { side }
            </div>

            <div className='grow-[2]'>
                { main }
            </div>
        </div>
    )
}