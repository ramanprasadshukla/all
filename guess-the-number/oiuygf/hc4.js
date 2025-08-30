// CRUD  
let employeIDs = [{
  employeName: `Harsh`,
  employeAge: `20`,
  employeDipartment: `navgurukul`,
  employeRole: `student`
}, {
  employeName: `Raman`,
  employeAge: `19`,
  employeDipartment: `navgurukul`,
  employeRole: `Manipulator`
}, {
  employeName: `Kartik`,
  employeAge: `17`,
  employeDipartment: `navgurukul`,
  employeRole: `Student`
}];

while(true){

  // This is for create ID.

  function creatId(name, age, dipartment, role){
    let object = {
      employeName: `${name}`,
      employeAge: `${age}`,
      employeDipartment: `${dipartment}`,
      employeRole: `${role}`
    }
    employeIDs.push(object);
    console.log(`You hired a person.`);
    return employeIDs
  };


  // This is for update ID.
  function updateId(nameInId, updateThing, updateItem){
    for(let i=0; i<employeIDs.length; i++){
      if(employeIDs[i].employeName==nameInId){
        if(updateThing=='employeName'){
          employeIDs[i].employeName = updateItem;
        }else if (updateThing=='employeAge'){
          employeIDs[i].employeAge = updateItem;
        }else if (updateThing=='employeDipartment'){
          employeIDs[i].employeDipartment = updateItem;
        }else if (updateThing=='employeRole'){
          employeIDs[i].employeRole = updateItem;
        }
        console.log(`You updated an Employe's ID.`);
        return employeIDs;
      }
    }
  console.log(`Sorry! your input is not available in this file.`);
  };

  // This is for delete ID.
  function deleteId(name){
    for(let i=0; i<employeIDs.length; i++){
      if (employeIDs[i].employeName ==  name){
        employeIDs.splice(i, 1);
        console.log(`You deleted an Employe's ID.`);
        return employeIDs;
      }
    }
    console.log('Invalid ID name.');
  };

  // Those are for inputs.
  const input = require('readline-sync');
  const choose = input.questionInt(`what do you want - hireID = enter 1, updateID = enter 2, fireID = enter 3, check ID's = enter 4 - `);

  if(choose == 1){
    const name = input.question(`employe's name - `);
    const age = input.questionInt(`employe's age - `);
    const dipartment = input.question(`employe's dipartment - `);
    const role = input.question(`employe's role - `);
    creatId(name, age, dipartment, role);
  }

  else if(choose == 2){
    const nameInId = input.question(`Enter name of the person you want to update (Name's first letter must be capital) - `);
    const updateThing = input.question('which do you want to change in the ID? - ');
    const updateItem = input.question('enter the value you want to place - ');
    updateId(nameInId, updateThing, updateItem);
  }

  else if(choose == 3){
    let employeNamename = input.question(`Enter name you want to delete (Name's first letter must be capital)- `);
    deleteId(employeNamename);
  }

  else if(choose == 4){
    console.log(employeIDs);
  }
}
