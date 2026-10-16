import {
    Table,
    StringColumn,
    GenericColumn,
    ListColumn,
    BooleanColumn,
    EmailColumn,
    OverrideColumn,
} from '@servicenow/sdk/core'

export const sn_gsm_information_request_case = Table({
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
        prefix: 'IRC',
    },
    extends: 'sn_gsm_government_service_case',
    extensible: true,
    label: 'Information Request',
    name: 'sn_gsm_information_request_case',
    schema: {
        expedited_processing_justification: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Expedited processing justification',
            maxLength: 256,
        }),
        estimated_fees: GenericColumn({
            attributes: {
                omit_sys_original: true,
            },
            columnType: 'currency',
            label: 'Estimated fees',
            maxLength: 20,
        }),
        sn_gsm_info_req_approved_document_versions: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: 'Approved Document Versions',
            maxLength: 1024,
            referenceTable: 'ds_document_version',
        }),
        fees_willing_to_pay: GenericColumn({
            attributes: {
                omit_sys_original: true,
            },
            columnType: 'currency',
            label: 'Fees willing to pay',
            maxLength: 20,
        }),
        last_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 50,
        }),
        no_exemption_code_applicable: BooleanColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            label: 'No exemption code applicable',
            maxLength: 40,
        }),
        first_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 50,
        }),
        email: EmailColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            maxLength: 100,
        }),
        expedited_processing: BooleanColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            label: 'Expedited processing',
            maxLength: 40,
        }),
        closed_at: OverrideColumn({
            baseTable: 'task',
            readOnlyOption: 'strict_read_only',
        }),
        number: OverrideColumn({
            baseTable: 'task',
            readOnlyOption: 'strict_read_only',
        }),
        requester_type: OverrideColumn({
            baseTable: 'sn_gsm_government_service_case',
            mandatory: true,
        }),
        short_description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        service: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            referenceQualifier:
                'javascript:new sn_gsm.GovernmentServicesUtil().getServicesFromProductServiceRelationship(current);',
        }),
        resolved_at: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            readOnlyOption: 'strict_read_only',
        }),
        preferred_communication_method: OverrideColumn({
            baseTable: 'sn_gsm_government_service_case',
            mandatory: true,
        }),
        resolved_by: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            readOnlyOption: 'strict_read_only',
        }),
        closed_by: OverrideColumn({
            baseTable: 'task',
            readOnlyOption: 'strict_read_only',
        }),
        product: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            referenceQualifier:
                'javascript:new sn_gsm.GovernmentServicesUtil().getProductsFromProductServiceRelationship(current);',
        }),
    },
})
