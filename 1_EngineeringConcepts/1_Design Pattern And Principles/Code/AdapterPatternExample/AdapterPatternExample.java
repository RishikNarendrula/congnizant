

public class AdapterPatternExample {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PaypalAdapter(new PayPalGateway());
        paypalProcessor.processPayment(1000);
        PaymentProcessor razorpayProcessor = new RazorpayAdapter(new RazorpayGateway());
        razorpayProcessor.processPayment(1000);
    }
}
