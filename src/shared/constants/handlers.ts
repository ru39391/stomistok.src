import fetchDeptsData from '@features/depts/api/fetchDeptsData';
import fetchDoctorsData from '@features/doctors/api/fetchDoctorsData';
import fetchHardwareData from '@features/hardware/api/fetchHardwareData';

const HANDLERS = {
  depts: fetchDeptsData(),
  doctors: fetchDoctorsData(),
  hardware: fetchHardwareData(),
}

export default HANDLERS;
