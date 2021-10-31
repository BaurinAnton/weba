import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'
import { useWindowSize } from 'hook'

export const MainSection = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width >= 768) ? <Desktop />
                    : (windowSize.width > 480) ? <Mobile />
                        : (windowSize.width <= 480) ? <SmallMobile />
                            : ''
            }
        </>
    )
}