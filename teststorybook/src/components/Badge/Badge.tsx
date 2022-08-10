import * as React from 'react';
import * as PropTypes from 'prop-types';

import './badge.scss';

/**
 * Renders a simple badge icon containing a value.
 */
const Badge = (
    { children }: { children: React.ReactNode },
): JSX.Element => (
    <span className="rods-badge">
        {children}
    </span>
);

Badge.propTypes = {
    /** The value displayed inside the badge */
    children: PropTypes.node.isRequired,
};

export default Badge;
