import { Role } from '@servicenow/sdk/core'

export const snGsmGovernmentServiceManager = Role({
    name: 'sn_gsm.government_service_manager',
    assignableBy: '9706af24eb01011079f98075385228d0',
    description:
        'This roles provides users the ability to manage all work performed by agents working on government cases (constituent and business). Users with this role have the ability to read/write/update/delete all government service cases and constituent/business records.',
    federatedId: 'CUudGv5bCmGEbXwNlzWxBCz11w6k2K63LwKNzAnO7I4=',
    containsRoles: [
        'sn_gsm.service_definition_manager',
        'sn_gsm.constituent_admin',
        '087226c8f34248e9b8d18c888e9200b1',
        'sn_customerservice_manager',
        'a8e1981fb07d4177a80ea53df3413f85',
        'sn_gsm.constituent_agent',
        'sn_gsm.business_agent',
        '21913590e19d4ad1bfe44d8f3c442731',
    ],
})
