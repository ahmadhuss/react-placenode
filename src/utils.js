/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 * @param obj
 * @param omitKeys
 * @returns {{}} Object
 */
export const omit = (obj, omitKeys) => {
	const result = {};
	// Get object properties as an array
	const propsArray = Object.keys(obj);
	propsArray.forEach(key => {
		// Searches the array for the specified item, if the item is not found it returns -1 then
		// construct a new object
		if (omitKeys.indexOf(key) === -1) {
			result[key] = obj[key];
		}
	});
	return result;
};

/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
export const getElementType = (Component, props, getDefault) => {
	const { defaultProps = {} } = Component;

	// ----------------------------------------
	// user defined "as" element type

	if (props.tag && props.tag !== defaultProps.tag) return props.tag;

	// ----------------------------------------
	// computed default element type

	if (getDefault) {
		const computedDefault = getDefault();
		if (computedDefault) {
			return computedDefault;
		}
	}

	// ----------------------------------------
	// infer anchor links

	if (props.href) {
		return 'a';
	}

	// ----------------------------------------
	// use defaultProp or 'div'

	return defaultProps.tag || 'div';
};
