import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import { withAuthenticator } from '@aws-amplify/ui-react'
import { listTodos } from './graphql/queries'
import { API } from 'aws-amplify'

function App({ signOut }) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		async function listMyTodos() {
			const res = await API.graphql({
				query: listTodos,
			})

			console.log(res.data.listTodos)
		}

		listMyTodos()
	}, [])
	return (
		<div className="App">
			<button onClick={signOut}>Sign Out</button>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				Hey hows it going?
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default withAuthenticator(App)
