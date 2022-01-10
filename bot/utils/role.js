const { rolePermissions } = require('../constants/rolePermissions');

const getPermissions = (permissions) => {
    let permissionString = '';
    if (permissions.includes('ADMINISTRATOR')) return `🔸 ${rolePermissions['ADMINISTRATOR']}`;
    for (const perm of permissions) {
        permissionString += `🔸 ${rolePermissions[perm]}\n `;
    }
    return permissionString;
}

const getRoles = (roles) => {
    let message = 'Has no roles. (Except for the @everyone role 😉)';
    const rolesToReturn = roles.filter(r => r.name !== '@everyone');
    if (rolesToReturn.size > 0) message = rolesToReturn.map(r => `<@&${r.id}>`).join(' | ');

    return { text: message, size: rolesToReturn.size };
}

module.exports = {
    getPermissions,
    getRoles,
}