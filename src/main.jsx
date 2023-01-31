import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
)
