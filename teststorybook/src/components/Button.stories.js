import React from 'react';
import Button from './Button';

export default {
    component: Button,
    title: "Button", //How to refer to the component in the sidebar of storybook
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Default text",
    buttonTextColor: "blue",
    buttonBackgroundColor: "yellow",
    buttonBorder: "dashed",
    buttonBorderSize: "2px",
    buttonBorderColor: "blue",
};

export const SecondCase = Template.bind({});
SecondCase.args = {
    text: "Second case",
    buttonTextColor: "darkolivegreen",
    buttonBackgroundColor: "greenyellow",
    buttonBorder: "solid",
    buttonBorderSize: "4px",
    buttonBorderColor: "darkolivegreen",
}