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
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AuthManager from 'AppData/AuthManager';
import Progress from 'AppComponents/Shared/Progress';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'swagger-ui-react/swagger-ui.css';
import { SwaggerUI, TryOutController, Api } from 'developer_portal';

/**
 * @inheritdoc
 * @param {*} theme theme
 */
const styles = (theme) => ({
    centerItems: {
        margin: 'auto',
    },
    categoryHeading: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(-5),
    },
    buttonIcon: {
        marginRight: 10,
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        '& span, & h5, & label, & td, & li, & div, & input': {
            color: theme.palette.getContrastText(theme.palette.background.paper),
        },
    },
    grid: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        justifyContent: 'center',
    },
    userNotificationPaper: {
        padding: theme.spacing(2),
    },
    titleSub: {
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    tryoutHeading: {
        fontWeight: 400,
    },
    swaggerUIPaper: {
        showTryout: true,
        swaggerUIBackground: '#efefef',
        documentBackground: '#efefef',
        tokenTextBoxBackground: '#efefef',
    },
});

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
        this.state = {
            securitySchemeType: 'OAUTH',
            username: '',
            password: '',
            scopes: [],
            selectedKeyType: 'PRODUCTION',
            keys: [],
        };
        const { apiObj, uuid } = props;
        console.log('API');
        console.log(apiObj);
        console.log('API UUID');
        console.log(uuid);
        this.accessTokenProvider = this.accessTokenProvider.bind(this);
        this.updateSwagger = this.updateSwagger.bind(this);
        this.setSecurityScheme = this.setSecurityScheme.bind(this);
        this.setSelectedEnvironment = this.setSelectedEnvironment.bind(this);
        this.setProductionAccessToken = this.setProductionAccessToken.bind(this);
        this.setSandboxAccessToken = this.setSandboxAccessToken.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setSelectedKeyType = this.setSelectedKeyType.bind(this);
        this.setKeys = this.setKeys.bind(this);
        this.updateAccessToken = this.updateAccessToken.bind(this);
    }

    componentDidMount() {
        console.log('updateDate');
        console.log(this.props);
        const { apiObj, uuid } = this.props;
        console.log('API');
        console.log(apiObj.id);
        console.log('API UUID');
        console.log(uuid);
        let apiData;
        let environments;
        let labels;
        let selectedEnvironment;
        let swagger;
        let productionAccessToken;
        let sandboxAccessToken;
        let apiID;
        const user = AuthManager.getUser();
        this.apiClient = new Api();
        const promisedAPI = this.apiClient.getAPIById(uuid);
        promisedAPI
            .then((apiResponse) => {
                console.log('APIRESPONSE');
                console.log(apiResponse.obj);
                apiID = apiResponse.obj.id;
                console.log(apiResponse.obj.gatewayEnvironments);
                apiData = apiResponse.obj;
                console.log('API data' + apiResponse.obj);
                if (apiData.endpointURLs) {
                    environments = apiData.endpointURLs.map((endpoint) => { return endpoint.environmentName; });
                    console.log('environments' + environments);
                }
                if (apiData.labels) {
                    labels = apiData.labels.map((label) => { return label.name; });
                    console.log('label' + labels);
                }
                if (apiData.scopes) {
                    const scopeList = apiData.scopes.map((scope) => { return scope.name; });
                    this.setState({ scopes: scopeList });
                }
                if (environments && environments.length > 0) {
                    [selectedEnvironment] = environments;
                    console.log('selected env' + selectedEnvironment);
                    return this.apiClient.getSwaggerByAPIIdAndEnvironment(apiResponse.obj.id, selectedEnvironment);
                } else if (labels && labels.length > 0) {
                    [selectedEnvironment] = labels;
                    console.log('labels' + selectedEnvironment);
                    return this.apiClient.getSwaggerByAPIIdAndLabel(apiResponse.obj.id, selectedEnvironment);
                } else {
                    return this.apiClient.getSwaggerByAPIId(apiResponse.obj.id);
                }
            })
            .then((swaggerResponse) => {
                swagger = swaggerResponse.obj;
                if (user != null) {
                    this.setState({
                        api: apiData,
                        swagger,
                        environments,
                        labels,
                        productionAccessToken,
                        sandboxAccessToken,
                    });
                    return this.apiClient.getSubscriptions(apiID);
                } else {
                    return null;
                }
            })
            .catch((error) => {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
                const { status } = error;
                if (status === 404) {
                    this.setState({ notFound: true });
                }
            });
        //     .catch((error) => {
        //         const { status, response } = error;
        //         const { setTenantDomain, intl } = this.props;
        //         const message = intl.formatMessage({
        //             defaultMessage: 'Invalid tenant domain',
        //             id: 'Apis.Details.index.invalid.tenant.domain',
        //         });
        //         if (response && response.body.code === 901300) {
        //             setTenantDomain('INVALID');
        //             Alert.error(message);
        //         }
        //         console.error('Error when getting apis', error);
        //         if (status === 404 || status === 403) {
        //             Alert.error(message);
        //         }
        //     });
        // const promisedApi = API.getSwaggerByAPIId(apiObj.id);
        // promisedApi
        //     .then((response) => {
        //         console.log('swagger');
        //         console.log(response.obj);
        //         this.setState({
        //             swagger: response.obj,
        //             api: apiData,
        //             environments,
        //         });
        //     })
        //     .catch((error) => {
        //         if (process.env.NODE_ENV !== 'production') {
        //             console.log(error);
        //         }
        //         const { status } = error;
        //         if (status === 404) {
        //             this.setState({ notFound: true });
        //         }
        //     });
    }

    /**
     * Set SecurityScheme value
     * @memberof ApiConsole
     */
    setSecurityScheme(securityScheme) {
        this.setState({ securitySchemeType: securityScheme });
    }

    /**
     * Set Selected Environment
     * @memberof ApiConsole
     */
    setSelectedEnvironment(selectedEnvironment) {
        this.setState({ selectedEnvironment });
    }

    /**
     * Set Production Access Token
     * @memberof ApiConsole
     */
    setProductionAccessToken(productionAccessToken) {
        this.setState({ productionAccessToken });
    }

    /**
     * Set Sandbox Access Token
     * @memberof ApiConsole
     */
    setSandboxAccessToken(sandboxAccessToken) {
        this.setState({ sandboxAccessToken });
    }

    /**
     * Set Username
     * @memberof ApiConsole
     */
    setUsername(username) {
        this.setState({ username });
    }

    /**
     * Set Password
     * @memberof ApiConsole
     */
    setPassword(password) {
        this.setState({ password });
    }

    /**
     * Set Password
     * @memberof ApiConsole
     */
    setSelectedKeyType(selectedKeyType, isUpdateToken) {
        if (isUpdateToken) {
            this.setState({ selectedKeyType }, this.updateAccessToken);
        } else {
            this.setState({ selectedKeyType });
        }
    }

    setKeys(keys) {
        this.setState({ keys });
    }

    /**
     * Load the access token for given key type
     * @memberof TryOutController
     */
    updateAccessToken() {
        const {
            keys, selectedKeyType,
        } = this.state;
        let accessToken;
        if (keys.get(selectedKeyType)) {
            ({ accessToken } = keys.get(selectedKeyType).token);
        }
        if (selectedKeyType === 'PRODUCTION') {
            this.setProductionAccessToken(accessToken);
        } else {
            this.setSandboxAccessToken(accessToken);
        }
    }

    /**
     *
     * Provids the access token to the Swagger UI
     * @returns {*} access token
     * @memberof ApiConsole
     */
    accessTokenProvider() {
        const {
            securitySchemeType, username, password, productionAccessToken, sandboxAccessToken, selectedKeyType,
        } = this.state;
        if (securitySchemeType === 'BASIC') {
            const credentials = username + ':' + password;
            return btoa(credentials);
        }
        if (selectedKeyType === 'PRODUCTION') {
            return productionAccessToken;
        } else {
            return sandboxAccessToken;
        }
    }

    /**
     * Load the swagger file of the selected environemnt
     * @memberof ApiConsole
     */
    updateSwagger() {
        const {
            selectedEnvironment, api, environments,
        } = this.state;
        let promiseSwagger;

        if (selectedEnvironment) {
            if (environments.includes(selectedEnvironment)) {
                promiseSwagger = this.apiClient.getSwaggerByAPIIdAndEnvironment(api.id, selectedEnvironment);
            } else {
                promiseSwagger = this.apiClient.getSwaggerByAPIIdAndLabel(api.id, selectedEnvironment);
            }
        } else {
            promiseSwagger = this.apiClient.getSwaggerByAPIId(api.id);
        }
        promiseSwagger.then((swaggerResponse) => {
            this.setState({ swagger: swaggerResponse.obj });
        });
    }

    /**
     * @inheritdoc
     * @memberof ApiConsole
     */
    render() {
        const { classes } = this.props;
        const user = AuthManager.getUser();
        console.log('user');
        console.log(user);
        console.log('this.state----');
        console.log(this.state);
        console.log('render API state');
        console.log('my sate');
        const {
            swagger, api, securitySchemeType, selectedKeyType, scopes, username, password, sandboxAccessToken,
            productionAccessToken, notFound,
        } = this.state;
        if (api == null || swagger == null) {
            return <Progress />;
        }
        if (notFound) {
            return 'API Not found !';
        }
        let isApiKeyEnabled = false;
        let authorizationHeader = api.authorizationHeader ? api.authorizationHeader : 'Authorization';
        if (api && api.securityScheme) {
            isApiKeyEnabled = api.securityScheme.includes('api_key');
            if (isApiKeyEnabled && securitySchemeType === 'API-KEY') {
                authorizationHeader = 'apikey';
            }
        }
        console.log('API-object' + api);
        console.log('swagger:::' + this.state.swagger);
        console.log('swagger:::' + swagger);
        console.log(this.state.api);
        console.log(authorizationHeader);
        const isPrototypedAPI = api.lifeCycleStatus && api.lifeCycleStatus.toLowerCase() === 'prototyped';
        return (
            <>
                <Typography variant='h4' className={classes.titleSub}>
                    <FormattedMessage id='Apis.Details.index.Tryout' defaultMessage='Try Out' />
                </Typography>
                <Paper className={classes.paper}>
                    <Grid container className={classes.grid}>
                        {!isPrototypedAPI && (
                            <Grid item md={6}>
                                <Paper className={classes.userNotificationPaper}>
                                    <Typography variant='h5' component='h3'>
                                        <Icon>warning</Icon>
                                        {' '}
                                        <FormattedMessage id='notice' defaultMessage='Notice' />
                                    </Typography>
                                    <Typography component='p'>
                                        <FormattedMessage
                                            id='api.console.require.access.token'
                                            defaultMessage={'You need an access token to try the API. Please log '
                                            + 'in and subscribe to the API to generate an access token. If you already '
                                            + 'have an access token, please provide it below.'}
                                        />
                                    </Typography>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                    <TryOutController
                        setSecurityScheme={this.setSecurityScheme}
                        securitySchemeType={securitySchemeType}
                        productionAccessToken={productionAccessToken}
                        setProductionAccessToken={this.setProductionAccessToken}
                        sandboxAccessToken={sandboxAccessToken}
                        setSandboxAccessToken={this.setSandboxAccessToken}
                        swagger={swagger}
                        scopes={scopes}
                        setUsername={this.setUsername}
                        setPassword={this.setPassword}
                        username={username}
                        password={password}
                        setSelectedKeyType={this.setSelectedKeyType}
                        selectedKeyType={selectedKeyType}
                        updateSwagger={this.updateSwagger}
                        setKeys={this.setKeys}
                        api={this.state.api}
                    />
                </Paper>
                <Paper className={classes.swaggerUIPaper}>
                    <SwaggerUI
                        api={this.state.api}
                        accessTokenProvider={this.accessTokenProvider}
                        spec={swagger}
                        authorizationHeader={authorizationHeader}
                    />
                </Paper>
            </>
        );
    }
}

TestConsole.propTypes = {
    classes: PropTypes.shape({
        paper: PropTypes.string.isRequired,
        titleSub: PropTypes.string.isRequired,
        grid: PropTypes.string.isRequired,
        userNotificationPaper: PropTypes.string.isRequired,
        buttonIcon: PropTypes.string.isRequired,
    }).isRequired,
};

export default withStyles(styles)(TestConsole);
