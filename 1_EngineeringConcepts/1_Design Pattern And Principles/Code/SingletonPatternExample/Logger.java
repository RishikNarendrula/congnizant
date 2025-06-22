
public class Logger {
    private static Logger instance;
    private Logger(){
        System.out.println("Logger Initialized");
    }
    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }
    public static void main(String[] args){
        Logger l1=Logger.getInstance();
        Logger l2=Logger.getInstance();

        if(l1 == l2){
        System.out.println("Both l1 and l2 are same");
        }else{
        System.out.println("Different instances!");
        }
    }
}





