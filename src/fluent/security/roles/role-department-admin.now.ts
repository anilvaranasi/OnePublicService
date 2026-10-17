import { Role } from '@servicenow/sdk/core'

// F-05: Department admin — department head or configurer who manages agent work and views reports.
// Contains sn_gsm.government_service_manager and sn_gsm.report_viewer.
// Note: sn_gsm.government_service_manager inherits ~94 roles on DEV (Confirmed). Review before
// granting this role broadly. Inferred mapping — validate against the department admin use cases.
export const departmentAdmin = Role({
    name: 'x_146833_onepubl_0.department_admin',
    description: 'Department head or configurer. Manages officer work and views service reports.',
    containsRoles: ['sn_gsm.government_service_manager', 'sn_gsm.report_viewer'],
})
