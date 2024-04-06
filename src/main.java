import java.awt.*;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        String name = "";
        String nameQuip = "";
        String income = "";
        String goal = "";
        String currentSavings = "";
        String savingsGoal = "";
        char currencyUnit;
        boolean timeFrame = true;
        String timeFrame2 = "What is your preferred time frame (in months)?";
        int numQuestions; // to pass to HTML somehow?

        Scanner scan = new Scanner(System.in);

        System.out.println("What is your name?");

        name = scan.next();

        System.out.println("Hello, " + name + "!");

        if (name.equals("Wealfy")) {
            nameQuip = "We have the same name!";
        }
        else if (name.equals("")) {
            nameQuip = "Ok, Anonymous, very mysterious.";
        }
        else if (name.equals("Jaden") || name.equals("Zhiting") || name.equals("Bre'Anna")) {
            nameQuip = "You have the same name as one of the creators of this site!";
        }

        System.out.println(nameQuip);

        System.out.println("What is your income bracket?");

        System.out.println("What is your current savings at?");

        currentSavings = scan.next();

        try {
            Integer.parseInt(currentSavings);
        }
        catch(Exception e) {
            System.out.println("Please enter a valid number.");
        }

        System.out.println("What is your savings goal (in units of your currency)?");

        savingsGoal = scan.next();

        try {
            Integer.parseInt(savingsGoal);
        }
        catch(Exception e) {
            System.out.println("Please enter a valid number.");
        }

        System.out.println("What is your goal?");

        if (goal.equals("Get out of debt")) {
            numQuestions = 3;
            String debtAmount = "How much debt are you in?";
            String debtTimeFrame = "What is your preferred time frame to get out of debt (in months)";
            String interest = "What is the interest rate?";
        }
        else if (goal.equals("Avoid debt")) {
            timeFrame = false;
        }
        else if (goal.equals("Retirement")) {

        }
        else if (goal.equals("Buy a house")) {

        }
        else if (goal.equals("College fund")) {

        }
        else {

        }
    }
}
