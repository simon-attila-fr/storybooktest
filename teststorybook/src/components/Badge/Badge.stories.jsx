import React from 'react';
import Badge from './Badge';

export default {
  title: 'ODS/Badge',
  component: Badge,
};

const Template = args => <Badge {...args} />;

export const test = Template.bind({});
test.args = {
  children: <span>Hello world</span>
};
