import React from 'react'
import './CheckMark.css'

function CheckMark() {
  return (
    <div class="checkmark">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle class="path circle" fill="none" stroke="#ffffff" stroke-width="8" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <polyline class="path check" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
        </svg>

    </div>
  )
}

export default CheckMark