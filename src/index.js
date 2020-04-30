'use strict'

import React from 'react'
import { render } from 'react-dom'
import './index.css'

console.log("It works!")

render(<h2>Hello Element</h2>, document.getElementById('reactApp'))

console.log('End App')