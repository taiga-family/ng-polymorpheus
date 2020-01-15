const fs = require('fs');

const DIST_LIB_PATH = 'dist/ng-polymorpheus/';
const README_PATH = 'README.md';

const PATH_TO = DIST_LIB_PATH + README_PATH;

copyReadmeIntoDistFolder();

function copyReadmeIntoDistFolder() {
    if (!fs.existsSync(README_PATH)) {
        throw new Error('README.md does not exist');
    } else {
        const fileBody = fs.readFileSync(README_PATH).toString();
        const withoutLogo = fileBody.replace(
            '![Polymorpheus](projects/demo/assets/logo.svg)',
            '',
        );

        fs.writeFileSync(PATH_TO, withoutLogo);
    }
}
