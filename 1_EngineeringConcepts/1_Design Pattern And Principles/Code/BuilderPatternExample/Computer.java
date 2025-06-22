
    public class Computer{
    private final String CPU;
    private final String RAM;
    private final String Storage;
    
    private Computer(Builder builder){
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.Storage = builder.Storage;
    }

    public static class Builder{
        private final String CPU;
        private final String RAM;
        private final String Storage;
        public Builder(String CPU, String RAM, String Storage){
            this.CPU = CPU;
            this.RAM = RAM;
            this.Storage = Storage;
        }
        public Computer build(){
            return new Computer(this);
        }
    }
    public String toString(){
        return "CPU: "+CPU+"\nRAM: "+RAM+"\nStorage: "+Storage;
    }
}

