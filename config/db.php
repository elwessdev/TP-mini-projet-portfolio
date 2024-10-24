<?php 
  class DB{
    // DB Config
    private $DB_SERVER = "localhost";
    private $DB_NAME="gitportfolio";
    private $DB_USERNAME="root";
    private $DB_PASSWORD="";
    private $connection;

    public function __construct(){
      // Connection
      try{
        $this->connection = new PDO("mysql:host=$this->DB_SERVER;dbname=$this->DB_NAME",$this->DB_USERNAME,$this->DB_PASSWORD);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo "<h1>DB connected :)</h1>";
      } catch(PDOException $err){
        echo "DB error ".$err->getMessage();
        die();
      }
    }
    // Execute Select
    public function SQLSelect($query,$data = NULL){
      try{
        $stmt = $this->connection->prepare($query);
        $stmt->execute($data);
        return $stmt->fetchALL(PDO::FETCH_ASSOC);
      } catch(Exception $e){
        return "Error: " . $e->getMessage();
      }
    }
    // Execute Update,Insert,Delete
    public function SQLMethods($query,$data = NULL){
      try {
        $stmt = $this->connection->prepare($query);
        return $stmt->execute($data);
      } catch (Exception $e) {
        return "Error: " . $e->getMessage();
      }
    }
  }
?>