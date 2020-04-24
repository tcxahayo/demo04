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
    // echo '连接成功';

     //检测
     if($conn->connect_error){
         die("连接失败：" . $conn->connect_error);
     }

     $conn->query("SET NAMES 'UTF8' ");

     //注册
     function regist(){
        $sql = "INSERT INTO user (username, pass) VALUES ('admin','admin')";
        $result = $GLOBALS['conn']->query($sql);
        if($result){
            echo '成功了';
        }else{
            echo '失败了';
        }
    }
    //登陆
    function login($name,$pass){
        $sql = "SELECT * FROM user WHERE username = '$name' AND pass = '$pass' ";
        $result = $GLOBALS['conn']->query($sql);
        $results = array();
        if($result->num_rows > 0){
            echo "true";
        }else{
            echo "false";
        }
    }


    if($_POST){
        $type = $_POST['type'];
        $name = $_POST['username'];
        $pass = $_POST['password'];
        if($type === 'login'){
            login($name, $pass);    
        }
    }

    $conn->close();
?>