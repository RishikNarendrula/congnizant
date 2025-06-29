
import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator(); 
        System.out.println("Setting up test environment");
    }

    @After
    public void tearDown() {
        calc = null; 
        System.out.println("Tearing down test environment");
    }

    @Test
    public void testAddition() {
        int a = 3;
        int b = 4;

        int result = calc.add(a, b);

        assertEquals(7, result);
    }

    @Test
    public void testSubtraction() {
        int a = 10;
        int b = 4;

        int result = calc.subtract(a, b);

        assertEquals(6, result);
    }
}

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}