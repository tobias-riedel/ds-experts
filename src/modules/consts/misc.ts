import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const SCROLL_LINKS_PROPS = {
  offset: -59,
  duration: 0,
};

export const MySwal = withReactContent(Swal);

export const HONEYPOT_MSG = 'Honeypot triggered';

export const CENTER_OF_GERMANY_COORDINATES: [number, number] = [50.974419, 10.32545];
export const PROJECT_MAP_ZOOM = 4.9;

export const DEFAULT_EXPERT_IMG = '/images/team/default.png';

export const DEBOUNCE_INPUT = 300;
