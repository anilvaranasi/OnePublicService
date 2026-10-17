import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateColumn,
    DecimalColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

// A-01: Income Certificate case table.
// Extends the PSDS Core government service case table. Adds the service-specific
// fields observed on the MeeSeva form (Observed) plus Inferred choice values where
// the dropdown options were not visible.
// The Core table already carries: on_behalf_of, total_fees, fee_waiver,
// application_status, submission_date, decision_date, decision_reason.
// Those are not duplicated here.
export const x_146833_onepubl_0_income_cert_case = Table({
    name: 'x_146833_onepubl_0_income_cert_case',
    label: 'Income Certificate Case',
    extends: 'sn_gsm_government_service_case',
    display: 'number',
    autoNumber: {
        prefix: 'IC',
        numberOfDigits: 12,
    },
    schema: {
        // --- Applicant Details ---
        applicant_name: StringColumn({
            label: 'Applicant Name',
            mandatory: true,
            maxLength: 200,
        }),
        guardian_name: StringColumn({
            label: 'Father / Husband / Guardian Name',
            mandatory: true,
            maxLength: 200,
        }),
        aadhaar_no: StringColumn({
            label: 'Aadhaar No',
            mandatory: true,
            maxLength: 12,
        }),
        ration_card_no: StringColumn({
            label: 'Ration Card No',
            maxLength: 40,
        }),
        date_of_birth: DateColumn({
            label: 'Date of Birth',
        }),
        gender: ChoiceColumn({
            label: 'Gender',
            mandatory: true,
            default: 'male',
            choices: {
                male:   { label: 'Male',   sequence: 1 },
                female: { label: 'Female', sequence: 2 },
                other:  { label: 'Other',  sequence: 3 },
            },
        }),
        email: StringColumn({
            label: 'Email ID',
            maxLength: 200,
        }),

        // --- Permanent Address ---
        door_no: StringColumn({
            label: 'Door No',
            mandatory: true,
            maxLength: 40,
        }),
        locality: StringColumn({
            label: 'Locality / Land Mark',
            mandatory: true,
            maxLength: 200,
        }),
        district: ReferenceColumn({
            label: 'District',
            mandatory: true,
            referenceTable: 'x_146833_onepubl_0_district',
            cascadeRule: 'none',
        }),
        mandal: StringColumn({
            // Inferred: stored as free text until a Mandal reference table is built (phase 2)
            label: 'Mandal',
            mandatory: true,
            maxLength: 100,
        }),
        village_ward: StringColumn({
            label: 'Village / Ward',
            maxLength: 100,
        }),
        pincode: StringColumn({
            label: 'Pin Code',
            maxLength: 6,
        }),
        mobile_no: StringColumn({
            label: 'Mobile No',
            mandatory: true,
            maxLength: 15,
        }),
        phone_no: StringColumn({
            label: 'Phone No',
            maxLength: 15,
        }),
        delivery_type: ChoiceColumn({
            // Inferred: options not observed on MeeSeva form
            label: 'Delivery Type',
            mandatory: true,
            choices: {
                online:  { label: 'Online',  sequence: 1 },
                counter: { label: 'Counter', sequence: 2 },
            },
        }),

        // --- Income Certificate Details ---
        income_lands: DecimalColumn({
            label: 'Income on Lands',
            default: '0',
        }),
        income_business: DecimalColumn({
            label: 'Income on Business',
            default: '0',
        }),
        income_buildings: DecimalColumn({
            label: 'Income on Buildings',
            default: '0',
        }),
        income_labour: DecimalColumn({
            label: 'Income on Labour',
            default: '0',
        }),
        income_salary: DecimalColumn({
            label: 'Salary of both Wife and Husband (Employed)',
            default: '0',
        }),
        income_other: DecimalColumn({
            label: 'Income on Other Sources',
            mandatory: true,
            default: '0',
        }),
        total_income: DecimalColumn({
            // Computed field — sum of the six income fields above. The formula is set
            // via a client script or business rule, not in the schema (Inferred).
            label: 'Total Income',
        }),
        purpose: ChoiceColumn({
            // Inferred: options not observed on MeeSeva form
            label: 'Purpose',
            mandatory: true,
            choices: {
                education:  { label: 'Education',          sequence: 1 },
                loan:       { label: 'Loan',               sequence: 2 },
                government: { label: 'Government Scheme',  sequence: 3 },
                legal:      { label: 'Legal / Court',      sequence: 4 },
                other:      { label: 'Other',              sequence: 5 },
            },
        }),
        applied_for: ChoiceColumn({
            // Inferred: options not observed on MeeSeva form
            label: 'Applied For',
            mandatory: true,
            choices: {
                self:   { label: 'Self',   sequence: 1 },
                family: { label: 'Family', sequence: 2 },
            },
        }),
    },
})
