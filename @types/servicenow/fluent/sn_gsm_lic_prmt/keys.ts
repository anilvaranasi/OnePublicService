import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '09c5d3524fde4714b6226aeab5686b42'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7d1742a400794fac81ef5589404b03a5'
                    }
                }
                composite: [
                    {
                        table: 'sys_number'
                        id: '05bdaeb777d83110d381bfa64b5a99cf'
                        key: {
                            category: 'sn_gsm_license_permit_case'
                            prefix: 'LPC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '161601d083489b90b96f6ed0deaad3ec'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e1601d083489b90b96f6ed0deaad383'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24c60d9883489b90b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28c60d9883489b90b96f6ed0deaad394'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a1641d083489b90b96f6ed0deaad364'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34c60d9883489b90b96f6ed0deaad39d'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '38c60d9883489b90b96f6ed0deaad39a'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '4c6e42be434d12109adb38c75bb8f282'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'primary_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d26c5d083489b90b96f6ed0deaad367'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '561601d083489b90b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '64c60d9883489b90b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '692689d083489b90b96f6ed0deaad364'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '782685d083489b90b96f6ed0deaad3b3'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4c60d9883489b90b96f6ed0deaad394'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a92649d083489b90b96f6ed0deaad3d5'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b0c60d9883489b90b96f6ed0deaad39d'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c02681d083489b90b96f6ed0deaad392'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'd47f784943d171109adb38c75bb8f25a'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0c60d9883489b90b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'proof_of_residency'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e4c60d9883489b90b96f6ed0deaad394'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e8c60d9883489b90b96f6ed0deaad395'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'applicant_over_age_18'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f0c60d9883489b90b96f6ed0deaad39d'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f4c60d9883489b90b96f6ed0deaad39e'
                        key: {
                            name: 'sn_gsm_license_permit_case'
                            element: 'has_license_denied'
                        }
                    },
                ]
            }
        }
    }
}
