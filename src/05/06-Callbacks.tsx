import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)

    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + e.currentTarget.value)
    }

    const onNameChanged = () => {
        console.log('Name changed')
    }

    const FocusLost = () => {
        console.log('Focus lost')
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={FocusLost}
            >Leo</textarea>
            <input
                type={"number"}
                onChange={onAgeChanged}/>
            <button
                name={'delete'}
                onClick={deleteUser}
            >Delete
            </button>
        </div>
    )
}