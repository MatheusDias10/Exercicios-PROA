package exercicios;

public class exercicio_sete {
    public static void main(String[] args) {

        double deposito_mensal = 100.0;
        double juros_mensal = 0.05;

        double montante = deposito_mensal * Math.pow(1 + juros_mensal, 12);

        System.out.println("Montante: " + montante);
    }
}
