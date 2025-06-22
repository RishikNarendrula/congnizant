import java.util.*;

class Product {
    int id;
    String name;
    int quantity;
    double price;

    Product(int id, String name, int quantity, double price) {
        this.id = id;
        this.name = name.toLowerCase();
        this.quantity = quantity;
        this.price = price;
    }
}


class LinearSearchInventory {
    ArrayList<Product> products = new ArrayList<>();

    void addProduct(Product product) {
        products.add(product);
    }

    boolean searchById(int id) {
        for (Product product : products) {
            if (product.id == id) return true;
        }
        return false;
    }
}

class BinarySearchInventory {
    ArrayList<Product> products = new ArrayList<>();

    void addProduct(Product product) {
        int low = 0, high = products.size() - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products.get(mid).id < product.id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        products.add(low, product); 
        }

    boolean searchById(int id) {
        int low = 0, high = products.size() - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products.get(mid).id == id) return true;
            else if (products.get(mid).id < id) low = mid + 1;
            else high = mid - 1;
        }
        return false;
    }
}

public class E_Commerce {
    public static void main(String[] args) {
        
        Product mobile = new Product(1, "mobile", 10, 20.00);
        Product batteries = new Product(2, "batteries", 20, 1.50);
        Product chargers = new Product(3, "chargers", 30, 2.00);

        
        LinearSearchInventory linearInventory = new LinearSearchInventory();
        BinarySearchInventory binaryInventory = new BinarySearchInventory();

       
        linearInventory.addProduct(mobile);
        linearInventory.addProduct(batteries);
        linearInventory.addProduct(chargers);

        binaryInventory.addProduct(mobile);
        binaryInventory.addProduct(batteries);
        binaryInventory.addProduct(chargers);

       
        if (linearInventory.searchById(2)) {
            System.out.println("Product with ID 2 found using Linear Search.");
        } else {
            System.out.println("Product with ID 2 not found using Linear Search.");
        }

        
        if (binaryInventory.searchById(2)) {
            System.out.println("Product with ID 2 found using Binary Search.");
        } else {
            System.out.println("Product with ID 2 not found using Binary Search.");
        }
    }
}
