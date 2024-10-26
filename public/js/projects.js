import {db} from "../config.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const getProjects = async () => {
  try{
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch {
    console.error("Error fetching projects: ", error);
  }
}
getProjects().then(projects=>{
  console.log(projects);
  projects.map(project=>{
    document.getElementById("projects-row").innerHTML+=`
      <div class="col-md-6">
          <div class="card mb-4">
              <div class="card-body">
                  <h3 class="card-title">${project.title}</h3>
                  <p class="card-text">${project.description}</p>
                  <a target="_blank" href="${project.link}" class="btn btn-primary">Click here</a>
              </div>
          </div>
      </div>
    `;
  })
})