import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModelsTable from './ModelsTable';
import reducer from './ModelsTableReducer';
import * as actions from './ModelsTableActions';
import {
  selectAPIResponse,
  selectAPIStatus,
} from '../../redux/API/APISelectors';
import { MODELS_TABLE_ID } from './ModelsTableConstants';

const mapStateToProps = state => ({
  response: selectAPIResponse(state, MODELS_TABLE_ID.toUpperCase()),
  status: selectAPIStatus(state, MODELS_TABLE_ID.toUpperCase()),
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { models_table: reducer };

export default connect(mapStateToProps, mapDispatchToProps)(ModelsTable);
