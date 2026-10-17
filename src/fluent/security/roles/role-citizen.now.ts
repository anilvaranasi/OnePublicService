import { Role } from '@servicenow/sdk/core'

// F-05: Citizen — public applicant who submits service requests.
// Contains sn_gsm.constituent so citizens can raise cases and manage their own.
export const citizen = Role({
    name: 'x_146833_onepubl_0.citizen',
    description: 'Public applicant. Submits service requests and tracks own cases.',
    containsRoles: ['sn_gsm.constituent'],
})
