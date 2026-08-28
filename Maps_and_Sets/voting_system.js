const poll = new Map();

const addOption = (option)=>{
  if(!option){
    return "Option cannot be empty."
  }
  if(poll.has(option)){
    return `Option "${option}" already exists.`
  }

  poll.set(option, new Set());

  return `Option "${option}" added to the poll.`
};

const vote = (option, voterId)=>{
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`
  }

  const voters = poll.get(option);

  if(voters.has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }

  voters.add(voterId);

  return `Voter ${voterId} voted for "${option}".`
};

const displayResults = () =>{
  let results = "Poll Results:";

  for(const [option, voters] of poll){
    results +=`\n${option}: ${voters.size} votes`;
  }
  return results
}

addOption("Turkey")
addOption("Morocco")
console.log(addOption("Eygpt"))
console.log(addOption('Turkey'))

vote("Turkey", "traveler1")
vote("Turkey", "traveler2")
vote("Morocco", "traveler3")