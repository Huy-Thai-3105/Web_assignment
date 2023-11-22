<?php

require_once "./mvc/core/Model.php";
require_once "./mvc/models/OrderProductModel.php";

class OrderModel extends Model {
    private $db_table = "orders";
    private $orderProduct;

    public function __construct() {
        parent::__construct();

        $this->orderProduct = new OrderProductModel();
    }

    public function read($user_id) {
        //if (!$this->conn) echo "null";
        $query = "SELECT * FROM $this->db_table WHERE user_id=$user_id ORDER BY time DESC";
        $stmt = mysqli_query($this->conn, $query);
        $result = array(); 

        while($row = mysqli_fetch_assoc($stmt))
        {
            $order_id = $row["id"];
            $query_product = "
            SELECT products.product_name, products.price, list_product.quantity, list_product.order_id, products.image, products.brand
            FROM products 
            INNER JOIN (
                SELECT op.product_id, op.quantity, op.order_id
                FROM orders AS o
                INNER JOIN orders_product AS op ON o.id = op.order_id
                WHERE o.id = $order_id AND o.user_id = $user_id
            ) AS list_product  
            ON products.id = list_product.product_id;
            ";
            $stmt_product = mysqli_query($this->conn, $query_product);
            while ($row_product =  mysqli_fetch_assoc($stmt_product)){
                $row["product_list"][] = $row_product;
            }
            $result[] = $row;
        }
        return  $result;
    }

    public function totalPriceOrder ($user_id){
        #Không sử dụng bangr tạm như trên để cải thiện hiệu suất truy vấn
        $query = "
        SELECT SUM(p.price * op.quantity) AS point
        FROM products p
        INNER JOIN orders_product op ON p.id = op.product_id
        INNER JOIN orders o ON o.id = op.order_id
        WHERE o.user_id = $user_id;
        ";
        $stmt = mysqli_query($this->conn, $query);
        $result = array(); 

        while($row = mysqli_fetch_assoc($stmt)){
            $result = $row;
        }
        return $result;
    }

    public function create($user_id, $productList) {
        //if (!$this->conn) echo "null";

        $query = "INSERT INTO $this->db_table (user_id) VALUES ($user_id)";
        $stmt = mysqli_query($this->conn, $query);
        
        //if (!$this->orderProduct) echo "null";

        foreach ($productList as $val) {
            
            if (!$this->orderProduct->create(mysqli_insert_id($this->conn), $val->product_id, $val->quantity)) 
                return false;
        }
        if($stmt) {
            return true;
        }
        else {
            return false;
        }
    } 
}
    
?>