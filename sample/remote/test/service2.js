// remote service

module.exports = function(context) {
	return new TestRemote(context);
};

class BaseRemote {
    constructor(context) {
        this.context = context;
    }

    __clazz() {
        return true;
    }
}

class TestRemote extends BaseRemote {
    constructor(context) {
        super(context);
    }

    async echo (msg, data) {
        return msg;
    }
}
