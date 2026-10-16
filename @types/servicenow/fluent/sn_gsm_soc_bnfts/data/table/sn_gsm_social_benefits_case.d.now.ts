import { Table, ListColumn, ChoiceColumn, StringColumn } from '@servicenow/sdk/core'

export const sn_gsm_social_benefits_case = Table({
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
        prefix: 'SBC',
    },
    extends: 'sn_gsm_government_service_case',
    extensible: true,
    label: 'Social Benefit Case',
    name: 'sn_gsm_social_benefits_case',
    schema: {
        additional_benefits: ListColumn({
            attributes: {
                array: 'denormalized',
                no_sort: true,
                slushbucket_ref_no_expand: true,
            },
            label: 'Additional eligible benefits',
            maxLength: 4000,
            referenceTable: 'cmdb_model',
        }),
        buying_or_selling_benefits: ChoiceColumn({
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
            label: [
                {
                    label: 'Buying/selling benefits?',
                    plural: 'Buying/selling benefits?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        childcare_needed: StringColumn({
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
            label: [
                {
                    label: 'Does anyone in your home need childcare for you to work/attend school?',
                    plural: 'Does anyone in your home need childcare for you to work/attend school?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        currently_employed: StringColumn({
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
            label: [
                {
                    label: 'Do you have a job or are you self-employed?',
                    plural: 'Do you have a job or are you self-employed?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        sources_of_income: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                none: {
                    label: 'None',
                    sequence: 1,
                },
                true: {
                    label: 'True',
                    sequence: 2,
                },
                false: {
                    label: 'False',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Does anyone in the household have any sources of income?',
                    plural: 'Does anyone in the household have any sources of income?',
                },
            ],
            maxLength: 40,
        }),
        applied_for_benefits_past_year: StringColumn({
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
            label: [
                {
                    label: 'Have you applied for benefits within the last year?',
                    plural: 'Have you applied for benefits within the last year?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        any_felony_criminal_offense_after_1996: ChoiceColumn({
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
            label: [
                {
                    label: 'Any felony criminal offense after 1996?',
                    plural: 'Any felony criminal offense after 1996?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        assets: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                none: {
                    label: 'None',
                    sequence: 1,
                },
                true: {
                    label: 'True',
                    sequence: 2,
                },
                false: {
                    label: 'False',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Does anyone in the household have any financial accounts?',
                    plural: 'Does anyone in the household have any financial accounts?',
                },
            ],
            maxLength: 40,
        }),
        pre_tax_contributions: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                none: {
                    label: 'None',
                    sequence: 1,
                },
                true: {
                    label: 'True',
                    sequence: 2,
                },
                false: {
                    label: 'False',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Does anyone in the household have any pre-tax contributions on current income?',
                    plural: 'Does anyone in the household have any pre-tax contributions on current income?',
                },
            ],
            maxLength: 40,
        }),
        disability_payments: StringColumn({
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
            label: [
                {
                    label: 'Are you currently receiving disability payments?',
                    plural: 'Are you currently receiving disability payments?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
        expenses: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                none: {
                    label: 'None',
                    sequence: 1,
                },
                true: {
                    label: 'True',
                    sequence: 2,
                },
                false: {
                    label: 'False',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Does anyone in the household have any expenses?',
                    plural: 'Does anyone in the household have any expenses?',
                },
            ],
            maxLength: 40,
        }),
        other_assets: ChoiceColumn({
            attributes: {
                timeFromCreateToActivate: '15000',
            },
            choices: {
                none: {
                    label: 'None',
                    sequence: 1,
                },
                true: {
                    label: 'True',
                    sequence: 2,
                },
                false: {
                    label: 'False',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Does anyone in the household have any other assets or resources?',
                    plural: 'Does anyone in the household have any other assets or resources?',
                },
            ],
            maxLength: 40,
        }),
        receiving_benefits_at_multiple_states_at_one_time: ChoiceColumn({
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
            label: [
                {
                    label: 'Receiving benefits in multiple states at one time?',
                    plural: 'Receiving benefits in multiple states at one time?',
                },
            ],
            mandatory: true,
            maxLength: 40,
        }),
    },
})
