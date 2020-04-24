<?php
 header('Access-Control-Allow-Origin: *');//跨域处理，允许所有来源访问
 header("Content-type: application/json");  //json头
 header("Access-Control-Allow-Credentials: true");//跨域，是否带cookie
 header('Access-Control-Allow-Headers:x-requested-with,content-type,test-token,test-sessid');//注意头部自定义参数不要用下划线
 header("content-type:text/html;charset=utf-8");  //内容类型，网页编码

    $servername = "127.0.0.1";
    $username = "root";
    $password = "123456tcx!";
    $dbname = "myDB";

    //创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    //检测
    if($conn->connect_error){
        die("连接失败：" . $conn->connect_error);
    }
    $conn->query("SET NAMES 'UTF8' ");
    //获取全部数据
  
    function getList(){
        $sql = "SELECT * FROM list ";
        $result = $GLOBALS['conn']->query($sql);
        $results = array();
        if($result->num_rows > 0){
           while($row = $result->fetch_assoc()){
            $results[] = $row;
           }
           echo json_encode($results,JSON_UNESCAPED_UNICODE);
           return json_encode($results,JSON_UNESCAPED_UNICODE);
        }else{
            echo "没有结果";
        }
    }
    //插入数据
    function add($mes){
        $sql = "INSERT INTO list (content) VALUES ('$mes') ";
        $result = $GLOBALS['conn']->query($sql);
        if($result){
            echo "添加成功";
        }else{
            echo "添加失败";
        }
    }
    //删除数据
    function delete($id){
        $sql = "DELETE FROM list WHERE id = $id ";
        $result = $GLOBALS['conn']->query($sql);
        if($result){
            echo "删除成功";
        }else{
            echo "删除失败哦：" . $conn->error;
        }
    }
    //修改数据
    function update($mes, $id){
        $sql = "UPDATE list set content = '$mes' WHERE id = $id ";
        $result = $GLOBALS['conn']->query($sql);
        if($result){
            echo '修改成功了哦';
        }else{
            echo '修改失败了哦';
        }
    }
 
   
    if($_GET){
        $type = $_GET['type'];
        switch ($type){
            case 'all':
                getList();
            break;
        }
    }

    if($_POST){
        $type = $_POST['type'];
        $values = $_POST['values'];
        $id = $_POST['id'];
        switch ($type){
            case 'add':
                add($values);
            break;
            case 'delete':
                delete($id);
            break;
            case 'edit':
                update($values,$id);
            break;
        }
    }




    $conn->close();



    //创建数据库myDB
    // $sql = "CREATE DATABASE myDB";
    // if($conn->query($sql) === TRUE){
    //     echo "创建成功";
    // }else{
    //     echo "error:" . $conn->error;
    // }

    //创建表
    // $sql = "CREATE TABLE MyGuests (
    //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    //     firstname VARCHAR(30) NOT NULL,
    //     lastname VARCHAR(30) NOT NULL,
    //     email VARCHAR(50),
    //     reg_date TIMESTAMP
    // )";
    // $sql = "CREATE TABLE list (
    //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    //     content VARCHAR(30) NOT NULL,
    //     reg_date TIMESTAMP
    // )";
    // if($conn->query($sql) === TRUE){
    //     echo "创建成功";
    // }else{
    //     echo "创建失败：" . $conn->error;
    // }

    // //插入数据
    // $sql = "INSERT INTO MyGuests (firstname, lastname, email) VALUES ('TANG', 'wang', '123456@qq.com')";
    // if($conn->query($sql) === TRUE){
    //     echo "插入成功";
    // }else{
    //     echo "插入失败:" . $conn->error;
    // }

    //   $sql = "INSERT INTO list (content) VALUES ('学习PHP啦') ";
    // if($conn->query($sql) === TRUE){
    //     echo "插入成功";
    // }else{
    //     echo "插入失败:" . $conn->error;
    // }

 
    
    //读取数据
    // $sql = "SELECT * FROM MyGuests WHERE firstname = 'TANG' ";
    // $sql = "SELECT content FROM list ";
    // $result = $conn->query($sql);
    // if($result->num_rows > 0){
    //    while($row = $result->fetch_array()){
    //        echo $row["content"];
    //    }
    // }else{
    //     echo "没有结果";
    // }


    
    //删除数据
    // $sql = "DELETE FROM list WHERE id = '2' ";
    // $result = $conn->query($sql);
    // if($result){
    //     echo "删除成功";
    // }else{
    //     echo "删除失败哦：" . $conn->error;
    // }

    //修改数据
    // $sql = "UPDATE list set content = '学习php不？' WHERE id = 1";
    // $result = $conn->query($sql);
    // if($result){
    //     echo "修改成功啦";
    // }else{
    //     echo "修改失败：" . $conn->error;
    // }
?>