import { Role } from '@servicenow/sdk/core'

export const snGsmAdmin = Role({
    name: 'sn_gsm.admin',
    assignableBy: '9706af24eb01011079f98075385228d0',
    description:
        'This role provides delegated admin access to scoped applications created on the Public Sector Digital Services platform',
    federatedId: 'ttfw9ovDqBEORR96nFTD+e/mPK9KysSqHdb8uR1Mo3g=',
    scopedAdmin: true,
    containsRoles: [
        '01ff8f5a73da4bb584e5c1ce518686d6',
        '364c3e14d15f47458eb67bd527ec3378',
        'sn_csm_case_types.service_definition_admin',
        'sn_gsm.pace_admin',
        'sn_gsm.government_service_manager',
        'ed11a21136e741119c971b211913e6eb',
    ],
})
