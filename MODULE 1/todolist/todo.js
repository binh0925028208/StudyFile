const $ = JSON.parse(localStorage.getItem('job'))
const job=[{
    todo : '',
    status: false,
}]
if (!(JSON.parse(localStorage.getItem('job')))){
    localStorage.setItem('job', JSON.stringify(job))
}

function renderJob(){
    const localData= JSON.parse(localStorage.getItem('job'))
    const jobList = document.getElementById('myJobList')
    jobList.innerHTML=""
    localData.forEach(function(item,index){
        jobList.innerHTML+=`
        <li>
          <div class="job_detail">
            <p>${item.todo}</p>
            <div>
              <button onclick="deleteJob(${index})">delete</button>
              <button onclick="updateJob()">update</button>
            </div>
          </div>
        </li>`   
    });
}
renderJob()

function newJob(event){
    event.preventDefault()
    let myNewJob = document.getElementById ('jobText')
    let jobData= myNewJob.value
    let newJobData = {
        todo : jobData,
        status :false,
    }
    const localData= $
    localData.push(newJobData)
    localStorage.setItem('job',JSON.stringify(localData))
    document.getElementById ('jobText').value=""
    renderJob()
}

function deleteJob(stt){
    const localData = $
    const newUpdate =localData.filter(function(item,index){
        return stt!=index
    })
    localStorage.setItem('job',JSON.stringify(newUpdate))
    renderJob()
}

 