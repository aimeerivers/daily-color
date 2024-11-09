const crypto = require('crypto');

function getDailyColor() {
    const date = new Date().toISOString().split('T')[0];
    const hash = crypto.createHash('sha256').update(date).digest('hex');
    const color = `#${hash.slice(0, 6)}`;

    return color;
}

module.exports = getDailyColor;
