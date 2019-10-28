//#region Global imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//#endregion Global imports

//#region Component
const propTypes = {
	/** PlacenodeTitle has a default prefix class. */
	prefixClass: PropTypes.string,

	/** Additional classes. */
	className: PropTypes.string,

	/** Some inline styles apply to PlacenodeTitle. */
	style: PropTypes.object,

	/** Set the width of title.	*/
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

class PlacenodeTitle extends Component {
	render() {
		const { prefixClass, className, width, style } = this.props;
		return <div className={classNames(prefixClass, className)} style={{ width, ...style }} />;
	}
}

PlacenodeTitle.propTypes = propTypes;
export default PlacenodeTitle;
//#endregion Component
