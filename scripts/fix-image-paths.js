// Script to fix all image paths in project detail pages
// This script adds getAssetPath import and wraps all image paths

const fs = require('fs');
const path = require('path');

const filesToFix = [
    'src/pages/ProjectDetails.jsx',
    'src/pages/RentalManagementDetails.jsx',
    'src/pages/DataAnalysisDetails.jsx',
    'src/pages/AIDecisionAnalysisDetails.jsx',
    'src/pages/StockManagementDetails.jsx'
];

filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Add import if not present
    if (!content.includes('getAssetPath')) {
        content = `import { getAssetPath } from '../utils/assetPath';\n` + content;
    }

    // Replace all image paths
    content = content.replace(/image:\s*"\/assets\/images\//g, 'image: getAssetPath("/assets/images/');

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
});

console.log('All files fixed!');
