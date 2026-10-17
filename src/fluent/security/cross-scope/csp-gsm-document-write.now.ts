import { CrossScopePrivilege } from '@servicenow/sdk/core'

// F-04: Write access to sn_gsm_document (owned by sn_gsm).
// Required so this app can create document records when citizens upload files.
CrossScopePrivilege({
    $id: 'csp_gsm_document_write',
    operation: 'write',
    status: 'allowed',
    targetName: 'sn_gsm_document',
    targetScope: 'sn_gsm',
    targetType: 'sys_db_object',
})
