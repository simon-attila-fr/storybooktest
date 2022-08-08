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
    textColor: "blue",
    backgroundColor: "yellow",
    border: "dashed",
    borderSize: "2px",
    borderColor: "blue",
};

export const SecondCase = Template.bind({});
SecondCase.args = {
    text: "Second case",
    textColor: "darkolivegreen",
    backgroundColor: "greenyellow",
    border: "solid",
    borderSize: "4px",
    borderColor: "darkolivegreen",
}