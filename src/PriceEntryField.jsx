import React from 'react'
import NumberEditorField from './NumberEditorField'

const PriceEntryField = (props) => {
    return (
        <div>{props.label}
            <NumberEditorField value={props.price} />
        </div>
    )
}

export default PriceEntryField