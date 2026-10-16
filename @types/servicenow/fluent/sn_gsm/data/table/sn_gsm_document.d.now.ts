import { Table, DateColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const sn_gsm_document = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
        email_client: true,
        timeFromCreateToActivate: '15000',
    },
    audit: true,
    extends: 'ds_document',
    extensible: true,
    label: 'Government Service Document',
    name: 'sn_gsm_document',
    schema: {
        letter_date: DateColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Letter date',
            maxLength: 40,
        }),
        deadline: DateTimeColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
    },
})
