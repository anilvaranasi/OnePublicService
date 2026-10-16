import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '1902c80c838c9790b96f6ed0deaad30b': {
                        table: 'sys_embedded_help_role'
                        id: '1902c80c838c9790b96f6ed0deaad30b'
                    }
                    '9d02c80c838c9790b96f6ed0deaad32e': {
                        table: 'sys_embedded_help_role'
                        id: '9d02c80c838c9790b96f6ed0deaad32e'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8e5d48f867934a7c824a2157722b470b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '19012346bf0d43aa8d2204bbe3a15e67'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '5102c80c838c9790b96f6ed0deaad32c'
                        key: {
                            name: 'x_146833_onepubl_0.user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9d02c80c838c9790b96f6ed0deaad307'
                        key: {
                            name: 'x_146833_onepubl_0.admin'
                        }
                    },
                ]
            }
        }
    }
}
