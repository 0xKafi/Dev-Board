document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = "./blog.html"
})
document.getElementById("clear-log").addEventListener("click", function(){
    const activityLog = document.getElementById("activity-log");
    activityLog.innerHTML = "";
})

// time & date
const date = new Date();
const weekName = date.toLocaleDateString('en-US', { weekday: 'short' });
document.getElementById("week").innerText = weekName;

const dateMY = date.toLocaleDateString('en-US', {month: 'short' , day: 'numeric',  year: 'numeric' });

document.getElementById("date-m-y").innerText = dateMY;


// color button

const themeBtn = document.getElementById("theme-btn");

let varColor = '[#F4F7FF]';
themeBtn.addEventListener("click", function(){
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
    
    let randomColor = getRandomColor();
    console.log(randomColor)
    const body = document.querySelector("body");
    body.classList.remove("bg-" + varColor);
    body.classList.add("bg-" + "[" + randomColor +"]");
    varColor = "[" + randomColor + "]";

})

// completed button
const btns = document.querySelectorAll(".completed-btn");

for(const btn of btns){
    btn.addEventListener("click", function(event){
        if(btn.classList[btn.classList.length-1] != "disabled"){
            alert("Board updated successfully");
            const textTitle = ("title" + btn.id)
            const title = document.getElementById(textTitle);
            btn.classList.add("disabled");
            btn.style.backgroundColor = "gray";

            const pTag = document.createElement("p");
            pTag.className += "bg-[#F4F7FF] p-2  text-xs rounded-lg mb-2";

            let time = new Date().toLocaleTimeString();
            pTag.innerText = `You have Complete The Task ${title.innerText} at ${time}`;

            const activityLog = document.getElementById("activity-log");
            activityLog.appendChild(pTag);

            const taskAssign = document.getElementById("task-num");
            let taskNum = parseInt(taskAssign.innerText);

            taskAssign.innerText = taskNum - 1;

            const completedTask = document.getElementById("completed-task");
            let comTaskNum = parseInt(completedTask.innerText);

            completedTask.innerText = comTaskNum + 1;

            if(taskAssign.innerText === "0"){
                alert("congrats!! you have completed all the current task");
            }
        }
    })
}
