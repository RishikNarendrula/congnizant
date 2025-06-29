

import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class MyServiceTest {
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.fetchData();

        verify(mockApi).getData();
    }
}

class ExternalApi {
    public void getData() {
    }
}

class MyService {
    private final ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData() {
        api.getData();
    }
}