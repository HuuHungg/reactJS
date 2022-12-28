import {memo} from 'react'

function Content ({onIncrease}) {

    console.log('re-render')

    return (
        <>
            <h1>毎日ITを勉強してるでも難しいですか  </h1>
            <button onClick = {onIncrease}>Click me</button>
        </>
    )

}

export default memo(Content)



