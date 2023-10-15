console.log(global);
let arrow = {
    name :'kim',
    hi1 : function() {
        console.log(`outer => ${this.name}님이 인사합니다.`);
        let hi3 = () => {
            console.log(this);
            console.log(`inner => ${this.name}님이 인사합니다.`);
        }
        hi3();
    },
    hi2 : () => {
        console.log(this);
        console.log(`${this.name}님이 인사합니다.`);
    }, 
}

function add(){
    console.log(`add => ${this}`, this);
}
let add2 = () => {
    console.log(`add2 => ${this}`, this);
}

add();
add2();

arrow.hi1();
arrow.hi2();