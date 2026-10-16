import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '316abe3a319b4fde84ce862881e1eed9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd91293499d484d0ebdfca025766d6536'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '00fc14cc8380d790b96f6ed0deaad3ea'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'created_install_base_items'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03bf30d483449b90b96f6ed0deaad338'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'pace_execution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '064e898773f330109edbc1f52ff6a72a'
                        key: {
                            category: 'sn_gsm_government_service_case'
                            prefix: 'GOVCS'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08fc54cc8380d790b96f6ed0deaad316'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'created_install_base_items'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0925e4088308d790b96f6ed0deaad33d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10fc54cc8380d790b96f6ed0deaad373'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'decision_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1125e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'it'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14fc54cc8380d790b96f6ed0deaad38c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'decision_reason'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1525e4088308d790b96f6ed0deaad37b'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1525e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'ar'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1525e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'pl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '176039fe0162c650f877c6af1d956e86'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: {
                                id: 'e2cfa93e0162c650f877c6af1d956ee1'
                                key: {
                                    name: 'sn_gsm.service_definition_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1925e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'nl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1925e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'es'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d25e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'fq'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d25e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1eecdc8c8380d790b96f6ed0deaad31d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applied_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '20bcafdf77320210b116c35b8c5a99fd'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: '8486db68dfdb4cd188d2e61369175840'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2125e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'it'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '224a238a73a101109edbc1f52ff6a7a3'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: 'b523f1d037001300a213a7f07e41f15b'
                                key: {
                                    name: 'interaction_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23dc948c8380d790b96f6ed0deaad3cc'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2525e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'ar'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2525e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'pl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '26b7a9467719421034ffc35b8c5a99b5'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: '01ff8f5a73da4bb584e5c1ce518686d6'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '2781d588a08a1110f8770ea6955038ec'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: 'e3fc85c0a08a1110f8770ea6955038bd'
                                key: {
                                    name: 'sn_gsm.contributor_editor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27dc948c8380d790b96f6ed0deaad3e6'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'deadline'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2925e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'nl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2925e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'es'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2bdc948c8380d790b96f6ed0deaad3d0'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cfc54cc8380d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'disclaimer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d25e4088308d790b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d25e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'fq'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d25e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ddc908c8380d790b96f6ed0deaad31f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '312528088308d790b96f6ed0deaad340'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '312528088308d790b96f6ed0deaad35d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '314c2fca73a101109edbc1f52ff6a77d'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: {
                                id: '9c8a51ccb71101109edb2fe4ae11a93e'
                                key: {
                                    name: 'sn_gsm.constituent_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31ec5c8c8380d790b96f6ed0deaad323'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33ecd0cc8380d790b96f6ed0deaad3fa'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '34ace5295311011031cdddeeff7b12cc'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: 'a3c20ae3c303120095ccd02422d3ae8f'
                                key: {
                                    name: 'sn_customerservice.consumer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '352528088308d790b96f6ed0deaad35d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            value: '5'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35ec1c8c8380d790b96f6ed0deaad3e5'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36fc98cc8380d790b96f6ed0deaad361'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '374d3935731101109edbc1f52ff6a735'
                        key: {
                            name: 'sn_gsm.constituent_agent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38fc94cc8380d790b96f6ed0deaad3a2'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'fee_waiver_justification'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39fc18cc8380d790b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'on_behalf_of_someone'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '3cbf4b165321011031cdddeeff7b1238'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: 'de6501825321011031cdddeeff7b122c'
                                key: {
                                    name: 'sn_gsm.case_write_granular'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cfc94cc8380d790b96f6ed0deaad3da'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'fee_waiver_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d2528088308d790b96f6ed0deaad347'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3de341ddc3150110bfff30c9a540dd0a'
                        key: {
                            name: 'sn_gsm.report_viewer'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '41bf4b165321011031cdddeeff7b1255'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: '8a62fa525361011031cdddeeff7b1214'
                                key: {
                                    name: 'sn_gsm.service_received_read_granular'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42ec9c8c8380d790b96f6ed0deaad3ad'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '438835e284c84841b2e483da8697ef8a'
                        key: {
                            name: 'sn_gsm_document'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '43f8ed8a7719421034ffc35b8c5a9955'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: '79b1d4c7136e437dbbd39cc58833f812'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '44796d4e7719421034ffc35b8c5a99cd'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: '233ed6480f9c43889e772a2258615e8d'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4525e4088308d790b96f6ed0deaad375'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'primary_purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4925e4088308d790b96f6ed0deaad342'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'primary_purpose'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5125e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'ja'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5187a5467719421034ffc35b8c5a9975'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: '364c3e14d15f47458eb67bd527ec3378'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '51e1a7a5eb11011074de807538522842'
                        key: {
                            role: {
                                id: '6331a365eb11011074de807538522817'
                                key: {
                                    name: 'sn_gsm.constituent_contributor'
                                }
                            }
                            contains: {
                                id: '88a1ef25eb11011074de8075385228a4'
                                key: {
                                    name: 'sn_gsm.contributor_creator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51fcd4cc8380d790b96f6ed0deaad3c8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5525e4088308d790b96f6ed0deaad377'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5525e4088308d790b96f6ed0deaad37b'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5525e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'pb'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5525e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'pt'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5925e4088308d790b96f6ed0deaad37c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5925e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'et'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5925e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'sv'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5be9e1427759421034ffc35b8c5a996c'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: '087226c8f34248e9b8d18c888e9200b1'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5cbcafdf77320210b116c35b8c5a9947'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: 'cb8cb5c4c384413aba6e33c036c9fe15'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cfc54cc8380d790b96f6ed0deaad3d6'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'disclaimer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d0d900083c0d790b96f6ed0deaad3b3'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'total_fees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d25e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'de'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5d89af65ad153510f8776dc6bbede591'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: {
                                id: 'b8051a7e539111108342ddeeff7b120f'
                                key: {
                                    name: 'sn_csm_case_types.service_definition_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5dfcd4cc8380d790b96f6ed0deaad3da'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5fff0508a08a1110f8770ea69550389b'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: '3ad0d7fb0f8210105bc5e7b1d4767e6a'
                                key: {
                                    name: 'sn_customerservice.case_task_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6125e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'ja'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6331a365eb11011074de807538522817'
                        key: {
                            name: 'sn_gsm.constituent_contributor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63fc5ccc8380d790b96f6ed0deaad30f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '63ff0508a08a1110f8770ea6955038fa'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: '4f2c23615341011031cdddeeff7b12bb'
                                key: {
                                    name: 'sn_gsm.case_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6525e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'pb'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6525e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'pt'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '6542ba525361011031cdddeeff7b12e9'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: '7ae4bc6a53723010e37dddeeff7b12ca'
                                key: {
                                    name: 'sn_install_base.sold_product_authorized_consumer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '67dc948c8380d790b96f6ed0deaad38a'
                        key: {
                            name: 'sn_gsm_document'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6925e4088308d790b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6925e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'et'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6925e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'sv'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69fc18cc8380d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'on_behalf_of'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '6b06df5e7df70910f877f75c3e434f67'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: {
                                id: '259e90f6c3223100d6d210c422d3aefb'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '6b95a3f877a5021034ffc35b8c5a99fa'
                        key: {
                            role: {
                                id: '3de341ddc3150110bfff30c9a540dd0a'
                                key: {
                                    name: 'sn_gsm.report_viewer'
                                }
                            }
                            contains: '7a90528907bd4f13af31ba7a764275a3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bdc948c8380d790b96f6ed0deaad3d4'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'letter_date'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6c5c61295311011031cdddeeff7b120e'
                        key: {
                            name: 'sn_gsm.constituent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d25e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'de'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '712528088308d790b96f6ed0deaad359'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '712528088308d790b96f6ed0deaad35d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72ec10cc8380d790b96f6ed0deaad3b9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'benefit_summary'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '73e90170535d0210e064ddeeff7b1277'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: '0e0a7c0fc3b530109956db85a840dd4d'
                                key: {
                                    name: 'sn_doc_processor.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73ec14cc8380d790b96f6ed0deaad31a'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '73ff0508a08a1110f8770ea6955038fe'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: '9df9d98cb71101109edb2fe4ae11a956'
                                key: {
                                    name: 'sn_gsm.constituent_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '748d738117d44a83aef817210aa58273'
                        key: {
                            name: 'sn_gsm_government_service_case'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7605acb75385011031cdddeeff7b1297'
                        key: {
                            name: 'sn_gsm.government_service_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76fc98cc8380d790b96f6ed0deaad3a6'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'primary_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d2528088308d790b96f6ed0deaad343'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d2528088308d790b96f6ed0deaad347'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7d2528088308d790b96f6ed0deaad355'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '803b7142736001109edbc1f52ff6a7ee'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83bffc9483449b90b96f6ed0deaad3b0'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'pace_execution'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '84ba22c7cc333210f8773d0a4af3cf10'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: '3fa489c1009f5210f877fae05fdb1712'
                                key: {
                                    name: 'sn_doc_processor.external_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8525e4088308d790b96f6ed0deaad33d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86ec9c8c8380d790b96f6ed0deaad387'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86ec9c8c8380d790b96f6ed0deaad3b3'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8925e4088308d790b96f6ed0deaad342'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'primary_purpose'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8eec9c8c8380d790b96f6ed0deaad35a'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9125e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'ko'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9125e4088308d790b96f6ed0deaad394'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '916138fb538622107b8bddeeff7b127a'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: {
                                id: 'e2a93a12530622107b8bddeeff7b1251'
                                key: {
                                    name: 'sn_gsm.pace_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91fcd4cc8380d790b96f6ed0deaad3b5'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9525e4088308d790b96f6ed0deaad377'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9525e4088308d790b96f6ed0deaad37b'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'any_difficulty_getting_to_our_office_if_needed'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9525e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'zh'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9525e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'xl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95dc908c8380d790b96f6ed0deaad301'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '963d6b1377720210b116c35b8c5a9973'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: 'a8e1981fb07d4177a80ea53df3413f85'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9706af24eb01011079f98075385228d0'
                        key: {
                            name: 'sn_gsm.admin'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9925e4088308d790b96f6ed0deaad378'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9925e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'fi'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9925e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'th'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '99edfd35731101109edbc1f52ff6a7dc'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: 'b2638ae3c303120095ccd02422d3ae55'
                                key: {
                                    name: 'sn_customerservice.consumer_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9aec9c8c8380d790b96f6ed0deaad3eb'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d25e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'he'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'a00a8170535d0210e064ddeeff7b129a'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: '0e0a7c0fc3b530109956db85a840dd4d'
                                key: {
                                    name: 'sn_doc_processor.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a125e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'ko'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'a390c297732001109edbc1f52ff6a72b'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'sold_product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3dc948c8380d790b96f6ed0deaad3d6'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'letter_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3dc948c8380d790b96f6ed0deaad3e5'
                        key: {
                            name: 'sn_gsm_document'
                            element: 'deadline'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a525e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'zh'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a525e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'xl'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a925e4088308d790b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a925e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'fi'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a925e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'th'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ad19ed8a7719421034ffc35b8c5a9958'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: 'dc12bbb7b7e2434394f37632d6b002af'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad25e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'he'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0fc94cc8380d790b96f6ed0deaad37c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'fee_waiver'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b12528088308d790b96f6ed0deaad345'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b12528088308d790b96f6ed0deaad359'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b12528088308d790b96f6ed0deaad35d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2ec10cc8380d790b96f6ed0deaad3d9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'benefit_summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b52528088308d790b96f6ed0deaad35a'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5ec5c8c8380d790b96f6ed0deaad342'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b5f0b9fe0162c650f877c6af1d956eb5'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: {
                                id: '69ff6dbe0162c650f877c6af1d956ea0'
                                key: {
                                    name: 'sn_gsm.service_definition_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b68c3ec1777791109b1abfa64b5a99b5'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: 'ba5de7394f211110ec9d07905e72e0b6'
                                key: {
                                    name: 'sn_install_base.install_base_authorized_consumer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'bd21841473d001109edbc1f52ff6a799'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd2528088308d790b96f6ed0deaad33f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd2528088308d790b96f6ed0deaad343'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd2528088308d790b96f6ed0deaad347'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'bd4c2fca73a101109edbc1f52ff6a780'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdfc18cc8380d790b96f6ed0deaad3b8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'on_behalf_of_someone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'be4aa38a73a101109edbc1f52ff6a78d'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: '6f7ca7615341011031cdddeeff7b121d'
                                key: {
                                    name: 'sn_gsm.case_writer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c525e4088308d790b96f6ed0deaad33d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c925e4088308d790b96f6ed0deaad33e'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'caec9c8c8380d790b96f6ed0deaad38d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd0c1af42739101109edbc1f52ff6a7d1'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: '3de341ddc3150110bfff30c9a540dd0a'
                                key: {
                                    name: 'sn_gsm.report_viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0fc54cc8380d790b96f6ed0deaad39f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'decision_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd125e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'en'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd125e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'nb'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1fcd4cc8380d790b96f6ed0deaad3fa'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd2f9a64fe821cf10f877ea209ce21116'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: '583abc0fc3b530109956db85a840dd97'
                                key: {
                                    name: 'sn_doc_processor.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd41617527d3b0910f877f75c3e434f59'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: {
                                id: '91288d757d338510f877f75c3e434fd2'
                                key: {
                                    name: 'sn_gsm.business_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd525e4088308d790b96f6ed0deaad377'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_assistance'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd525e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'cs'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd525e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'ru'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd63d6b1377720210b116c35b8c5a99c7'
                        key: {
                            role: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                            contains: '21913590e19d4ad1bfe44d8f3c442731'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd925e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'fr'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd925e4088308d790b96f6ed0deaad380'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'tr'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcfc54cc8380d790b96f6ed0deaad385'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'decision_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd0d900083c0d790b96f6ed0deaad36f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'total_fees'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd25e4088308d790b96f6ed0deaad37f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_for_written_communication'
                            value: 'hu'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dddc508c8380d790b96f6ed0deaad3fc'
                        key: {
                            name: 'sn_gsm_government_service_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'deec9c8c8380d790b96f6ed0deaad3f1'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applied_date'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e07ef375731101109edbc1f52ff6a756'
                        key: {
                            role: {
                                id: '374d3935731101109edbc1f52ff6a735'
                                key: {
                                    name: 'sn_gsm.constituent_agent'
                                }
                            }
                            contains: {
                                id: 'b44add8cb71101109edb2fe4ae11a957'
                                key: {
                                    name: 'sn_gsm.constituent_writer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e125e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'en'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e125e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'nb'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1fc18cc8380d790b96f6ed0deaad393'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'on_behalf_of'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e2d22f29eb11011074de807538522816'
                        key: {
                            role: {
                                id: '6331a365eb11011074de807538522817'
                                key: {
                                    name: 'sn_gsm.constituent_contributor'
                                }
                            }
                            contains: {
                                id: '86dafa09b31a1010a9dce6e316a8dcf2'
                                key: {
                                    name: 'sn_customerservice.consumer_contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e525e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'cs'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e525e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'ru'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'e64e1afa73d101109edbc1f52ff6a77c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'subcategory'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'e7ba523a73d101109edbc1f52ff6a72f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7fc5ccc8380d790b96f6ed0deaad384'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e925e4088308d790b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e925e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'fr'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e925e4088308d790b96f6ed0deaad3e9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'tr'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e925e4088308d790b96f6ed0deaad3f0'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ead488ba5361011031cdddeeff7b1244'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: {
                                id: '7605acb75385011031cdddeeff7b1297'
                                key: {
                                    name: 'sn_gsm.government_service_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebfc1ccc8380d790b96f6ed0deaad3c9'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebfc5ccc8380d790b96f6ed0deaad3bc'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ec29ed8a7719421034ffc35b8c5a995c'
                        key: {
                            role: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                            contains: '23d7d9e74c1749359277085f72b674f0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ed25e4088308d790b96f6ed0deaad3e4'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'contact_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed25e4088308d790b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'language_spoken_at_home'
                            value: 'hu'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f00d500083c0d790b96f6ed0deaad397'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'submission_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'f0c085fee0d84310f8779b4cd0fbfe2a'
                        key: {
                            role: {
                                id: '6c5c61295311011031cdddeeff7b120e'
                                key: {
                                    name: 'sn_gsm.constituent'
                                }
                            }
                            contains: {
                                id: 'aa34d7e5a95ccb10f877c98bde71d259'
                                key: {
                                    name: 'sn_gsm.esm_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0fc94cc8380d790b96f6ed0deaad39c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'fee_waiver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f12528088308d790b96f6ed0deaad341'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f12528088308d790b96f6ed0deaad359'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'applicant_type'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f12528088308d790b96f6ed0deaad35d'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'f20836f943a031109adb38c75bb8f29b'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2fc98cc8380d790b96f6ed0deaad374'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f80d500083c0d790b96f6ed0deaad36a'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'submission_date'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f89f0984a08a1110f8770ea6955038cc'
                        key: {
                            name: 'sn_gsm.case_task_agent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9ec5c8c8380d790b96f6ed0deaad31c'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'a_need_for_an_interpreter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd2528088308d790b96f6ed0deaad33f'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'preferred_communication_method'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd2528088308d790b96f6ed0deaad343'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'relation_to_applicant'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd2528088308d790b96f6ed0deaad347'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'application_status'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fd2528088308d790b96f6ed0deaad35e'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'requester_type'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'fd7b4c27733730109edbc1f52ff6a7b0'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'fdd7ad467719421034ffc35b8c5a996b'
                        key: {
                            role: {
                                id: '9706af24eb01011079f98075385228d0'
                                key: {
                                    name: 'sn_gsm.admin'
                                }
                            }
                            contains: 'ed11a21136e741119c971b211913e6eb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fefc98cc8380d790b96f6ed0deaad386'
                        key: {
                            name: 'sn_gsm_government_service_case'
                            element: 'primary_purpose'
                        }
                    },
                ]
            }
        }
    }
}
