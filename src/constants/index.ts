import common from './common';
import routePages from './route-pages';
import formBuilder from './form-builder';

export interface ConstantsProps {
  common: typeof common;
  routePages: typeof routePages;
  formBuilder: typeof formBuilder;
}

const constants: ConstantsProps = {
  common,
  routePages,
  formBuilder
};

export default constants;
