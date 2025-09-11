import fetchContactsData from '@features/contacts/api/fetchContactsData';
import fetchCopyrightData from '@features/copyright/api/fetchCopyrightData';
import fetchDeptsData from '@features/depts/api/fetchDeptsData';
import fetchDoctorsData from '@features/doctors/api/fetchDoctorsData';
import fetchHardwareData from '@features/hardware/api/fetchHardwareData';
import fetchTestimonialsData from '@features/testimonials/api/fetchTestimonialsData';
// TODO: разграничить эндпойнты навигации и данных контактов
import fetchLogoData from '@features/logo/api/fetchLogoData';
import fetchNavData from '@features/nav/api/fetchNavData';
import fetchFooterNavData from '@features/nav/api/fetchFooterNavData';
import fetchSocialData from '@features/social/api/fetchSocialData';

const HANDLERS = {
  depts: fetchDeptsData(),
  doctors: fetchDoctorsData(),
  hardware: fetchHardwareData(),
  testimonials: fetchTestimonialsData(),
  logo: fetchLogoData(),
  nav: fetchNavData(),
  footerNav: fetchFooterNavData(),
  social: fetchSocialData(),
  contacts: fetchContactsData(),
  copyright: fetchCopyrightData(),
}

export default HANDLERS;
