//#region Global imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//#endregion Global imports

//#region Local imports
import Avatar from './PlacenodeAvatar';
import Title from './PlacenodeTitle';
import Paragraph from './PlacenodeParagraph';
//#endregion Local imports

//#region Component
const propTypes = {
	/** Active or not active animation effect. */
	active: PropTypes.bool,

	/** Display the Placenode when it is true.	 */
	loading: PropTypes.bool,

	/** Additional classes. */
	className: PropTypes.string,

	/** Primary content. */
	children: PropTypes.node,

	/** Show or hide the avatar Placenode. */
	avatar: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			className: PropTypes.string,
			style: PropTypes.object,
			size: PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.oneOf(['large', 'small', 'default']),
			]),
			shape: PropTypes.oneOf(['circle', 'square']),
		}),
	]),

	/** Show or hide the title Placenode. */
	title: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			className: PropTypes.string,
			style: PropTypes.object,
			width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		}),
	]),

	/** Show or hide the paragraph placenode. */
	paragraph: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			className: PropTypes.string,
			style: PropTypes.object,
			width: PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.string,
				PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
			]),
		}),
	]),
};

const defaultProps = {
	avatar: false,
	title: true,
	paragraph: true,
};

/**
 * Get Props of given component
 * @param {*|boolean|undefined} prop
 * @returns {{}|*}
 */
const getComponentProps = prop => {
	if (prop && typeof prop === 'object') {
		return prop;
	}
	return {};
};

/**
 * Get Avatar Basic Props
 * @param {boolean} hasTitle is - h3 html element will be created
 * @param {boolean} hasParagraph - unordered list element will be created
 * @returns {{shape: string}}
 */
const getAvatarBasicProps = (hasTitle, hasParagraph) => {
	// if Avatar hasTitle and hasNotParagraph it means only with heading return square
	if (hasTitle && !hasParagraph) {
		return {
			shape: 'square',
		};
	}
	// if Avatar hasTitle but also has Paragraph it means return circle
	return { shape: 'circle' };
};

/**
 *
 * @param hasAvatar
 * @param hasParagraph
 * @returns {{}|{width: string}}
 */
const getTitleBasicProps = (hasAvatar, hasParagraph) => {
	// if Avatar is not but paragraph set title width 38%
	if (!hasAvatar && hasParagraph) {
		return {
			width: '38%',
		};
	}

	// if Avatar and paragraph set title width 50%
	if (hasAvatar && hasParagraph) {
		return {
			width: '50%',
		};
	}
	return {};
};

/**
 * @param hasAvatar
 * @param hasTitle
 */
const getParagraphBasicProps = (hasAvatar, hasTitle) => {
	const basicProps = {};
	// if avatar is not set and also the title the width is 61%
	// if avatar is not set but the title is then the width is 61% or vice versa
	if (!hasAvatar || !hasTitle) {
		basicProps.width = '61%';
	}
	// if avatar is not set but also has a title then please add 3 paragraph rows
	// Rows
	if (!hasAvatar && hasTitle) {
		basicProps.rows = 3;
	} else {
		basicProps.rows = 2;
	}
	return basicProps;
};

class Placenode extends Component {
	renderPlaceholder = () => {
		// De-structure some props when Skeleton component is used
		// children prop has all the elements that our skeleton wrap
		const { loading, className, children, avatar, title, paragraph, active } = this.props;

		if (!('loading' in this.props) || loading) {
			const hasAvatar = !!avatar;
			const hasTitle = !!title;
			const hasParagraph = !!paragraph;

			// Avatar is on `placeholder-header` node
			let avatarNode;
			if (hasAvatar) {
				const avatarProps = {
					prefixClass: 'placenode__avatar',
					...getAvatarBasicProps(hasTitle, hasParagraph),
					...getComponentProps(avatar),
				};
				avatarNode = (
					<div className="placenode__header">
						<Avatar {...avatarProps} />
					</div>
				);
			}

			// Title div & Paragraph unordered list on `placeholder-content` node
			let contentNode;
			if (hasTitle || hasParagraph) {
				// Title
				let $title;
				if (hasTitle) {
					const titleProps = {
						prefixClass: 'placenode__title',
						...getTitleBasicProps(hasAvatar, hasParagraph),
						...getComponentProps(title),
					};
					$title = <Title {...titleProps} />;
				}

				// Paragraph
				let paragraphNode;
				if (hasParagraph) {
					const paragraphProps = {
						prefixClass: 'placenode__paragraph',
						...getParagraphBasicProps(hasAvatar, hasTitle),
						...getComponentProps(paragraph),
					};
					paragraphNode = <Paragraph {...paragraphProps} />;
				}

				contentNode = (
					<div className="placenode__content">
						{$title}
						{paragraphNode}
					</div>
				);
			}

			const cls = classNames(
				'placenode',
				{
					placenode__avatar: hasAvatar,
					'placenode--active': active,
				},
				className,
			);

			return (
				// Show animation effect if active props is true add class 's-active'
				<div className={cls}>
					{avatarNode}
					{contentNode}
				</div>
			);
		}
		return children;
	};

	render() {
		return <>{this.renderPlaceholder()}</>;
	}
}
Placenode.propTypes = propTypes;
Placenode.defaultProps = defaultProps;
export default Placenode;
//#endregion Component
