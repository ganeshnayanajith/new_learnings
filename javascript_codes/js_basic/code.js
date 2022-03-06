const testThis = {
    property: "foo",
    logProp: function () {
        const logProp = "bar"
        console.log(this.logProp)
    }
}

testThis.logProp();