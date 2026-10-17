import { Table, StringColumn } from '@servicenow/sdk/core'

// Phase 0.3 smoke test: confirms the build accepts a table that extends the
// PSDS Core case table (sn_gsm). To be removed once the result is recorded.
export const x_146833_onepubl_0_smoke_case = Table({
    name: 'x_146833_onepubl_0_smoke_case',
    label: 'Smoke Test Case',
    extends: 'sn_gsm_government_service_case',
    schema: {
        smoke_note: StringColumn({ label: 'Smoke note' }),
    },
})
