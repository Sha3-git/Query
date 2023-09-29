//sample datastructure 
const data = [
    {
        title: 'Question 1',
        description: 'This is a sample quesion description wthat will be displayed in the jumbotron with array render cut off for character limit.',
        username: 'person1',
        answerGUID: [1, 2], //this will be replaceds with array guid that points to answer model 
        date: '11-5-3333',
    },
    {
        title: 'Question 2',
        description: 'This is a sample quesion description wthat will be displayed in the jumbotron with array render cut off for character limit.',
        username: 'person2',
        answerGUID: [0, 1, 2], //this will be replaceds with a guid that points to answer model 
        date: '13-6-1987',
    },
    {
        title: 'Question 3',
        description: 'This is a sample quesion description wthat will be displayed in the jumbotron with a render cut off for character limit.',
        username: 'person3',
        answerGUID: [1, 2], //this will be replaceds with a guid that points to answer model 
        date: '1-12-2045',
    },
    {
        title: 'Question 4',
        description: 'This is a sample quesion description wthat will be displayed in the jumbotron with a render cut off for character limit.',
        username: 'person4',
        answerGUID: [0, 2], //this will be replaceds with array guid that points to answer model 
        date: '20-9-2015',
    },
    {
        title: 'Question 5',
        description: 'This is a sample quesion description wthat will be displayed in the jumbotron with array render cut off for character limit.',
        username: 'person5',
        answerGUID: [1, 2], //this will be replaceds with array guid that points to answer model 
        date: '22-6-1123',
    },
]
const answer = [
    {
        username: 'answerer1',
        upvotes: 10,
        downvotes: 10,
        description: 'This is a sample answer to the above question.',
        date: '20-12-2015',
    },
    {
        username: 'answerer2',
        upvotes: 11,
        downvotes: 5,
        description: 'This is a sample answer to the above question.',
        date: '20-12-2015',
    },
    {
        username: 'answerer3',
        upvotes: 11,
        downvotes: 5,
        description: 'This is a sample answer to the above question.',
        date: '20-12-2015',
    }
]
//need to add functionality later where i CLICK A BUTTON TO SEE QUESTION DETAILS PAGE OR ADD UPVOTE FUNCTIONALITY  (AUGGHHHHHHHH)
//tis good enough for now
document.addEventListener("DOMContentLoaded", () => {

    var questionSection = document.getElementById("questions")
    console.log(questionSection)

    var questions = data.map((p, index) => {

        var answerGroup = '';
        //Code logic here is that i am going to my array of guids (i did some cleeeen code tho)
        //each index has a guid 
        //replace the variable elements by finding answer with the guid or in this case at said index as we temporarily use array placeholders
        //then we extract the data from the answer object at the specified index which will be updated to guids later on
        //for example we could say
        //for loop:
        //var result = answer.findbyID(id: answerGuid[i])
        //use result[0].username and so on
        for (var i = 0; i < p.answerGUID.length; i++) {
            answerGroup += `
            <div class="row user-info">
            <img class="user-icon" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" /> ${answer[p.answerGUID[i]].username}
            • ${answer[p.answerGUID[i]].date}
        </div>
        <div class="answers">
            <p> ${answer[p.answerGUID[i]].description} </p>
            <span class="material-symbols-outlined right-arrow">
                arrow_upward
            </span>
            ${answer[p.answerGUID[i]].upvotes - answer[p.answerGUID[i]].downvotes}
            <span class="material-symbols-outlined">
                arrow_downward
            </span>
        </div>
            `
        }


        return `
        <button class="accordion" onClick="accordionExpand(${index})">
        <b>${p.title}</b> 
        <span class="material-symbols-outlined acc-drop">
            arrow_drop_down
            </span>
    </button>
    <div class="panel">
        <p class="date">created at ${p.date}</p>
        <p>${p.description}</p>
        <h4>Answers</h4>
        <hr />
        ${answerGroup}
    </div>
        `
    })
    questionSection.innerHTML = questions.join('');
    console.log(data.map((p) => { }));

});

function accordionExpand(index) {
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        console.log(panel.style.display);
        if (i === index) {
            acc[i].classList.toggle("active");
            if (panel.style.display === "block" || panel.style.display === null) {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        } else {
            // Close other panels
            acc[i].classList.remove("active");
            panel.style.display = "none";
        }
    }
}
//logic load the back end first
//once promised data is resolved
//update the front end with the data
//while data is loading either set load buffer or maybe i can implement a simple loading placeholder (if time permits)





const dropContainer = document.getElementById("dropcontainer")
const fileInput = document.getElementById("images")

dropContainer.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault()
}, false)

dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active")
})

dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    dropContainer.classList.remove("drag-active")
    fileInput.files = e.dataTransfer.files
})