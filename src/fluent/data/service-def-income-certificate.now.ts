import { Record } from '@servicenow/sdk/core'

// F-08: Income Certificate service definition.
// One sn_case_type_selection record that registers Income Certificate as a service
// using the Core government service case table (archetype A, Revenue).
// Confirmed fields from the "Government Service Case" core record:
//   service_type: 3  (Confirmed, Core export)
//   playbook_record_generator: blank  (Confirmed, Core-table case types have this blank)
//   table: sn_gsm_government_service_case  (Confirmed)
// service_code 806 is the MeeSeva reference code (Observed). It is stored in the
// description field here because sn_case_type_selection has no dedicated code column.
// The id field is blank on all Core-table case types (Confirmed, Core export).
Record({
    $id: 'service-def-income-certificate',
    table: 'sn_case_type_selection',
    data: {
        name: 'Income Certificate',
        table: 'sn_gsm_government_service_case',
        active: true,
        service_type: '3',
        playbook_record_generator: '',
        description: 'Revenue department — Income Certificate (MeeSeva service code 806). Archetype A.',
        use_service_catalog_item: false,
        order: '100',
    },
})
