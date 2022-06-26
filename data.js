const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Pavan', role: ROLE.ADMIN },
      { id: 2, name: 'Pranay', role: ROLE.BASIC },
      { id: 3, name: 'Purva', role: ROLE.BASIC }
    ],
    grievances: [
      { id: 1, name: "Pavan's grievance", userId: 1 },
      { id: 2, name: "Pranay's grievance", userId: 2 },
      { id: 3, name: "Purva's grievance", userId: 3 }
    ]
  }