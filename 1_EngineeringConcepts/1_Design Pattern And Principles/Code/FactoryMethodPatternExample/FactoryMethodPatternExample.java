abstract class Document{
    public abstract void openDoc();
    public abstract void readDoc();
    public abstract void closeDoc();

}
class ConcreteWordDocument extends Document{

    public void openDoc(){
        System.out.println("Opening Word Document");
    }
    public void readDoc(){
        System.out.println("Reading Word Document");
    }
    public void closeDoc(){
        System.out.println("Closing Word Document");
    }

}
class ConcretePDFDocument extends Document{
    public  void openDoc(){
        System.out.println("Opening PDF Document");
    }
    public  void readDoc(){
        System.out.println("Reading PDF Document");
    }
    public  void closeDoc(){
        System.out.println("Closing PDF Document");
    }
}
class ConcreteExcelDocument extends Document{
    public  void openDoc(){
        System.out.println("Opening Excel Document");
    }
    public  void readDoc(){
        System.out.println("Reading Excel Document");
    }
    public  void closeDoc(){
        System.out.println("Closing Excel Document");
    }
}

abstract class DocumentFactory{
    abstract Document createDocument();
}
class WordDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new ConcreteWordDocument();
    }
}
class PDFDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new ConcretePDFDocument();
    }
}
class ExcelDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new ConcreteExcelDocument();
    }
}
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PDFDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();
        wordDoc.openDoc();
        wordDoc.readDoc();
        wordDoc.closeDoc();
        pdfDoc.openDoc();
        pdfDoc.readDoc();
        pdfDoc.closeDoc();
        excelDoc.openDoc();
        excelDoc.readDoc();
        excelDoc.closeDoc();
    }
}
