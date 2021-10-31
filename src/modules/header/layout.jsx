import { Desktop } from "./layouts"
import { Mobile } from "./layouts"
import { useWindowSize } from 'hook'

export const Header = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 768) ? <Desktop />
                    : <Mobile />
            }
        </>
    )
}