import React from 'react';
import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: "Checkbox", //How to refer to the component in the sidebar of storybook
};

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkboxLabel: "True or false?"
};