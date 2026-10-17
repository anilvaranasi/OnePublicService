import { CrossScopePrivilege } from '@servicenow/sdk/core'

// F-04: Read access to sn_gsm_government_service_case (owned by sn_gsm).
// Required so this app's flows, scripts and portal widgets can read case records.
CrossScopePrivilege({
    $id: 'csp_gsm_case_read',
    operation: 'read',
    status: 'allowed',
    targetName: 'sn_gsm_government_service_case',
    targetScope: 'sn_gsm',
    targetType: 'sys_db_object',
})
