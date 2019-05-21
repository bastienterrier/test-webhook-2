const fs = require('fs-extra');
const jsyaml = require('js-yaml');

const file = fs.readFileSync('assets/json.rulesrc');
try {
  const parsed = JSON.parse(file);
  console.log('JSON');
  console.log(parsed.rules[0].onSuccess);
} catch (e) {
  const parsed = jsyaml.safeLoad(file);
  console.log('YAML');
  console.log(parsed.rules[0].onSuccess);
}
