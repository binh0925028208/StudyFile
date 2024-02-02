"use strict";
function getAllItems(tableName) {
    const entities = JSON.parse(localStorage.getItem(tableName)) || [];
    return entities;
}
function deleteItemById(tableName, id) {
    try {
        const entities = JSON.parse(localStorage.getItem(tableName)) || [];
        let delIndex = -1;
        for (let i = 0; i < entities.length; i++) {
            const _entity = entities[i];
            if (_entity.id == id) {
                delIndex = i;
            }
        }
        if (delIndex != -1) {
            entities.splice(delIndex, 1);
            localStorage.setItem(tableName, JSON.stringify(entities));
        }
        return true;
    }
    catch (error) {
        return false;
    }
}
const jobToDo = [];
if (!JSON.parse(localStorage.getItem("Job"))) {
    localStorage.setItem("Job", JSON.stringify(jobToDo));
}
class TodoList {
    constructor(id, title, context, status) {
        this.status = 1;
        this.id = id;
        this.title = title;
        this.context = context;
        this.status = status;
    }
    get getId() {
        return this.id;
    }
}
function onAddJob() {
    const jobList = getAllItems("Job");
    let id = jobList.length > 0 ? jobList[jobList.length - 1].id + 1 : 1;
    let jobTitle = document.getElementById("jobTitle");
    let context = document.getElementById("jobDetail");
    let titleValue = jobTitle.value;
    let detailValue = context.value;
    let status = 1;
    let newJob = new TodoList(id, titleValue, detailValue, status);
    jobList.push(newJob);
    localStorage.setItem("Job", JSON.stringify(jobList));
    renderJobs();
    closePopUp();
}
function onDeleteJob(id) {
    let popUp = "Are you sure to delete?";
    if (confirm(popUp)) {
        deleteItemById("Job", id);
        renderJobs();
    }
}
function showPopUp() {
    let showPopUp = document.getElementById("popUp");
    showPopUp.style.display = "block";
    showPopUp.innerHTML = `<div class="showPopUp">
  <div class="popUpBoard">
    <button class="closePopUp" onclick="closePopUp()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h1>
      <strong>NEW JOB : </strong>
    </h1>
    <div class="popUpInput">
      <input type="text" placeholder="Job title :" id="jobTitle" />
      <input type="text" placeholder="Job detail :" id="jobDetail" />
      <button onclick="onAddJob()">Add this job</button>
    </div>
  </div>
</div>
  `;
}
function closePopUp() {
    let closePopUp = document.getElementById("popUp");
    closePopUp.style.display = "none";
    window.location.reload();
}
function onEditJob(id) {
    let showPopUp = document.getElementById("popUp");
    showPopUp.style.display = "block";
    const jobList = getAllItems("Job");
    const jobAfterFind = jobList.find((item) => item.id == id);
    console.log(jobAfterFind);
    showPopUp.innerHTML = `<div class="showPopUp">
  <div class="popUpBoard">
    <button class="closePopUp" onclick="closePopUp()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h1>
      <strong>EDIT JOB : </strong>
    </h1>
    <div class="popUpInput">
      <input type="text" value="${jobAfterFind.title}" id="jobTitle" />
      <input type="text" value="${jobAfterFind.context}" id="jobDetail" />
      <button onclick="onConfirmEditJob(${jobAfterFind.id})">Confirm</button>
    </div>
  </div>
</div>
  `;
}
function onConfirmEditJob(id) {
    const jobList = getAllItems("Job");
    const jobAfterFind = jobList.find((item) => item.id == id);
    let jobTitle = document.getElementById("jobTitle");
    let context = document.getElementById("jobDetail");
    let titleValue = jobTitle.value;
    let contextlValue = context.value;
    jobAfterFind.title = titleValue;
    jobAfterFind.context = contextlValue;
    let indexOfJob = jobList.findIndex((item) => item.id == id);
    jobList[indexOfJob] = jobAfterFind;
    localStorage.setItem("Job", JSON.stringify(jobList));
    renderJobs();
    closePopUp();
}
function renderJobs() {
    let jobList = getAllItems("Job");
    let renderToDoList = document.getElementById("jobOnBoard");
    renderToDoList.innerHTML = ``;
    let workingToDoList = document.getElementById("workBoard");
    workingToDoList.innerHTML = ``;
    let doneToDoList = document.getElementById("doneBoard");
    doneToDoList.innerHTML = ``;
    jobList.forEach((item) => {
        if (item.status == 1) {
            renderToDoList.innerHTML += `<div class="jobNote">
        <h4><strong>${item.title}</strong></h4>
        <div class="jobDetail">
          <p>
            ${item.context}
          </p>
          <div class="jobBtn">
            <button onclick="onEditJob( ${item.id})">
              <i class="fa-solid fa-file-pen"></i>
            </button>
            <button onclick="onWorkingJob(${item.id})">
              <i class="fa-solid fa-briefcase"></i>
            </button>
            <button onclick="onDeleteJob(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
        }
        if (item.status == 2) {
            workingToDoList.innerHTML += `<div class="jobNote" style="background-color: rgb(241, 94, 75)">
        <h4><strong>${item.title}</strong></h4>
        <div class="jobDetail">
          <p>
            ${item.context}
          </p>
          <div class="jobBtn">
            <button onclick="onEditJob( ${item.id})">
              <i class="fa-solid fa-file-pen"></i>
            </button>
            <button onclick="onDoneJob(${item.id})">
            <i class="fa-solid fa-square-check"></i>
            </button>
            <button onclick="onDeleteJob(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
        }
        if (item.status == 3) {
            doneToDoList.innerHTML += `<div class="jobNote" style="background-color: rgb(72, 214, 91)">
        <h4><strong>${item.title}</strong></h4>
        <div class="jobDetail">
          <p>
            ${item.context}
          </p>
          <div class="jobBtn">
            <button onclick="onDeleteJob(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
        }
    });
}
function onWorkingJob(id) {
    const jobList = getAllItems("Job");
    const jobAfterFind = jobList.find((item) => item.id == id);
    jobAfterFind.status = 2;
    let indexOfJob = jobList.findIndex((item) => item.id == id);
    jobList[indexOfJob] = jobAfterFind;
    localStorage.setItem("Job", JSON.stringify(jobList));
    renderJobs();
}
function onDoneJob(id) {
    const jobList = getAllItems("Job");
    const jobAfterFind = jobList.find((item) => item.id == id);
    jobAfterFind.status = 3;
    let indexOfJob = jobList.findIndex((item) => item.id == id);
    jobList[indexOfJob] = jobAfterFind;
    localStorage.setItem("Job", JSON.stringify(jobList));
    renderJobs();
}
