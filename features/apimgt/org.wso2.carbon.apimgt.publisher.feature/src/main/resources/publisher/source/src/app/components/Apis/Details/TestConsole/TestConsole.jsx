/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Alert from 'AppComponents/Shared/Alert';
import { TryOutController, Api, ApiContext } from 'developer_portal';

/**
 * @class TestConsole
 * @extends {React.Component}
 */
class TestConsole extends React.Component {
    /**
     *
     * @param {*} props the props parameters
     */
    constructor(props) {
        super(props);
        const restApi = new Api();
        const promisedAPI = restApi.getAPIById(this.api_uuid);
        promisedAPI
            .then((api) => {
                this.setState({ api: api.body });
                console.log('ssss');
                console.log('API Body' + api.body);
            })
            .catch((error) => {
                const { status, response } = error;
                const { setTenantDomain, intl } = this.props;
                const message = intl.formatMessage({
                    defaultMessage: 'Invalid tenant domain',
                    id: 'Apis.Details.index.invalid.tenant.domain',
                });
                if (response && response.body.code === 901300) {
                    setTenantDomain('INVALID');
                    Alert.error(message);
                }
                console.error('Error when getting apis', error);
                if (status === 404 || status === 403) {
                    Alert.error(message);
                }
            });
        this.state = {
            api: null,
        };
        this.setDetailsAPI = this.setDetailsAPI.bind(this);
    }

    /**
     *
     *
     * @param {*} api
     * @memberof Details
     */
    setDetailsAPI(api) {
        this.setState({ api });
    }

    /**
     * @inheritdoc
     * @memberof ApiConsole
     */
    render() {
        return (
            <>
                <h1>TestConsole</h1>
                <Typography variant='h4'>
                    <FormattedMessage
                        id='Apis.Details.index.Tryout'
                        defaultMessage='Try Out'
                    />
                </Typography>
                <ApiContext.Provider value={this.state.api}>
                    <TryOutController />
                </ApiContext.Provider>
            </>
        );
    }
}
export default TestConsole;
