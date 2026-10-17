import { CrossScopePrivilege } from '@servicenow/sdk/core'

// F-04: Write access to sn_gsm_government_service_case (owned by sn_gsm).
// Required so this app's flows and business rules can create and update case records.
CrossScopePrivilege({
    $id: 'csp_gsm_case_write',
    operation: 'write',
    status: 'allowed',
    targetName: 'sn_gsm_government_service_case',
    targetScope: 'sn_gsm',
    targetType: 'sys_db_object',
})
