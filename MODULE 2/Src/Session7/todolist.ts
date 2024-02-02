function getAllItems(tableName: string) {
  const entities = JSON.parse(localStorage.getItem(tableName) as string) || [];
  return entities;
}

function deleteItemById(tableName: string, id: number) {
  try {
    const entities =
      JSON.parse(localStorage.getItem(tableName) as string) || [];

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
  } catch (error) {
    return false;
  }
}

interface Job {
  id: number;
  title: string;
  context: string;
  status: number;
}
const jobToDo: Job[] = [];
if (!JSON.parse(localStorage.getItem("Job") as string)) {
  localStorage.setItem("Job", JSON.stringify(jobToDo));
}

class TodoList implements Job {
  id: number;
  title: string;
  context: string;
  status: number = 1;

  constructor(id: number, title: string, context: string, status: number) {
    this.id = id;
    this.title = title;
    this.context = context;
    this.status = status;
  }

  get getId(): number {
    return this.id;
  }
}
function onAddJob(): void {
  const jobList: TodoList[] = getAllItems("Job");
  let id: number = jobList.length > 0 ? jobList[jobList.length - 1].id + 1 : 1;

  let jobTitle: HTMLInputElement = document.getElementById(
    "jobTitle"
  ) as HTMLInputElement;
  let context: HTMLInputElement = document.getElementById(
    "jobDetail"
  ) as HTMLInputElement;
  let titleValue: string = jobTitle.value;
  let detailValue: string = context.value;
  let status: number = 1;
  let newJob: TodoList = new TodoList(id, titleValue, detailValue, status);
  jobList.push(newJob);
  localStorage.setItem("Job", JSON.stringify(jobList));
  renderJobs();
  closePopUp();
}

function onDeleteJob(id: number): void {
  let popUp: string = "Are you sure to delete?";
  if (confirm(popUp)) {
    deleteItemById("Job", id);
    renderJobs();
  }
}

function showPopUp(): void {
  let showPopUp: HTMLElement = document.getElementById("popUp") as HTMLElement;
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

function closePopUp(): void {
  let closePopUp: HTMLElement = document.getElementById("popUp") as HTMLElement;
  closePopUp.style.display = "none";
  window.location.reload();
}

function onEditJob(id: number): void {
  let showPopUp: HTMLElement = document.getElementById("popUp") as HTMLElement;
  showPopUp.style.display = "block";
  const jobList = getAllItems("Job");
  const jobAfterFind = jobList.find((item: Job) => item.id == id);
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

function onConfirmEditJob(id: number): void {
  const jobList = getAllItems("Job");
  const jobAfterFind = jobList.find((item: Job) => item.id == id);
  let jobTitle: HTMLInputElement = document.getElementById(
    "jobTitle"
  ) as HTMLInputElement;
  let context: HTMLInputElement = document.getElementById(
    "jobDetail"
  ) as HTMLInputElement;
  let titleValue: string = jobTitle.value;
  let contextlValue: string = context.value;
  jobAfterFind.title = titleValue;
  jobAfterFind.context = contextlValue;
  let indexOfJob = jobList.findIndex((item: Job) => item.id == id);
  jobList[indexOfJob] = jobAfterFind;
  localStorage.setItem("Job", JSON.stringify(jobList));
  renderJobs();
  closePopUp();
}

function renderJobs(): void {
  let jobList: Job[] = getAllItems("Job");
  let renderToDoList: HTMLElement = document.getElementById(
    "jobOnBoard"
  ) as HTMLElement;
  renderToDoList.innerHTML = ``;
  let workingToDoList: HTMLElement = document.getElementById(
    "workBoard"
  ) as HTMLElement;
  workingToDoList.innerHTML = ``;
  let doneToDoList: HTMLElement = document.getElementById(
    "doneBoard"
  ) as HTMLElement;
  doneToDoList.innerHTML = ``;
  jobList.forEach((item: Job) => {
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

function onWorkingJob(id: number): void {
  const jobList = getAllItems("Job");
  const jobAfterFind = jobList.find((item: Job) => item.id == id);
  jobAfterFind.status = 2;
  let indexOfJob = jobList.findIndex((item: Job) => item.id == id);
  jobList[indexOfJob] = jobAfterFind;
  localStorage.setItem("Job", JSON.stringify(jobList));
  renderJobs();
}

function onDoneJob(id: number): void {
  const jobList = getAllItems("Job");
  const jobAfterFind = jobList.find((item: Job) => item.id == id);
  jobAfterFind.status = 3;
  let indexOfJob = jobList.findIndex((item: Job) => item.id == id);
  jobList[indexOfJob] = jobAfterFind;
  localStorage.setItem("Job", JSON.stringify(jobList));
  renderJobs();
}
