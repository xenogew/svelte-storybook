import Header from './Header.svelte';

export default {
	title: 'Example/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	},
	argTypes: {
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}
};

const Template = (args: any) => ({
	Component: Header,
	props: args,
	on: {
		login: args.onLogin,
		logout: args.onLogout,
		createAccount: args.onCreateAccount
	}
});

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
	user: {
		name: 'Jane Doe'
	}
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};
