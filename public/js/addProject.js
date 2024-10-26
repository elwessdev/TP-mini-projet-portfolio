import { db } from '../config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.getElementById("addProject").addEventListener("click", async () => {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let link = document.getElementById("link").value;
  if(title&&description&&link){
    try {
      await addDoc(collection(db, "projects"), {
        title: title,
        description: description,
        link: link,
        addedAt: serverTimestamp(),
      });
      Swal.fire({
        title: "Project Added!",
        icon: "success"
      });
      setTimeout(()=>{
        location.reload();
      },1300)
      console.log("project added");
    } catch (e) {
      console.error("Error: ", e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try agin",
      });
    }
  }
})