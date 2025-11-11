package exercicios;

import java.util.Scanner;

public class exercicio_cinco {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        double salario_base = sc.nextDouble();
        double salario_liquido = (salario_base * 0.05) + salario_base;

        System.out.println("O salário liquido é de: " + salario_liquido);

    }
}
