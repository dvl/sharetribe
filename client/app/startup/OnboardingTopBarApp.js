import r from 'r-dom';
import { initialize as initializeI18n } from '../utils/i18n';
import OnboardingTopBar from '../components/organisms/OnboardingTopBar/OnboardingTopBar';

export default (props, railsContext) => {
  initializeI18n(railsContext, process.env.NODE_ENV);

  return r(OnboardingTopBar, props);
};
