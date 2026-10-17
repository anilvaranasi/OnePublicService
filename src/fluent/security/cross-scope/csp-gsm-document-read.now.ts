import { CrossScopePrivilege } from '@servicenow/sdk/core'

// F-04: Read access to sn_gsm_document (owned by sn_gsm).
// Required so this app can read document records attached to cases.
CrossScopePrivilege({
    $id: 'csp_gsm_document_read',
    operation: 'read',
    status: 'allowed',
    targetName: 'sn_gsm_document',
    targetScope: 'sn_gsm',
    targetType: 'sys_db_object',
})
