import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import TryOutController from 'devportal';

/**
 * @class TestConsole
 * @extends {React.Component}
 */
const TestConsole = () => {
    return (
        <>
            <h1>TestConsole</h1>
            <Typography variant="h4">
                <FormattedMessage
                    id="Apis.Details.index.Tryout"
                    defaultMessage="Try Out"
                />
            </Typography>
            <TryOutController />
        </>
    );
};

export default TestConsole;
