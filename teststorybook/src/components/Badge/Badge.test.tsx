import * as React from 'react';
import { render } from '@testing-library/react';
import Badge from './Badge';

test('badge renders correctly', () => {
    const { container } = render(<Badge>1</Badge>);
    expect(container).toMatchSnapshot();
});
