import { within, userEvent } from '@storybook/testing-library';
import Page from '../Page/Page.svelte';

export default {
	title: 'Example/Page',
	component: Page,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args: any) => ({
	Component: Page,
	props: args
});

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};

// More on interaction testing: https://storybook.js.org/docs/svelte/writing-tests/interaction-testing
export const LoggedIn: any = Template.bind({});
LoggedIn.play = async ({ canvasElement }: any) => {
	const canvas = within(canvasElement);
	const loginButton = canvas.getByRole('button', { name: /Log in/i });
	userEvent.click(loginButton);
};
