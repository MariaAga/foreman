import { API } from './redux/API';
import { deprecate } from './common/DeprecationService';

deprecate(
  'import API from webpack/assets/javascripts/react_app/API.js',
  "import { API } from 'webpack/assets/javascripts/react_app/redux/API.js'"
);

export default API;
