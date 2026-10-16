import { Role } from '@servicenow/sdk/core'

export const snGsmConstituentContributor = Role({
    name: 'sn_gsm.constituent_contributor',
    assignableBy: '9706af24eb01011079f98075385228d0',
    description:
        'This role enables users to request for service and raise government cases on behalf of any constituent. This allow business stakeholderas to act as a requestor on of behalf of customers.',
    federatedId: 'bbHtVuUMT1dYBoFOfOu4zo9gjv2k4TUk4JoyYhpk1aw=',
    containsRoles: ['sn_gsm.contributor_creator', 'sn_customerservice.consumer_contributor'],
})
