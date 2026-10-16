import {
    Table,
    ListColumn,
    DateTimeColumn,
    StringColumn,
    ChoiceColumn,
    BooleanColumn,
    ReferenceColumn,
    JsonColumn,
    GenericColumn,
    DateColumn,
    OverrideColumn,
} from '@servicenow/sdk/core'

export const sn_gsm_government_service_case = Table({
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
        prefix: 'GOVCS',
    },
    extends: 'sn_customerservice_case',
    extensible: true,
    label: 'Government Service Case',
    name: 'sn_gsm_government_service_case',
    schema: {
        created_install_base_items: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            maxLength: 4000,
            referenceTable: 'sn_install_base_item',
        }),
        decision_date: DateTimeColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Decision date',
            maxLength: 40,
        }),
        decision_reason: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Decision reason',
            maxLength: 3000,
        }),
        a_need_for_assistance: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Yes',
                    sequence: 1,
                },
                2: {
                    label: 'No',
                    sequence: 2,
                },
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'A need for assistance if you have to come into our office?',
            mandatory: true,
            maxLength: 40,
        }),
        contact_method: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Email',
                    sequence: 1,
                },
                2: {
                    label: 'Mail',
                    sequence: 2,
                },
                3: {
                    label: 'Phone',
                    sequence: 3,
                },
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Contact method?',
            mandatory: true,
            maxLength: 40,
        }),
        a_need_for_an_interpreter: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Yes',
                    sequence: 1,
                },
                2: {
                    label: 'No',
                    sequence: 2,
                },
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'A need for an interpreter in an interview? This is a free service.',
            mandatory: true,
            maxLength: 40,
        }),
        preferred_communication_method: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Email',
                    sequence: 1,
                },
                2: {
                    label: 'Mail',
                    sequence: 2,
                },
                3: {
                    label: 'Call',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Preferred communication method',
            maxLength: 40,
        }),
        fee_waiver_justification: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Fee waiver justification',
            maxLength: 256,
        }),
        on_behalf_of_someone: BooleanColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            label: 'Requesting on behalf of someone',
            maxLength: 40,
        }),
        disclaimer: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            maxLength: 32,
            readOnly: true,
            readOnlyOption: 'strict_read_only',
            referenceTable: 'sn_svc_appl_info_pitc',
        }),
        language_spoken_at_home: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
                en: {
                    label: 'English',
                    sequence: 1,
                },
                ar: {
                    label: 'Arabic',
                    sequence: 2,
                },
                pb: {
                    label: 'Brazilian Portuguese',
                    sequence: 3,
                },
                cs: {
                    label: 'Czech',
                    sequence: 5,
                },
                nl: {
                    label: 'Dutch',
                    sequence: 6,
                },
                et: {
                    label: 'Estonian',
                    sequence: 7,
                },
                fi: {
                    label: 'Finnish',
                    sequence: 8,
                },
                fr: {
                    label: 'French',
                    sequence: 9,
                },
                fq: {
                    label: 'French - Canada',
                    sequence: 10,
                },
                de: {
                    label: 'German',
                    sequence: 11,
                },
                he: {
                    label: 'Hebrew',
                    sequence: 12,
                },
                hu: {
                    label: 'Hungarian',
                    sequence: 13,
                },
                it: {
                    label: 'Italian',
                    sequence: 14,
                },
                ja: {
                    label: 'Japanese',
                    sequence: 15,
                },
                ko: {
                    label: 'Korean',
                    sequence: 16,
                },
                nb: {
                    label: 'Norwegian',
                    sequence: 17,
                },
                pl: {
                    label: 'Polish',
                    sequence: 18,
                },
                pt: {
                    label: 'Portuguese',
                    sequence: 19,
                },
                xl: {
                    label: 'Pseudo',
                    sequence: 20,
                },
                ru: {
                    label: 'Russian',
                    sequence: 21,
                },
                es: {
                    label: 'Spanish',
                    sequence: 22,
                },
                sv: {
                    label: 'Swedish',
                    sequence: 23,
                },
                th: {
                    label: 'Thai',
                    sequence: 24,
                },
                zh: {
                    label: 'Traditional Chinese',
                    sequence: 25,
                },
                tr: {
                    label: 'Turkish',
                    sequence: 26,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Language spoken at home?',
            mandatory: true,
            maxLength: 40,
        }),
        on_behalf_of: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'On behalf of',
            maxLength: 4000,
        }),
        benefit_summary: JsonColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            label: 'Benefit summary',
            maxLength: 4000,
            readOnly: true,
            readOnlyOption: 'strict_read_only',
        }),
        pace_execution: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                readonly_clickthrough: true,
            },
            label: 'PaCE Execution',
            maxLength: 32,
            referenceTable: 'sn_pace_execution',
        }),
        application_status: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Approved',
                    sequence: 1,
                },
                2: {
                    label: 'Declined',
                    sequence: 2,
                },
                3: {
                    label: 'In progress',
                    sequence: 3,
                },
                4: {
                    label: 'Submitted',
                    sequence: 4,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Application status',
            maxLength: 40,
        }),
        any_difficulty_getting_to_our_office_if_needed: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Yes',
                    sequence: 1,
                },
                2: {
                    label: 'No',
                    sequence: 2,
                },
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Any difficulty getting to our office if needed?',
            mandatory: true,
            maxLength: 40,
        }),
        language_for_written_communication: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                NULL_OVERRIDE: {
                    label: 'Select answer',
                },
                en: {
                    label: 'English',
                    sequence: 1,
                },
                ar: {
                    label: 'Arabic',
                    sequence: 2,
                },
                pb: {
                    label: 'Brazilian Portuguese',
                    sequence: 3,
                },
                cs: {
                    label: 'Czech',
                    sequence: 5,
                },
                nl: {
                    label: 'Dutch',
                    sequence: 6,
                },
                et: {
                    label: 'Estonian',
                    sequence: 7,
                },
                fi: {
                    label: 'Finnish',
                    sequence: 8,
                },
                fr: {
                    label: 'French',
                    sequence: 9,
                },
                fq: {
                    label: 'French - Canada',
                    sequence: 10,
                },
                de: {
                    label: 'German',
                    sequence: 11,
                },
                he: {
                    label: 'Hebrew',
                    sequence: 12,
                },
                hu: {
                    label: 'Hungarian',
                    sequence: 13,
                },
                it: {
                    label: 'Italian',
                    sequence: 14,
                },
                ja: {
                    label: 'Japanese',
                    sequence: 15,
                },
                ko: {
                    label: 'Korean',
                    sequence: 16,
                },
                nb: {
                    label: 'Norwegian',
                    sequence: 17,
                },
                pl: {
                    label: 'Polish',
                    sequence: 18,
                },
                pt: {
                    label: 'Portuguese',
                    sequence: 19,
                },
                xl: {
                    label: 'Pseudo',
                    sequence: 20,
                },
                ru: {
                    label: 'Russian',
                    sequence: 21,
                },
                es: {
                    label: 'Spanish',
                    sequence: 22,
                },
                sv: {
                    label: 'Swedish',
                    sequence: 23,
                },
                th: {
                    label: 'Thai',
                    sequence: 24,
                },
                zh: {
                    label: 'Traditional Chinese',
                    sequence: 25,
                },
                tr: {
                    label: 'Turkish',
                    sequence: 26,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Language for written communication?',
            mandatory: true,
            maxLength: 40,
        }),
        fee_waiver: BooleanColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            maxLength: 40,
        }),
        applicant_type: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Individual',
                    sequence: 1,
                },
                2: {
                    label: 'Business',
                    sequence: 2,
                },
                3: {
                    label: 'Agency',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Applicant type',
            maxLength: 40,
        }),
        total_fees: GenericColumn({
            attributes: {
                omit_sys_original: true,
            },
            columnType: 'currency',
            label: 'Total fees',
            maxLength: 20,
        }),
        applied_date: DateTimeColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:new GlideDateTime().getDisplayValue();',
            label: 'Reported date',
            maxLength: 40,
        }),
        requester_type: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Representative of the news media',
                    sequence: 1,
                },
                2: {
                    label: 'Educational institution',
                    sequence: 2,
                },
                3: {
                    label: 'Non-commercial scientific institution',
                    sequence: 3,
                },
                4: {
                    label: 'Commercial-use requester',
                    sequence: 4,
                },
                5: {
                    label: 'All other requesters',
                    sequence: 5,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Requester type',
            maxLength: 40,
        }),
        relation_to_applicant: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Representative',
                    sequence: 1,
                },
                2: {
                    label: 'Adult child',
                    sequence: 2,
                },
                3: {
                    label: 'Spouse',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Relationship to applicant',
            maxLength: 40,
        }),
        submission_date: DateColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            label: 'Submission date',
            maxLength: 40,
        }),
        primary_purpose: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                1: {
                    label: 'Constituent Benefits',
                    sequence: 1,
                },
                2: {
                    label: 'Governance Procedures',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Primary purpose',
            maxLength: 40,
        }),
        product: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            referenceQualifier:
                'javascript:new sn_gsm.GovernmentServicesUtil().getProductsFromProductServiceRelationship(current);',
        }),
        sold_product: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            referenceQualifier:
                'javascript:new sn_gsm.ReceivedServiceFilter().getReceivedServiceRefQualifier(current);',
        }),
        state: OverrideColumn({
            baseTable: 'task',
            default: '20',
        }),
        subcategory: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            default: '',
        }),
        category: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            default: '',
        }),
        service: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            referenceQualifier:
                'javascript:new sn_gsm.GovernmentServicesUtil().getServicesFromProductServiceRelationship(current);',
        }),
        stage: OverrideColumn({
            baseTable: 'sn_customerservice_case',
            default: '1',
        }),
    },
})
