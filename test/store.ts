import { observable, action } from 'mobx';

class ToogleStore {
    @observable public toogle = 0;

    @action.bound
    public handleToggle() {
        this.toogle = +!this.toogle;
    }
}

export default new ToogleStore();
