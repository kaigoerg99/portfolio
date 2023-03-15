import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const importIcons = () => {
    library.add([faEnvelope, faLinkedin]);
}

export default importIcons;