import { fetchDeptsData, fetchDoctorsData } from '@shared/api';

const HANDLERS = {
  depts: fetchDeptsData(),
  doctors: fetchDoctorsData(),
}

export default HANDLERS;
