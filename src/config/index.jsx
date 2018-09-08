import config from 'react-global-configuration';
//https://www.npmjs.com/package/react-global-configuration
//https://www.youtube.com/watch?v=68K31GZL3p8

import dev from './dev'
import test from './test'
import prod from './prod'

if (window.location.hostname === 'localhost') {
    config.set(prod, { freeze: false });
    config.set(dev, { assign: true });
} else {
    config.set(test);
}