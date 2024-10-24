<?php
include_once("./config/db.php");
$db = new DB();
if($_SERVER["REQUEST_METHOD"]=="POST"){
  $title = $_POST["title"];
  $description = $_POST["description"];
  $link = $_POST["link"];
  $req = $db->SQLMethods("INSERT INTO projects (title,description,link,date) VALUES (?,?,?,NOW())",[$title,$description,$link]);
  if($req!=1){
    echo "Please try again :)";
  } else {
    header("location: index.php");
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Osama Benali - Add Project</title>
  <link rel="stylesheet" href="./style/control.css">
</head>
<body>
  <div class="form-container">
    <h2>Add Project</h2>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
      <div class="form-group">
        <label for="title">Project Title</label>
        <input type="text" id="title" name="title" placeholder="Enter project title" required>
      </div>
      <div class="form-group">
        <label for="description">Project Description</label>
        <textarea id="description" name="description" rows="4" placeholder="Enter project description" required></textarea>
      </div>
      <div class="form-group">
        <label for="link">Project Link</label>
        <input type="url" id="link" name="link" placeholder="Enter project link" required>
      </div>
      <button type="submit">Add Project</button>
    </form>
  </div>
</body>
</html>