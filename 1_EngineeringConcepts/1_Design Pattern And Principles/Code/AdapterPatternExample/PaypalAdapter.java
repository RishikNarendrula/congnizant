
public class PaypalAdapter implements PaymentProcessor{
    private PayPalGateway paypal;
    public PaypalAdapter(PayPalGateway paypal){
        this.paypal = paypal;
    }
    @Override
    public void processPayment(double amount){
        paypal.makePayment(amount);
    }
    
}
