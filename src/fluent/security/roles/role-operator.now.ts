import { Role } from '@servicenow/sdk/core'

// F-05: Operator — centre staff who submit applications on behalf of walk-in citizens.
// Contains sn_gsm.constituent_contributor so operators can raise cases on behalf of others.
export const operator = Role({
    name: 'x_146833_onepubl_0.operator',
    description: 'Service centre staff. Submits applications on behalf of citizens.',
    containsRoles: ['sn_gsm.constituent_contributor'],
})
