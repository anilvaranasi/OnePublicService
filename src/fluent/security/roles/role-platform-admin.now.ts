import { Role } from '@servicenow/sdk/core'

// F-05: Platform admin — platform team with delegated administration of the OnePublicService app.
// Contains sn_gsm.admin (PSDS admin) and x_146833_onepubl_0.admin (app-scoped admin, generated role).
export const platformAdmin = Role({
    name: 'x_146833_onepubl_0.platform_admin',
    description: 'Platform team administrator. Full delegated admin for OnePublicService and PSDS.',
    containsRoles: ['sn_gsm.admin', 'x_146833_onepubl_0.admin'],
})
