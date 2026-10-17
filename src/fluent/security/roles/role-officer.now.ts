import { Role } from '@servicenow/sdk/core'

// F-05: Officer — approver at any level of the state's approval chain (e.g. Tahsildar, MRO).
// Contains sn_gsm.constituent_agent (works cases) and sn_gsm.case_task_agent (works case tasks).
export const officer = Role({
    name: 'x_146833_onepubl_0.officer',
    description: 'Approving officer. Reviews, approves or rejects service applications.',
    containsRoles: ['sn_gsm.constituent_agent', 'sn_gsm.case_task_agent'],
})
