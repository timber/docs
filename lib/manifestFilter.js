module.exports = function(value, mixManifest) {
	const index = value.replace('/build', '');

	if (mixManifest[index]) {
		value = value.replace(index, mixManifest[index]);
	}

	return value;
};
