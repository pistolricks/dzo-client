import { css } from 'styled-system/css'

import { Component, ParentProps } from 'solid-js'

const VendorsLayout: Component<ParentProps> = (props) => {
    return <div class={css({ h: 'full', w: 'full', pos: 'relative' })}>{props.children}</div>
}

export default VendorsLayout
