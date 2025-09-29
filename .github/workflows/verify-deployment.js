// verify-deployment.js

const https = require('https');

const SITE_URL = 'https://planetsweetheart.com'; // Change to your final domain if needed

function checkDeployment(url) {
  console.log(`🔍 Verifying deployment at: ${url}`);

  https.get(url, (res) => {
    const { statusCode } = res;

    if (statusCode === 200) {
      console.log('✅ Deployment successful! Site is live.');
    } else {
      console.error(`❌ Deployment failed or incomplete. Status code: ${statusCode}`);
    }

    res.resume(); // Consume response to free memory
  }).on('error', (err) => {
    console.error(`🚨 Could not reach site: ${err.message}`);
  });
}

checkDeployment(SITE_URL);
