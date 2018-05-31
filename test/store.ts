import { observable, action } from 'mobx';

class ToggleStore {
    @observable public toggle = 0;

    @action.bound
    public handleToggle() {
        this.toggle = +!this.toggle;
    }
}

export default new ToggleStore();
