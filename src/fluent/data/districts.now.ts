import { Record } from '@servicenow/sdk/core'
import { districtTable } from '../tables/district.now'

// C-07: Telangana district reference data (Observed, MeeSeva registration form).
// 33 districts in the form's order by name. Codes are the form's option values (01–33).
// installMethod 'demo' loads on fresh install only; replace with 'once' when the data
// should also load on upgrade.

const COUNTRY = 'India'
const STATE = 'Telangana'

const districts: { code: string; name: string }[] = [
    { code: '01', name: 'ADILABAD' },
    { code: '02', name: 'MANCHERIAL' },
    { code: '03', name: 'NIRMAL' },
    { code: '04', name: 'KUMURAM BHEEM ASIFABAD' },
    { code: '05', name: 'KARIMNAGAR' },
    { code: '06', name: 'JAGTIAL' },
    { code: '07', name: 'PEDDAPALLI' },
    { code: '08', name: 'RAJANNA SIRCILLA' },
    { code: '09', name: 'NIZAMABAD' },
    { code: '10', name: 'KAMAREDDY' },
    { code: '11', name: 'HANUMAKONDA' },
    { code: '12', name: 'WARANGAL' },
    { code: '13', name: 'JAYASHANKAR BHUPALPALLY' },
    { code: '14', name: 'JANGAON' },
    { code: '15', name: 'MAHABUBABAD' },
    { code: '16', name: 'KHAMMAM' },
    { code: '17', name: 'BHADRADRI KOTHAGUDEM' },
    { code: '18', name: 'MEDAK' },
    { code: '19', name: 'SANGAREDDY' },
    { code: '20', name: 'SIDDIPET' },
    { code: '21', name: 'MAHABUBNAGAR' },
    { code: '22', name: 'WANAPARTHY' },
    { code: '23', name: 'NAGARKURNOOL' },
    { code: '24', name: 'JOGULAMBA GADWAL' },
    { code: '25', name: 'NALGONDA' },
    { code: '26', name: 'SURYAPET' },
    { code: '27', name: 'YADADRI BHUVANAGIRI' },
    { code: '28', name: 'VIKARABAD' },
    { code: '29', name: 'MEDCHAL-MALKAJGIRI' },
    { code: '30', name: 'RANGA REDDY' },
    { code: '31', name: 'HYDERABAD' },
    { code: '32', name: 'MULUGU' },
    { code: '33', name: 'NARAYANPET' },
]

districts.forEach(({ code, name }) => {
    Record({
        $id: `district-ts-${code}`,
        $meta: { installMethod: 'demo' },
        table: 'x_146833_onepubl_0_district',
        data: {
            name,
            code,
            state: STATE,
            country: COUNTRY,
        },
    })
})
