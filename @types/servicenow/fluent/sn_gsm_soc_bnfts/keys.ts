import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'cb97520977a149ad8abf0c6bd254e5b7'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b22b2a6e286849ecabacc4a76228cdb7'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '031fbc1083449b90b96f6ed0deaad360'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '1f111ae477a842103b35bfa64b5a9967'
                        key: {
                            category: 'sn_gsm_social_benefits_case'
                            prefix: 'SBC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30d241d483c49b90b96f6ed0deaad34f'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                            value: 'true'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30d241d483c49b90b96f6ed0deaad385'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '321f7c1083449b90b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '341fb41083449b90b96f6ed0deaad3e5'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '34d241d483c49b90b96f6ed0deaad350'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38d241d483c49b90b96f6ed0deaad374'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38d241d483c49b90b96f6ed0deaad3ad'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38d241d483c49b90b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38d241d483c49b90b96f6ed0deaad3b5'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                            value: 'false'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a1f7c1083449b90b96f6ed0deaad359'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cd241d483c49b90b96f6ed0deaad36c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                            value: 'false'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cd241d483c49b90b96f6ed0deaad38c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3cd241d483c49b90b96f6ed0deaad3b2'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '511f381083449b90b96f6ed0deaad37a'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '511ff41083449b90b96f6ed0deaad3aa'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'additional_benefits'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '561ff81083449b90b96f6ed0deaad381'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '651f381083449b90b96f6ed0deaad3e5'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '651f781083449b90b96f6ed0deaad37a'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a1f7c1083449b90b96f6ed0deaad30d'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '70d241d483c49b90b96f6ed0deaad34f'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                            value: 'false'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '70d241d483c49b90b96f6ed0deaad38e'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '74d241d483c49b90b96f6ed0deaad3b9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '781fb41083449b90b96f6ed0deaad37b'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d241d483c49b90b96f6ed0deaad370'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d241d483c49b90b96f6ed0deaad374'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d241d483c49b90b96f6ed0deaad3a9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d241d483c49b90b96f6ed0deaad3ad'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                            value: 'true'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d241d483c49b90b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7cd241d483c49b90b96f6ed0deaad375'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cd241d483c49b90b96f6ed0deaad388'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cd241d483c49b90b96f6ed0deaad38c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7cd241d483c49b90b96f6ed0deaad3ae'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d1f781083449b90b96f6ed0deaad3b9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '871fbc1083449b90b96f6ed0deaad333'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '911f381083449b90b96f6ed0deaad328'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '991ff41083449b90b96f6ed0deaad3e8'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a51f381083449b90b96f6ed0deaad399'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a51f781083449b90b96f6ed0deaad31e'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae1f7c1083449b90b96f6ed0deaad32c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b01fb41083449b90b96f6ed0deaad377'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b0d241d483c49b90b96f6ed0deaad38a'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d241d483c49b90b96f6ed0deaad3b5'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d241d483c49b90b96f6ed0deaad3b9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                            value: 'true'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b51f781083449b90b96f6ed0deaad3b3'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d241d483c49b90b96f6ed0deaad36c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d241d483c49b90b96f6ed0deaad370'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d241d483c49b90b96f6ed0deaad374'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d241d483c49b90b96f6ed0deaad3a9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8d241d483c49b90b96f6ed0deaad3ad'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'pre_tax_contributions'
                            value: 'false'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8d241d483c49b90b96f6ed0deaad3ba'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b91fb81083449b90b96f6ed0deaad32a'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bcd241d483c49b90b96f6ed0deaad371'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bcd241d483c49b90b96f6ed0deaad384'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                            value: 'Yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bcd241d483c49b90b96f6ed0deaad388'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bcd241d483c49b90b96f6ed0deaad38c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'applied_for_benefits_past_year'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bcd241d483c49b90b96f6ed0deaad3aa'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca1ff81083449b90b96f6ed0deaad354'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd11ff41083449b90b96f6ed0deaad3e2'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'additional_benefits'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd91f381083449b90b96f6ed0deaad321'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'any_felony_criminal_offense_after_1996'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e51f381083449b90b96f6ed0deaad3d2'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee1f3c1083449b90b96f6ed0deaad3e0'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f0d241d483c49b90b96f6ed0deaad386'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4d241d483c49b90b96f6ed0deaad3b1'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'buying_or_selling_benefits'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4d241d483c49b90b96f6ed0deaad3b5'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                            value: 'true'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4d241d483c49b90b96f6ed0deaad3b9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'sources_of_income'
                            value: 'false'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f51f781083449b90b96f6ed0deaad3e6'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8d241d483c49b90b96f6ed0deaad36c'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                            value: 'true'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8d241d483c49b90b96f6ed0deaad370'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'currently_employed'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8d241d483c49b90b96f6ed0deaad3a9'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f8d241d483c49b90b96f6ed0deaad3b6'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'expenses'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f91fb81083449b90b96f6ed0deaad363'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fcd241d483c49b90b96f6ed0deaad34e'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'assets'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fcd241d483c49b90b96f6ed0deaad36d'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'other_assets'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fcd241d483c49b90b96f6ed0deaad384'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'disability_payments'
                            value: 'No'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fcd241d483c49b90b96f6ed0deaad388'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'childcare_needed'
                            value: 'NULL_OVERRIDE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe1f7c1083449b90b96f6ed0deaad35f'
                        key: {
                            name: 'sn_gsm_social_benefits_case'
                            element: 'receiving_benefits_at_multiple_states_at_one_time'
                        }
                    },
                ]
            }
        }
    }
}
