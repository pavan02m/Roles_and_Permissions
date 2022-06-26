const express = require('express')
const { authUser } = require('../authUser')
const router = express.Router()
const { grievances } = require('../data')
const { canViewGrievance , scopedGrievance } = require('../permissions/grievance_permissions')

router.get('/', authUser, (req, res) => {
    res.json(scopedGrievance(req.user, grievances))
})

router.get('/:grievanceId', setGrievance, authUser, authGetGrievance, (req, res) => {
    res.json(req.grievance)
})

function setGrievance(req, res, next) {
    const grievanceId = parseInt(req.params.grievanceId)
    req.grievance = grievances.find(grievance => grievance.id === grievanceId)

    if (req.grievance == null) {
        res.status(404)
        return res.send('grievance not found')
    }
    next()
}

function authGetGrievance(req, res, next) {
    if (!canViewGrievance(req.user, req.grievance)) {
        res.status(401)
        return res.send('Not Allowed')
    }
    next()
}

module.exports = router