import { useWindowSize } from 'hook'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'

export const OurWorks = () => {
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