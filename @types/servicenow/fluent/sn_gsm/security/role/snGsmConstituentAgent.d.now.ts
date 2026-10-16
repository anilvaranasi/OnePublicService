import { Role } from '@servicenow/sdk/core'

export const snGsmConstituentAgent = Role({
    name: 'sn_gsm.constituent_agent',
    assignableBy: '9706af24eb01011079f98075385228d0',
    description:
        'This role provides users the ability to work on government service cases for all constituents. It includes the ability to read/write/update all government service cases and constituent records',
    federatedId: 'kzFD8S7k29k13FTvyzsAWapt8vvyCF/VdHZFwiebSDg=',
    containsRoles: [
        '8486db68dfdb4cd188d2e61369175840',
        'interaction_agent',
        '233ed6480f9c43889e772a2258615e8d',
        'cb8cb5c4c384413aba6e33c036c9fe15',
        'sn_customerservice.consumer_agent',
        'sn_doc_processor.agent',
        'sn_gsm.case_writer',
        'sn_gsm.report_viewer',
        'sn_gsm.constituent_writer',
    ],
})
