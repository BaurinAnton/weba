import { HeaderDesktop } from "./layouts"
import { HeaderTabletMobile } from "./layouts"
import { useWindowSize } from 'hook'

export const Header = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 768) ? <HeaderDesktop />
                    : <HeaderTabletMobile />
            }
        </>
    )
}