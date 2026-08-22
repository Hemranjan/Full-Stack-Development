const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,

    getAvg() {
        console.log(this);

        let avg = (this.eng + this.math + this.phy) / 3;

        console.log(`${this.name} got avg mars = ${avg}`);
    }
};

function getAvg() {  //Window object shows in this case as a global object beacuse in this no object is declared.
    console.log(this);
}