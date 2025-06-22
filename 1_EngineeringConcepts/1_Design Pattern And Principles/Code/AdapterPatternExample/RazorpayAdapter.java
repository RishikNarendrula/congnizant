

public class RazorpayAdapter implements PaymentProcessor{
    private RazorpayGateway razorpayPayment;
    
    public RazorpayAdapter(RazorpayGateway razorpayPayment){
        this.razorpayPayment=razorpayPayment;
    }
    
    @Override
    public void processPayment(double amount) {
        razorpayPayment.razorTransaction(amount);
    }
    
}
