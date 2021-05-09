import React, { memo } from 'react'

 function Title() {
    console.log("rendered Title")
    return (
        <div>
            <h4>Use Callback</h4>
        </div>
    )
}

export default memo(Title)