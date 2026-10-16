import { Table, StringColumn, OverrideColumn } from '@servicenow/sdk/core'

export const sn_gsm_license_permit_case = Table({
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
    autoNumber: {
        prefix: 'LPC',
    },
    extends: 'sn_gsm_government_service_case',
    extensible: true,
    label: 'License and Permit Case',
    name: 'sn_gsm_license_permit_case',
    schema: {
        applicant_over_age_18: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            choices: {
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
                Yes: {
                    label: 'Yes',
                    sequence: 1,
                },
                No: {
                    label: 'No',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Is the applicant over the age of 18?',
            maxLength: 40,
        }),
        has_license_denied: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            choices: {
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
                Yes: {
                    label: 'Yes',
                    sequence: 1,
                },
                No: {
                    label: 'No',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Has the applicant ever had a license denied or revoked?',
            maxLength: 40,
        }),
        proof_of_residency: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            choices: {
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
                Yes: {
                    label: 'Yes',
                    sequence: 1,
                },
                No: {
                    label: 'No',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Can the applicant provide proof of local residency?',
            maxLength: 40,
        }),
        primary_purpose: OverrideColumn({
            baseTable: 'sn_gsm_government_service_case',
            mandatory: true,
        }),
        product: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            default: '',
            referenceQualifier:
                'javascript:new sn_gsm.GovernmentServicesUtil().getProductsFromProductServiceRelationship(current);',
            mandatory: true,
        }),
    },
})
