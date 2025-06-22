
public class BuilderPatternExample {
   public static void main(String[] args) {
        // Create a new instance of the Builder class
        Computer basiComputer=new Computer.Builder("Intel", "16GB", "512GB").build();
        System.out.println(basiComputer);
        Computer gaminComputer=new Computer.Builder("AMD", "8GB", "256GB").build();
        System.out.println(gaminComputer);
        Computer OfficeComputer=new Computer.Builder("Intel", "16GB", "512GB").build();
        System.out.println(OfficeComputer);

        basiComputer.toString();
        gaminComputer.toString();
        OfficeComputer.toString();
   }
}