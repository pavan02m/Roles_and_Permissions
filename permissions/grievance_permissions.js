const { ROLE } = require("../data");

function canViewGrievance(user, grievance) {
    console.log(grievance.userId);
    return (
        user.role === ROLE.ADMIN ||
        grievance.userId === user.id
    )
}

function scopedGrievance(user, grievances) {
    if (user.role === ROLE.ADMIN) return grievances
    return grievances.filter(grievance => grievance.userId === user.id)
}


module.exports = {
    canViewGrievance,
    scopedGrievance
}