import { Getter, GetterTree } from 'vuex';
import { PersonFormState } from './PersonFormState';

export function formData(state: PersonFormState) {
    return state.form;
}
export function isProcessing(state: PersonFormState) {
    return state.isProcessing;
}
export default {
    formData,
    isProcessing,
} as GetterTree<PersonFormState, any>;
