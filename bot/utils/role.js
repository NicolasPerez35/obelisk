const { rolePermissions } = require('../constants/rolePermissions');

const getPermissions = (permissions) => {
    let permissionString = '';
    if (permissions.includes('ADMINISTRATOR')) return `🔸 ${rolePermissions['ADMINISTRATOR']}`;
    for (const perm of permissions) {
        permissionString += `🔸 ${rolePermissions[perm]}\n `;
    }
    return permissionString;
}

module.exports = {
    getPermissions,
}