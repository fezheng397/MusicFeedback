const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const iconPath = 'IconComponents';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function upperCamelCase(str) {
  str = str.toLowerCase().split('-');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join('');
}

function titleCase(str) {
  return str.split('-').map(capitalize).join(' ');
}

// transform svg string to properly styled jsx
function reactify(svgString) {
  return svgString
    .replace(/<!--.*-->\n/gm, '')
    .replace(/<\/?svg[^>]*>/gm, '')
    .replace(/^\s*\n/gm, '')
    .replace(/\n$/, '')
    .replace(/\t/g, '  ')
    .replace(/black/g, 'currentColor')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .trim();
}

function cleanOldIcons() {
  const allJsFiles = fs
    .readdirSync(path.resolve(__dirname, `./${iconPath}`))
    .filter((f) => f.endsWith('.tsx'));
  allJsFiles.forEach((f) => {
    if (
      fs
        .readFileSync(path.resolve(__dirname, `./${iconPath}`, f), 'utf8')
        .match(/^\/\/ GENERATED-ICON/m)
    ) {
      fs.unlinkSync(path.resolve(__dirname, `./${iconPath}`, f));
    }
  });
}

async function generateNewIcons() {
  if (!fs.existsSync(path.resolve(__dirname, `./${iconPath}`))) {
    await fs.mkdirSync(path.resolve(__dirname, `./${iconPath}`));
  }

  const iconTemplate = fs.readFileSync(
    path.resolve(__dirname, './icon-template.txt'),
    'utf8'
  );
  const svgs = fs
    .readdirSync(path.resolve(__dirname, './svg'))
    .filter((f) => f.endsWith('.svg'));

  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const iconExports = [];
  const indexExports = [];

  svgs.forEach(async (svgFilename) => {
    const svgFile = svgFilename.split('.')[0];
    const componentName = upperCamelCase(svgFile);

    iconExports.push(
      `export {default as ${componentName}} from './${componentName}';`
    );

    indexExports.push(componentName);

    const svgFileContents = fs.readFileSync(
      path.resolve(__dirname, `./svg/${svgFilename}`),
      'utf8'
    );

    const iconProps = [`title="${titleCase(svgFile)}"`];

    const viewBox =
      svgFileContents.match(/viewBox='[^']+'/) ||
      svgFileContents.match(/viewBox="[^"]+"/);
    if (viewBox) {
      iconProps.push(viewBox[0]);
    }

    let result = iconTemplate
      .replace(new RegExp('%%ICON_NAME%%', 'g'), componentName)
      .replace(new RegExp('%%ICON_PROPS%%', 'g'), iconProps.join(' '))
      .replace('%%ICON_PATH%%', reactify(svgFileContents));

    fs.writeFileSync(
      path.resolve(__dirname, `./${iconPath}/${componentName}.tsx`),
      prettier.format(result, { parser: 'babel', ...prettierOptions })
    );
  });

  fs.writeFileSync(
    path.resolve(__dirname, `./${iconPath}/index.ts`),
    `${iconExports.join('\n')}\n`
  );

  fs.writeFileSync(
    path.resolve(__dirname, `./index.ts`),
    `export { default as Icon } from './Icon';\nexport {\n\t${indexExports.join(
      ',\n\t'
    )}\n} from './IconComponents';`
  );

  // eslint-disable-next-line no-console
  console.log(`Wrote ${svgs.length} icon(s)`);
}

cleanOldIcons();
generateNewIcons();
