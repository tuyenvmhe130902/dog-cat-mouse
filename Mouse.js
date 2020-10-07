Mouse.js

function Mouse(name) {
	this.name=name;
	this.die =false;
}

Mouse.prototype.die = function() {
	// body...
	this.die = true;
};

module.exports =Mouse ;