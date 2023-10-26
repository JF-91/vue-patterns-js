
class SinglentonClass {
    constructor(){
        if (SinglentonClass.instance) {
            return SinglentonClass.instance;
        }else {
            SinglentonClass.instance = this;
        }
        return this;
    }
}

export default SinglentonClass;