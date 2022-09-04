import { shallowRef } from "vue";
import { getApplication } from "../../api/api";


export const useApplication = () => {

    const applications = shallowRef<IApplication[]>([])

    
    const getApplications = (id: string | string[]) => {
        return getApplication(id.toString()).then(res => {
            applications.value = res.results;
        })
    }

    return { applications, getApplications }
}