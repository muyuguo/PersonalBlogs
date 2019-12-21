var test = () => {
    this.a = 'hello';
    let a = {
        a: 1,
        b: () => {
            cosnole.log(this.a,a);
        }
    }
}

test();