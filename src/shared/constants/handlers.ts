import fetchDeptsData from '@features/depts/api/fetchDeptsData';
import fetchDoctorsData from '@features/doctors/api/fetchDoctorsData';
import fetchHardwareData from '@features/hardware/api/fetchHardwareData';
import fetchTestimonialsData from '@features/testimonials/api/fetchTestimonialsData';
// TODO: разграничить эндпойнты навигации и данных контактов
import fetchNavData from '@features/nav/api/fetchNavData';

const HANDLERS = {
  depts: fetchDeptsData(),
  doctors: fetchDoctorsData(),
  hardware: fetchHardwareData(),
  testimonials: fetchTestimonialsData(),
  nav: fetchNavData(),
}

export default HANDLERS;
