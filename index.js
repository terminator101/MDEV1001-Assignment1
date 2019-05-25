const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Classroom (Building TEXT, Room_number NUMBER, Capacity NUMBER)");
    db.run("CREATE TABLE Department (Dept_name TEXT, Building TEXT, Budget NUMBER");

    db.run("INSERT INTO Classroom VALUES('',,)");
    db.run("INSERT INTO Department VALUES('','',)");
});

db.each("SELECT * FROM Classroom");