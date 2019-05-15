import { testActionSnapshotWithFixtures } from '../../../../common/testHelpers';
import getTableItemsAction from './getTableItemsAction';

const controller = 'models';
const url = '/api/models?include_permissions=true';
const fixtures = {
  'should call api get with url ': () =>
    getTableItemsAction(controller, {}, url),
};

describe('getTableItemsAction', () => testActionSnapshotWithFixtures(fixtures));
