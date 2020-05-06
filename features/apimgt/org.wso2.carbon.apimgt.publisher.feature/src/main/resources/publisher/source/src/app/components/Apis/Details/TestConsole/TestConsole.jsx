import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
//import { TryOutController } from 'wso2_apim_developer_portal';
/**
 * @class TestConsole
 * @extends {React.Component}
 */
const TestConsole = () => {
    return (
        <>
            <h1>TestConsole</h1>
            <Typography variant='h4'>
                <FormattedMessage
                    id='Apis.Details.index.Tryout'
                    defaultMessage='Try Out'
                />
            </Typography>
        </>
    );
};

export default TestConsole;
