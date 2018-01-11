import React from 'react';
import { connectToSpreadsheet } from 'react-google-sheet-connector';
import './Quote.css';

const quote = (props) => {
    /**
     * The total number of quotes in the spreadsheet
     * @type {Number}
     */
    const quoteCount = +props.getSheet('quotes').getData().slice(-1)[0][0];
    /**
     * A random number to use as the key for retrieving a single quote
     * @return {Number} a number between 1 and the number of quotes
     */
    const getRandomNumber = () => {
        return Math.floor(Math.random() * (quoteCount - 1 + 1)) + 1;
    }
    /**
     * The number to pass as the array key
     * @type {Number}
     */
    const arrayKey = getRandomNumber();
    
    return (
        <div className="extension">
        {
            props.getSheet('quotes').getData().slice(arrayKey, arrayKey + 1).map(row => 
                <div key={row[0]}>
                    <blockquote>{row[1]}</blockquote>
                    <p className="author">- {row[2]}</p>
                </div>
            )
        }
        </div>
    )
}

export default connectToSpreadsheet(quote);