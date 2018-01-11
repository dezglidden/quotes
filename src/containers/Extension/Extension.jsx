import React, { Component } from 'react';
import ReactGoogleSheetConnector from 'react-google-sheet-connector';

import Quote from '../../components/Quote/Quote';

export class Extension extends Component {

	render() {
		return (
			<div>
				<ReactGoogleSheetConnector 
					clientid={process.env.REACT_APP_CLIENT_ID}
				    apiKey={process.env.REACT_APP_API_KEY}
				    spreadsheetId={process.env.REACT_APP_SPREADSHEET_ID}
				    spinner={ <div className="loading-spinner"/> } 
			    >
			    	<Quote />
				</ReactGoogleSheetConnector>
			</div>
		);
	}

}

export default Extension;