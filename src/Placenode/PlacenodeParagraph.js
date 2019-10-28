//#region Global imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//#endregion Global imports

//#region Component
const propTypes = {
	/** PlacenodeParagraph has a default prefix class. */
	prefixClass: PropTypes.string,

	/** Additional classes. */
	className: PropTypes.string,

	/** Some inline styles apply to PlacenodeParagraph. */
	style: PropTypes.object,

	/** Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width */
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]),

	/** Set the row count of paragraph.	 */
	rows: PropTypes.number,
};

class PlacenodeParagraph extends Component {
	/**
	 * @param {number} index
	 * @returns {undefined|*}
	 */
	getWidth = index => {
		const { width, rows = 2 } = this.props;
		if (Array.isArray(width)) {
			return width[index];
		}
		// last paragraph
		if (rows - 1 === index) {
			return width;
		}
		return undefined;
	};

	render() {
		const { prefixClass, className, style, rows } = this.props;

		const rowList = [...Array(rows)].map((_, index) => (
			<li key={index} style={{ width: this.getWidth(index) }} />
		));

		return (
			<ul className={classNames(prefixClass, className)} style={style}>
				{rowList}
			</ul>
		);
	}
}

PlacenodeParagraph.propTypes = propTypes;
export default PlacenodeParagraph;
//#endregion Component
