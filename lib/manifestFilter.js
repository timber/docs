module.exports = function (value, mixManifest) {
	const index = value.replace('/build', '');

	if (mixManifest[index]) {
		return mixManifest[index];
	}

	return value;
};
