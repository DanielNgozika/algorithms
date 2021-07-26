const obj = {
	_prop: "Fisrt Prop",
	_prop2: "Second Prop"
};

console.log(typeof `${JSON.stringify([obj])}`);

const an = "some random shit";

let Obj = {};

function pass() {
	return (Obj = {
		...Obj,
		an
	});
}

pass();

console.log(Obj);
