import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'fb6078a9f2d1408fbc01a909ec603bda'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1363bcc1ee604f8eb906d579249fc4e7'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '07f3411483089b90b96f6ed0deaad3f9'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16f3cdd083089b90b96f6ed0deaad38d'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '1c3c32a9771521109b1abfa64b5a9989'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'closed_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22f3011483089b90b96f6ed0deaad35a'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'expedited_processing_justification'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '36c5d81a771121109b1abfa64b5a990e'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36f3011483089b90b96f6ed0deaad3c3'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'expedited_processing_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '3ddc60d853612110e064ddeeff7b1261'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'requester_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ef3411483089b90b96f6ed0deaad370'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bf3811483089b90b96f6ed0deaad343'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'no_exemption_code_applicable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4e77286896514cdaaa3cd4f02d6c54c2'
                        key: {
                            name: 'sn_gsm_information_request_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52f3cdd083089b90b96f6ed0deaad3a0'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'estimated_fees'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57f3811483089b90b96f6ed0deaad3b3'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'sn_gsm_info_req_approved_document_versions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ff3811483089b90b96f6ed0deaad362'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'sn_gsm_info_req_approved_document_versions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66f3011483089b90b96f6ed0deaad309'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'estimated_fees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '6ab34d0153b12110e064ddeeff7b1206'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71f38dd083089b90b96f6ed0deaad326'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72f3011483089b90b96f6ed0deaad3d6'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'fees_willing_to_pay'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '7322d1f253a52110e064ddeeff7b1222'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7af3411483089b90b96f6ed0deaad30d'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'fees_willing_to_pay'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83f3411483089b90b96f6ed0deaad377'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '8b83cbf543e031109adb38c75bb8f2a8'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bf3411483089b90b96f6ed0deaad3ff'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'no_exemption_code_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '943c32a9771521109b1abfa64b5a997e'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '98b92d8b53612110e064ddeeff7b1239'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'preferred_communication_method'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aaf3011483089b90b96f6ed0deaad353'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'expedited_processing'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6f3411483089b90b96f6ed0deaad320'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b9f38dd083089b90b96f6ed0deaad31e'
                        key: {
                            name: 'sn_gsm_information_request_case'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'c481151f772021109b1abfa64b5a9994'
                        key: {
                            category: 'sn_gsm_information_request_case'
                            prefix: 'IRC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'caf38dd083089b90b96f6ed0deaad3aa'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'd03c32a9771521109b1abfa64b5a9964'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'resolved_by'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'd43c32a9771521109b1abfa64b5a9972'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'closed_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'def3cdd083089b90b96f6ed0deaad324'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'eac2559d777121102324fd708e5a9948'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eaf3011483089b90b96f6ed0deaad30f'
                        key: {
                            name: 'sn_gsm_information_request_case'
                            element: 'expedited_processing'
                        }
                    },
                ]
            }
        }
    }
}
