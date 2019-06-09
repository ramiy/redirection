/**
 * External dependencies
 */

import React from 'react';
import { translate as __ } from 'lib/locale';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import TableRow from '../table-row';

const MatchLanguage = ( { data, onChange } ) => {
	const { language } = data;

	return (
		<TableRow title={ __( 'Language' ) }>
			<input type="text" name="language" value={ language } onChange={ onChange } placeholder={ __( 'Comma separated list of languages to match against (i.e. da, en-GB)' ) } />
		</TableRow>
	);
};

MatchLanguage.propTypes = {
	data: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default MatchLanguage;
