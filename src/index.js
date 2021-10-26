import React from 'react';
import ReactDOM from 'react-dom';
import {
  IntlProvider,
  FormattedRelativeTime,
  useIntl,
} from "react-intl";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MS_IN_DAY = 1e3 * 3600 * 24;

const PostDate = ({date}) => {
  const intl = useIntl()
  return (
    <span title={intl.formatDate(date)}>
      <FormattedRelativeTime value={(Date.now() - date)/MS_IN_DAY} unit="day"/>
    </span>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
