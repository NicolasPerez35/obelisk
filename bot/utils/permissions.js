const hasPermission = (user, permission) => {
    return user.memberPermissions.has(permission)
}

module.exports = {
    hasPermission,
}