import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const importIcons = () => {
    library.add([faEnvelope, faLinkedin, faSquareGithub, faFileLines]);
}

export default importIcons;