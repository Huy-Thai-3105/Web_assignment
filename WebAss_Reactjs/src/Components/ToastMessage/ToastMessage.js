import React from 'react'
import clsx from 'clsx'
import './ToastMessage.css'

const ToastMessage = ({header, body}) => {
    return (
        <div 
        className={clsx('toast-message', {
            'toast-message--success': header === 'Success',
            'toast-message--fail': header === "Fail"
        })}
        >
            <h4 
                className={clsx('toast-message__header', {
                    'toast-message__header--success': header === 'Success',
                    'toast-message__header--fail': header === "Fail"
                })}
            >
                {header}
            </h4>
            <p className='toast-message__body'>{body}</p>
        </div>
    )
}

export default ToastMessage