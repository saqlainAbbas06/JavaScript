// Build a Project Idea Board
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should define an object constant named projectStatus with the three keys: PENDING, SUCCESS, and FAILURE. Each status should be assigned an object with a description key with the value Pending Execution, Executed Successfully, and Execution Failed, respectively.
// You should define a class named ProjectIdea with a constructor that takes title and description as parameters. Initialize the title and description properties with the provided parameters. The class should also have a property named status that is set to the value projectStatus.PENDING by default.
// You should define a method named updateProjectStatus inside the ProjectIdea class. This method should accept a newStatus parameter and update the status property to the given value.
// You should define a ProjectIdeaBoard class with a constructor that accepts a title and initializes an empty array named ideas to hold instances of the ProjectIdea class.
// You should define a method named pin inside the ProjectIdeaBoard class that accepts an instance of the ProjectIdea class and pushes the given instance to the ideas array.
// You should define a method named unpin inside the ProjectIdeaBoard class. This method should accept an instance of the ProjectIdea class and removes it from the ideas array.
// You should define a method named count that returns the number of project ideas in the given ProjectIdeaBoard array.
// You should define a method named formatToString that returns the name of the projects ideas, their description and status in the format:
// Example Code
// <ProjectIdeaBoard title> has <ProjectIdeaBoard count> idea(s)
// <ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
// <ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
// .
// .
// .




const projectStatus = {
  PENDING :{
    description: "Pending Execution"
  },
  SUCCESS :{
    description: "Executed Successfully"
  },
  FAILURE :{
    description: "Execution Failed"
  }
}

class ProjectIdea{
  constructor(title, description){
    this.title =title
    this.description = description
    this.status = projectStatus.PENDING
  }

  updateProjectStatus(newStatus){
    this.status = newStatus
  }

}

class ProjectIdeaBoard{
  constructor(title){
    this.title = title
    this.ideas = []
  }

  pin(ProjectIdea){
    this.ideas.push(ProjectIdea)
  }
  unpin(ProjectIdea){
    this.ideas = this.ideas.filter((project)=>project !==ProjectIdea)
  }

  count(){
    return this.ideas.length
  }

  formatToString(){
  let output = `${this.title} has ${this.count()} idea(s)\n`;
    for (const idea of this.ideas) {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    }
    
    return output;
  }
}