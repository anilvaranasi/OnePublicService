import { Role } from '@servicenow/sdk/core'

export const snGsmCaseTaskAgent = Role({
    name: 'sn_gsm.case_task_agent',
    description: 'This role enables users to work on government case tasks.',
    federatedId: 'TX1mlLc/tiznww1+R7muo91CRq30pf+Zsj+ZZc2Gx1U=',
    containsRoles: [
        'sn_gsm.contributor_editor',
        '79b1d4c7136e437dbbd39cc58833f812',
        'sn_customerservice.case_task_agent',
        'sn_gsm.case_viewer',
        'sn_doc_processor.agent',
        'sn_gsm.constituent_viewer',
        'dc12bbb7b7e2434394f37632d6b002af',
        'sn_gsm.service_definition_viewer',
        '23d7d9e74c1749359277085f72b674f0',
    ],
})
