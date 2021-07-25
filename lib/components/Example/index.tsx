import * as React from 'react'

export type ExampleProps = {
	children: React.ReactNode
}

export const Example: React.VFC<ExampleProps> = (props) => {
	const { children } = props

	return <div>{children}</div>
}
