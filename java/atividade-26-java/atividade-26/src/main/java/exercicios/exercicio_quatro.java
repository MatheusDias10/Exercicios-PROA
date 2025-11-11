package exercicios;

import java.util.Scanner;

public class exercicio_quatro {
    public static void main(String[] args) {

        Scanner scanner =  new Scanner(System.in);

        double n1 = scanner.nextDouble();
        double n2 = scanner.nextDouble();
        double n3 = scanner.nextDouble();

        double media_ponderada = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;

        System.out.println("A média pondera é de: " + media_ponderada);
    }
}
