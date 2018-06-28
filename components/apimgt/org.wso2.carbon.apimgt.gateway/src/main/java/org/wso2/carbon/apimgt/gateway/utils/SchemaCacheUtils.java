package org.wso2.carbon.apimgt.gateway.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;
import org.wso2.carbon.apimgt.impl.APIConstants;

import javax.cache.Cache;
import javax.cache.Caching;


public class SchemaCacheUtils {
    private static Logger log = LoggerFactory.getLogger(SchemaCacheUtils.class);

    protected static Cache getSchemaCache() {
        Cache cache = null;
        try {
            javax.cache.CacheManager manager =
                    Caching.getCacheManager(APIConstants.API_MANAGER_CACHE_MANAGER);
            cache = manager.getCache(APIMgtGatewayConstants.API_SWAGGER_SCHEMA);
        } catch (NullPointerException e) {
            log.error(
                    "Did not found valid API Validation Information cache configuration. " +
                            e.getMessage(), e);
        }
        return cache;
    }

    public static void putCache(String key, String value) {
        getSchemaCache().put(key,value);

    }

    public static String getCacheSchema(String key) {
      return (String) getSchemaCache().get(key);

    }
}
