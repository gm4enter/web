import flatten from 'flat';
import common from './common.json';
import header from './header.json';
import footer from './footer.json';

const locale = {
  common: flatten(common, {
    delimiter: '_',
  }),
  header: flatten(header, {
    delimiter: '_',
  }),
  footer: flatten(footer, {
    delimiter: '_',
  }),
};
export default locale;
