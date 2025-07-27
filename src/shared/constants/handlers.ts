import fetchDeptsData from '@features/depts/api/fetchDeptsData';
import fetchDoctorsData from '@features/doctors/api/fetchDoctorsData';
import fetchHardwareData from '@features/hardware/api/fetchHardwareData';
import fetchTestimonialsData from '@features/testimonials/api/fetchTestimonialsData';

const HANDLERS = {
  depts: fetchDeptsData(),
  doctors: fetchDoctorsData(),
  hardware: fetchHardwareData(),
  testimonials: fetchTestimonialsData(),
}

export default HANDLERS;
