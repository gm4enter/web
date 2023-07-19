import flatten from 'flat';
import common from './common.json';
import header from './header.json';

const locale = {
  common: flatten(common, {
    delimiter: '_',
  }),
  header: flatten(header, {
    delimiter: '_',
  }),
};
export default locale;
