//#region Global imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//#endregion Global imports

//#region Local imports
import { omit, getElementType } from '../utils';
//#endregion Local imports

//#region Component

const propTypes = {
	/** Active or not active animation effect. */
	active: PropTypes.bool,

	/** An element type to render as (string or function). */
	tag: PropTypes.elementType,

	/** Additional classes on the container. */
	className: PropTypes.string,

	/** A fluid placeholder takes up the width of its container. */
	fluid: PropTypes.bool,

	/** An image can modify size correctly with responsive styles. */
	shape: PropTypes.oneOf(['square', 'rectangular']),
};

class PlacenodeImage extends Component {
	render() {
		const { className, fluid, active, shape } = this.props;

		// Rest are the properties that are unknown props from the user.
		const rest = omit(this.props, ['active', 'tag', 'children', 'className', 'fluid', 'shape']);

		const classes = classNames(
			'placenode-image',
			{ 'placenode-image--active': active },
			{ 'placenode-image--fluid': fluid },
			className,
		);

		const classes2 = classNames('image', {
			square: shape === 'square',
			rectangular: shape === 'rectangular',
		});

		const ElementType = getElementType(PlacenodeImage, this.props);

		return (
			<ElementType {...rest} className={classes}>
				<div className={classes2} />
			</ElementType>
		);
	}
}

PlacenodeImage.propTypes = propTypes;
export default PlacenodeImage;
//#endregion Component
