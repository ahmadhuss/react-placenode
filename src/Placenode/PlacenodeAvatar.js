//#region Global imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//#endregion Global imports

//#region Component
const propTypes = {
	/** PlacenodeAvatar has a default prefix class. */
	prefixClass: PropTypes.string,

	/** Additional classes. */
	className: PropTypes.string,

	/** Some inline styles apply to PlacenodeAvatar. */
	style: PropTypes.object,

	/** Set the size of avatar.	*/
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['large', 'small', 'default'])]),

	/** Set the shape of avatar. */
	shape: PropTypes.oneOf(['circle', 'square']),
};

const defaultProps = {
	size: 'large',
};

class PlacenodeAvatar extends Component {
	render() {
		const { prefixClass, className, style, size, shape } = this.props;

		const sizeCls = classNames({
			'placenode__avatar--lg': size === 'large',
			'placenode__avatar--sm': size === 'small',
		});

		const shapeCls = classNames({
			'placenode__avatar--circle': shape === 'circle',
			'placenode__avatar--square': shape === 'square',
		});

		const sizeStyle =
			typeof size === 'number'
				? {
						width: size,
						height: size,
						lineHeight: `${size}px`,
				  }
				: {};
		return (
			<span
				className={classNames(prefixClass, className, sizeCls, shapeCls)}
				style={{ ...sizeStyle, ...style }}
			/>
		);
	}
}

PlacenodeAvatar.propTypes = propTypes;
PlacenodeAvatar.defaultProps = defaultProps;

export default PlacenodeAvatar;
//#endregion Component
