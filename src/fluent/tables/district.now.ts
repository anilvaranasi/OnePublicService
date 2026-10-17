import { Table, StringColumn } from '@servicenow/sdk/core'

// C-07: Geography reference — Telangana district list.
// A simple lookup table. Records are seeded in data/districts.now.ts.
// Mandal (sub-district) is deferred to a later phase — it is not on the registration form
// observed on MeeSeva (Observed). The table is extensible so Mandal can be added as a
// child table later without a schema change here.
export const x_146833_onepubl_0_district = Table({
    name: 'x_146833_onepubl_0_district',
    label: 'District',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
        }),
        code: StringColumn({
            label: 'Code',
            maxLength: 10,
        }),
        state: StringColumn({
            label: 'State',
            maxLength: 100,
        }),
        country: StringColumn({
            label: 'Country',
            maxLength: 100,
        }),
    },
})
