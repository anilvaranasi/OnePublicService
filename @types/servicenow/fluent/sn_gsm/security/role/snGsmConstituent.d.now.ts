import { Role } from '@servicenow/sdk/core'

export const snGsmConstituent = Role({
    name: 'sn_gsm.constituent',
    description:
        'This is an end user requestor role which gives constituents the ability to request for services and manage their information including government service cases and service received.',
    federatedId: 'RIY4fhE8WYhuAiZUvfz0KFpFi6pFcK3/3LPZ2zbYUNM=',
    containsRoles: [
        'sn_customerservice.consumer',
        'sn_gsm.case_write_granular',
        'sn_gsm.service_received_read_granular',
        'sn_install_base.sold_product_authorized_consumer',
        'sn_doc_processor.external_user',
        'sn_install_base.install_base_authorized_consumer',
        'sn_doc_processor.viewer',
        'sn_gsm.esm_user',
    ],
})
